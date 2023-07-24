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
  findItems,
  sumReview,
}) => {
  const router = useRouter();
  return (
    <div className="shadow-sm border rounded-xl p-5 md:p-00 bg-white text-gray-700">
      <div className="flex gap-0 justify-between items-center">
        <div className="flex gap-0 items-center">
          <p className="font-semibold text-3xl">${data?.price}</p>
          <p>/</p>
          <p className="text-gray-600">night</p>
        </div>
        <div className="flex gap-0 items-center">
          <i className="fa-solid fa-star text-yellow-500"></i>
          <p className="font-semibold">
            {findItems?.reviews.length &&
              (sumReview / findItems?.reviews.length).toFixed(1)}
          </p>
          <p className="text-gray-600">({findItems?.reviews.length})</p>
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
      <div>
        <div className="flex justify-between gap-2 mt-5 text-xl">
          <p>
            ${data?.price} x {startDate && endDate ? dateArray.length : 0} night
          </p>
          <p>${startDate && endDate ? data?.price * dateArray.length : 0}</p>
        </div>
        <div className="flex justify-between gap-2 mt-5 text-xl">
          <p>Service charge</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between gap-2 mt-5 text-xl border-t">
          <p className="text-2xl font-semibold">Total</p>
          <p>${startDate && endDate ? data?.price * dateArray.length : 0}</p>
        </div>
      </div>
      {startDate && endDate ? (
        <button
          className="bg-secondary w-full rounded-full px-2 py-2 mt-5 text-white font-semibold"
          onClick={() => {
            setBookObj(data);
            setBookDates(dateArray);
            setTostify("You have successfully booked!");
            router.push("/checkout");
          }}
        >
          Book
        </button>
      ) : (
        <motion.button
          className="bg-secondary w-full rounded-full px-2 py-2 mt-5 text-white font-semibold"
          onClick={() => {
            setTostify("Please select at least one night!");
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Book
        </motion.button>
      )}
    </div>
  );
};

export default Book;
