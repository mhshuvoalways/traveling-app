import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";

const Details = () => {
  const [customers, setCustomers] = useState([]);
  const param = useParams();

  useEffect(() => {
    axios
      .get(`/book/getbooks`)
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => console.log(err));
  }, [param]);

  return (
    <div>
      {customers.map((cus) => (
        <div key={cus._id} className="bg-white p-5 shadow rounded mb-5">
          <p className="text-lg border-b py-2">Name: {cus.name}</p>
          <div className="flex justify-between gap-2 flex-wrap border-b py-2">
            <p className="text-lg">Email: {cus.email}</p>
            <a
              href={`https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=${cus.email}`}
              target="blank"
            >
              <i className="fa-solid fa-envelope text-xl"></i>
            </a>
          </div>
          <div className="flex justify-between gap-2 flex-wrap border-b py-2">
            <p className="text-lg">Phone: {cus.phone}</p>
            <a href={`https://wa.me/${cus.phone}`} target="blank">
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </a>
          </div>
          <div className="border-b py-2">
            <p className="text-lg mb-1">Date:</p>
            {cus.dates.map((date) => (
              <p key={date}>{date}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
