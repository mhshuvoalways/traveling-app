import { useState } from "react";
import { useRouter } from "next/router";
import moment from "moment/moment";
import { motion } from "framer-motion";
import Calendar from "../calendar/BookCalendar";

const Book = ({
  data,
  setBookObj,
  setBookDates,
  startDate,
  endDate,
  dateArray,
  uniqueDatesArray,
  onChange,
  setTostify,
}) => {
  console.log(data);
  const router = useRouter();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    if (
      details.name &&
      details.email &&
      details.phone &&
      data?.minNight <= dateArray.length
    ) {
      event.preventDefault();
      const newObj = data;
      newObj.details = details;
      router.push("/checkout");
      setBookObj(newObj);
      setBookDates(dateArray);
      setTostify("You have successfully booked!");
      console.log(newObj);
    } else {
      event.preventDefault();
      setTostify(`Please select at least ${data?.minNight} night!`);
    }
  };

  return (
    <form
      className="shadow-sm border rounded-xl p-5 md:p-00 bg-white text-gray-700"
      onSubmit={onSubmitHandler}
    >
      <div className="flex gap-0 justify-between items-center">
        <div className="flex gap-0 items-center">
          <p className="font-semibold text-3xl">${data?.price}</p>
          <p>/</p>
          <p className="text-gray-600">night</p>
        </div>
        <div className="flex gap-0 items-center">
          <i className="fa-solid fa-star text-yellow-500"></i>
          <p className="font-semibold">5</p>
          <p className="text-gray-600">(10)</p>
        </div>
      </div>
      <div className="mt-5 space-y-3 border p-5 rounded-2xl">
        <div className="text-center w-full md:w-auto flex items-center gap-5">
          <i className="fa-regular fa-calendar text-2xl"></i>
          <div>
            <p className="font-semibold text-xl text-start">
              {startDate ? moment(startDate).format("MMM DD") : "Check in"} -{" "}
              {endDate ? moment(endDate).format("MMM DD") : "Check out"}
            </p>
            <Calendar
              startDate={startDate}
              endDate={endDate}
              onChange={onChange}
              uniqueDatesArray={uniqueDatesArray}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 py-3 border-y">
        <div>
          <label className="text-lg">Your Name: *</label>
          <input
            type="text"
            className="w-full outline-0 bg-gray-50 p-2"
            placeholder="Your Name"
            required
            name="name"
            value={details.name}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label className="text-lg">Your Email: *</label>
          <input
            type="email"
            className="w-full outline-0 bg-gray-50 p-2"
            placeholder="Your Email"
            required
            name="email"
            value={details.email}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label className="text-lg">Your Phone: *</label>
          <input
            type="phone"
            className="w-full outline-0 bg-gray-50 p-2"
            placeholder="Please write your phone with the code e.g. +1"
            required
            name="phone"
            value={details.phone}
            onChange={onChangeHandler}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between gap-2 mt-5 text-xl">
          <p>
            ${data?.price} x {startDate && endDate ? dateArray.length : 0} night
          </p>
          <p>${startDate && endDate ? data?.price * dateArray.length : 0}</p>
        </div>
        <div className="flex justify-between gap-2 mt-5 text-xl">
          <p>Cleaning fee</p>
          <p>$200</p>
        </div>
        <div className="flex justify-between gap-2 mt-5 text-xl">
          <p>Refundable security fee</p>
          <p>$300</p>
        </div>
        <div className="flex justify-between gap-2 mt-5 text-xl">
          <p>Credit card fee</p>
          <p>4%</p>
        </div>
        <div className="flex justify-between gap-2 mt-5 text-xl border-t">
          <p className="text-2xl font-semibold">Total</p>
          <p>
            $
            {startDate && endDate
              ? data?.price * dateArray.length +
                500 +
                ((data?.price * dateArray.length + 500) * 4) / 100
              : 500 + (500 * 4) / 100}
          </p>
        </div>
      </div>
      <motion.button
        className="bg-secondary w-full rounded-full px-2 py-2 mt-5 text-white font-semibold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Book
      </motion.button>
    </form>
  );
};

export default Book;
