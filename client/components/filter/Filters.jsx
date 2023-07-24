import db from "../../public/db";
import ReactStars from "react-rating-stars-component";
import { motion } from "framer-motion";

const Filters = ({
  modalHandler,
  searchClickHandler,
  bedRoomsAndBeds,
  setBedRoomsAndBeds,
  bedRooms,
  setBedRooms,
  priceRange,
  setPriceRange,
  reviewRange,
  setReviewRange,
  amenities,
  setAmenities,
  propertyTypes,
  setPropertyTypes,
}) => {
  let minValue = 1;
  let maxValue;
  db.forEach((el) => {
    maxValue = Math.max(parseInt(el.price));
  });

  const inCrementBed = () => {
    setBedRoomsAndBeds((prev) => prev + 1);
  };

  const deCrementBed = () => {
    setBedRoomsAndBeds((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev - 1;
    });
  };

  const inCrementBedRooms = () => {
    setBedRooms((prev) => {
      return prev + 1;
    });
  };

  const deCrementBedRooms = () => {
    setBedRooms((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev - 1;
    });
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAmenities((prevSelected) => [...prevSelected, value]);
    } else {
      setAmenities((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    }
  };

  const handleCheckboxChangeProperty = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setPropertyTypes((prevSelected) => [...prevSelected, value]);
    } else {
      setPropertyTypes((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    }
  };

  return (
    <div>
      <div className="mb-5">
        <p className="fond-semibold text-2xl">Rooms and Bathrooms</p>
        <div className="mt-2 flex justify-between gap-2 items-center">
          <p>Bedrooms</p>
          <div className="flex justify-between gap-5 items-center text-xl">
            <p
              className="border-primary border h-4 w-4 pb-4 pt-3 pr-4 pl-4 rounded-full flex justify-center items-center cursor-pointer"
              onClick={deCrementBed}
            >
              -
            </p>
            <p>{bedRoomsAndBeds}</p>
            <p
              className="border-primary border h-4 w-4 pb-4 pt-3 pr-4 pl-4 rounded-full flex justify-center items-center cursor-pointer"
              onClick={inCrementBed}
            >
              +
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-between gap-2 items-center">
          <p>Beds</p>
          <div className="flex justify-between gap-5 items-center text-xl">
            <p
              className="border-primary border h-4 w-4 pb-4 pt-3 pr-4 pl-4 rounded-full flex justify-center items-center cursor-pointer"
              onClick={deCrementBedRooms}
            >
              -
            </p>
            <p>{bedRooms}</p>
            <p
              className="border-primary border h-4 w-4 pb-4 pt-3 pr-4 pl-4 rounded-full flex justify-center items-center cursor-pointer"
              onClick={inCrementBedRooms}
            >
              +
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-5">
        <p className="fond-semibold text-2xl">Guest Rating</p>
        <div className="mt-2 flex justify-between gap-2 items-center">
          <ReactStars
            size={32}
            activeColor="#F59E0B"
            value={reviewRange}
            onChange={setReviewRange}
            className="w-6/12"
          />
          <p>{reviewRange}</p>
        </div>
      </div>
      <hr />
      <div className="my-5">
        <p className="fond-semibold text-2xl">Price Range</p>
        <div className="mt-2 flex justify-between gap-2 items-center">
          <input
            type="range"
            className="w-6/12"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            min={minValue}
            max={maxValue}
          />
          <p>{priceRange}</p>
        </div>
      </div>
      <hr />
      <div className="my-5">
        <p className="fond-semibold text-2xl">Amenities</p>
        <div className="mt-2 flex gap-4 items-center flex-wrap">
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              value="Internet"
              checked={amenities.includes("Internet")}
              onChange={handleCheckboxChange}
            />
            <p>Internet</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              value="TV"
              checked={amenities.includes("TV")}
              onChange={handleCheckboxChange}
            />
            <p>TV</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              value="Swiming"
              checked={amenities.includes("Swiming")}
              onChange={handleCheckboxChange}
            />
            <p>Swiming</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              value="Kitchen"
              checked={amenities.includes("Kitchen")}
              onChange={handleCheckboxChange}
            />
            <p>Kitchen</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              value="AC"
              checked={amenities.includes("AC")}
              onChange={handleCheckboxChange}
            />
            <p>AC</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              value="Washing machine"
              checked={amenities.includes("Washing machine")}
              onChange={handleCheckboxChange}
            />
            <p>Washing machine</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              value="Clothes dryer"
              checked={amenities.includes("Clothes dryer")}
              onChange={handleCheckboxChange}
            />
            <p>Clothes dryer</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              value="Oven"
              checked={amenities.includes("Oven")}
              onChange={handleCheckboxChange}
            />
            <p>Oven</p>
          </label>
        </div>
      </div>
      <hr />
      <div className="my-5">
        <p className="fond-semibold text-2xl">Property type</p>
        <div className="mt-2 flex gap-4 items-center flex-wrap">
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              value="Outdoor swimming pool"
              checked={propertyTypes.includes("Outdoor swimming pool")}
              onChange={handleCheckboxChangeProperty}
            />
            <p>Outdoor swimming pool</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              value="Accessible 24/7"
              checked={propertyTypes.includes("Accessible 24/7")}
              onChange={handleCheckboxChangeProperty}
            />
            <p>Accessible 24/7</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              value="Elevator in building"
              checked={propertyTypes.includes("Elevator in building")}
              onChange={handleCheckboxChangeProperty}
            />
            <p>Elevator in building</p>
          </label>
        </div>
      </div>
      <div className="flex justify-between gap-2 mt-10">
        <motion.p
          className="font-semibold text-lg cursor-pointer border px-4 py-1 rounded-full"
          onClick={modalHandler}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Clear
        </motion.p>
        <motion.p
          className="font-semibold text-lg cursor-pointer border border-primary px-5 py-1 rounded-full bg-primary text-white"
          onClick={() => {
            searchClickHandler();
            modalHandler();
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Apply
        </motion.p>
      </div>
    </div>
  );
};

export default Filters;
