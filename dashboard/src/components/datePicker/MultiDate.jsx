import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";

const MultiDate = ({ values, setValues }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    const dateArray = [];
    if (startDate && endDate) {
      const currentDate = moment(startDate);
      const lastDate = moment(endDate);
      while (currentDate <= lastDate) {
        dateArray.push(currentDate.format("MM-DD-YYYY"));
        currentDate.add(1, "days");
      }
      setValues({
        ...values,
        dates: dateArray,
      });
    }
  }, [startDate, endDate]);

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      placeholderText="Select Multiple Dates"
      className="w-full outline-0 bg-gray-50 p-2 mt-2"
      minDate={new Date()}
    />
  );
};

export default MultiDate;
