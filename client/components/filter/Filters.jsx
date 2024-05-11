import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";
import db from "../../public/db";

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
  setFinalItems,
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

  const uniqueAmenitiesObj = {};
  db.forEach((item) => {
    item.amenities.forEach((amenity) => {
      const { name } = amenity;
      if (!uniqueAmenitiesObj[name.trim()]) {
        uniqueAmenitiesObj[name.trim()] = { name };
      }
    });
  });
  const uniqueAmenities = Object.values(uniqueAmenitiesObj);

  const uniquePropertiesObj = {};
  db.forEach((item) => {
    item.propertyType.forEach((pro) => {
      const { name } = pro;
      if (!uniquePropertiesObj[name.trim()]) {
        uniquePropertiesObj[name.trim()] = { name };
      }
    });
  });
  const uniquepropertyType = Object.values(uniquePropertiesObj);

  return (
    <div>
      <div className="mb-5">
        <p className="fond-semibold text-2xl">Bedrooms and Beds</p>
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
          {uniqueAmenities.map((amenity) => (
            <label
              className="flex gap-2 items-center w-5/12 cursor-pointer"
              key={amenity.name}
            >
              <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer"
                value={amenity.name}
                checked={amenities.includes(amenity.name)}
                onChange={handleCheckboxChange}
              />
              <p>{amenity.name}</p>
            </label>
          ))}
        </div>
      </div>
      <hr />
      <div className="my-5">
        <p className="fond-semibold text-2xl">Property type</p>
        <div className="mt-2 flex gap-4 items-center flex-wrap">
          {uniquepropertyType.map((pro) => (
            <label
              className="flex gap-2 items-center w-5/12 cursor-pointer"
              key={pro.name}
            >
              <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer"
                value={pro.name}
                checked={propertyTypes.includes(pro.name)}
                onChange={handleCheckboxChangeProperty}
              />
              <p>{pro.name}</p>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between gap-2 mt-10">
        <motion.p
          className="font-semibold text-lg cursor-pointer border px-4 py-1 rounded-full"
          onClick={() => {
            setBedRoomsAndBeds(1);
            setBedRooms(1);
            setPriceRange(1);
            setReviewRange(0);
            setAmenities([])
            setPropertyTypes([])
          }}
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
