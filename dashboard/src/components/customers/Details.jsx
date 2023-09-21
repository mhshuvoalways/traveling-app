import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";

const Details = () => {
  const [customers, setCustomers] = useState([]);
  const param = useParams();

  const callApi = () => {
    axios
      .get(`/calendar/getvrbodates/${param.condoid}`)
      .then((res) => {
        const data = parseICS(res.data);
        setCustomers(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    callApi();
    const intervalId = setInterval(() => {
      callApi();
    }, 1000 * 20);

    return () => {
      clearInterval(intervalId);
    };
  }, [param]);

  function parseICS(icsData) {
    const lines = icsData.split("\n");
    const events = [];
    let event = {};

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith("BEGIN:VEVENT")) {
        event = {};
      } else if (line.startsWith("END:VEVENT")) {
        if (event.dtstamp && event.dtstart && event.dtend) {
          event.dtstamp = parseICSTime(event.dtstamp);
          event.dtstart = parseICSTime(event.dtstart);
          event.dtend = parseICSTime(event.dtend);
          events.push(event);
        }
      } else {
        const [key, value] = line.split(":");
        switch (key) {
          case "UID":
            event.uid = value;
            break;
          case "DTSTAMP":
            event.dtstamp = value;
            break;
          case "DTSTART;VALUE=DATE":
            event.dtstart = value;
            break;
          case "DTEND;VALUE=DATE":
            event.dtend = value;
            break;
          case "SUMMARY":
            event.summary = value;
            break;
        }
      }
    }
    return events;
  }

  function parseICSTime(icsTime) {
    const year = parseInt(icsTime.slice(0, 4), 10);
    const month = parseInt(icsTime.slice(4, 6), 10) - 1;
    const day = parseInt(icsTime.slice(6, 8), 10);
    return formatDate(new Date(year, month, day));
  }

  function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  }

  return (
    <div>
      {customers.map((cus) => (
        <div key={cus.uid} className="bg-white p-5 shadow rounded mb-5">
          <p>Summary: {cus.summary}</p>
          <p>Date start: {cus.dtstart}</p>
          <p>Date end: {cus.dtend}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
