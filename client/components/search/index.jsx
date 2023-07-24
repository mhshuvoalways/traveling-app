import { useRouter } from "next/router";
import { useContext } from "react";
import { motion } from "framer-motion";
import { MyContext } from "../../context/context";
import Calendar from "../calendar/SearchCalendar";

const Index = ({ availability }) => {
  const router = useRouter();
  const {
    searchObj,
    searchClickHandler,
    onChangeLocation,
    onChangeDate,
    onChangeGuests,
  } = useContext(MyContext);

  return (
    <div
      className={`mx-auto shadow-lg md:rounded-full rounded-md bg-white px-5 py-2 text-gray-600 flex items-center justify-center md:justify-between flex-wrap gap-5 ${
        availability
          ? "w-full"
          : "md:bottom-10 md:absolute relative w-full md:w-10/12 mt-5"
      }`}
    >
      <div className="text-end md:text-center w-full md:w-auto flex items-center md:justify-center justify-between gap-5">
        <i className="fa-solid fa-location-dot text-2xl"></i>
        <div>
          <p className="font-semibold text-xl">Location</p>
          <select
            className="outline-0 cursor-pointer text-end md:text-start  bg-white pl-14 pr-0 md:pr-5"
            onChange={onChangeLocation}
            value={searchObj.searchLocation}
          >
            <option>United State</option>
            <option>Deltona</option>
            <option>New Smyrna Beach</option>
            <option>Volusia County</option>
          </select>
        </div>
      </div>
      <p className="hidden md:block">|</p>
      <div className="text-end md:text-center w-full md:w-auto flex items-center md:justify-center justify-between gap-5">
        <i className="fa-regular fa-calendar text-2xl"></i>
        <div>
          <p className="font-semibold text-xl">Check in-Check out</p>
          <Calendar
            startDate={searchObj.searchDate.startDate}
            endDate={searchObj.searchDate.endDate}
            onChange={onChangeDate}
          />
        </div>
      </div>
      <p className="hidden md:block">|</p>
      <div className="text-end md:text-center w-full md:w-auto flex items-center md:justify-center justify-between gap-5">
        <i className="fa-regular fa-user text-2xl"></i>
        <div>
          <p className="font-semibold text-xl">Guests</p>
          <input
            type="number"
            className="outline-0 text-end md:text-center"
            placeholder="Guests"
            value={searchObj.searchGuests}
            onChange={onChangeGuests}
            min={1}
          />
        </div>
      </div>
      <motion.button
        className="bg-primary text-white md:w-16 md:h-16 rounded-full font-bold mx-auto md:mx-0 w-full h-12"
        onClick={() => {
          searchClickHandler();
          router.push("/properties");
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fa-solid fa-magnifying-glass text-xl"></i>
      </motion.button>
    </div>
  );
};

export default Index;
