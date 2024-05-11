import Dropdown from "@/components/dropdown";
import db from "@/public/db";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext } from "react";
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
      className={`w-full shadow-lg lg:rounded-full rounded-md bg-white px-5 py-2 text-gray-600 grid grid-cols-1 sm:grid-cols-3 gap-10 xl:grid-cols-4 items-center lg:justify-items-center ${
        availability ? "" : "mt-20 container"
      }`}
    >
      <div className="text-end md:text-center flex items-center md:justify-center justify-between gap-5">
        <i className="fa-solid fa-location-dot text-2xl"></i>
        <div>
          <p className="font-semibold text-xl">Location</p>
          <Dropdown
            items={db}
            onChangeLocation={onChangeLocation}
            searchLocation={searchObj.searchLocation}
          />
         </div>
      </div>
      <div className="text-end md:text-center flex items-center md:justify-center justify-between gap-5">
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

      <div className="text-end md:text-center flex items-center md:justify-center justify-between gap-5">
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
        className="bg-primary text-white md:w-16 md:h-16 rounded-full font-bold mx-auto md:mx-0 w-12 h-12"
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
