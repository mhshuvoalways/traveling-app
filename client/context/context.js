import moment from "moment/moment";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import database from "../public/db";
import axios from "../utils/axios";

export const MyContext = createContext(null);

const Context = ({ children }) => {
  const [searchObj, setSearchsObj] = useState({
    searchLocation: "",
    searchDate: {
      startDate: null,
      endDate: null,
    },
    searchGuests: "",
  });
  const [bedRoomsAndBeds, setBedRoomsAndBeds] = useState(1);
  const [bedRooms, setBedRooms] = useState(1);
  const [priceRange, setPriceRange] = useState(1);
  const [reviewRange, setReviewRange] = useState(0);
  const [amenities, setAmenities] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [bookObj, setBookObj] = useState(null);
  const [bookDates, setBookDates] = useState([]);
  const [finalItems, setFinalItems] = useState([]);
  const [tostify, setTostify] = useState("");
  const [allReviews, setAllReviews] = useState([]);

  const onChangeLocation = (value) => {
    setSearchsObj({
      ...searchObj,
      searchLocation: value,
    });
  };

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setSearchsObj({
      ...searchObj,
      searchDate: {
        startDate: start,
        endDate: end,
      },
    });
  };

  const onChangeGuests = (event) => {
    setSearchsObj({
      ...searchObj,
      searchGuests: event.target.value,
    });
  };

  const { data, isLoading, isError } = useQuery("items", async () => {
    const [availabilityResponse, reviewsResponse] = await Promise.all([
      axios.get("/book/getbooks"),
      axios.get("/review/getreviews"),
    ]);
    setAllReviews(reviewsResponse);
    const updatedItems = database.map((item) => {
      const matchingAvailabilityDates = availabilityResponse.data.filter(
        (dateItem) => dateItem.itemId.toString() === item.id.toString()
      );
      const mergedAvailabilityDates = matchingAvailabilityDates.reduce(
        (acc, dateItem) => [...acc, ...dateItem.dates],
        []
      );
      const matchingReviews = reviewsResponse.data.filter(
        (reviewItem) => reviewItem.itemId.toString() === item.id.toString()
      );
      return {
        ...item,
        availability: [...item.availability, ...mergedAvailabilityDates],
        reviews: [...item.reviews, ...matchingReviews],
      };
    });
    return updatedItems;
  });

  const searchClickHandler = () => {
    if (!isLoading && !isError) {
      const filterByLocation = (items) => {
        return items.filter((item) =>
          item.itemLocation.placeName.includes(searchObj?.searchLocation)
        );
      };

      const dateArray = [];
      if (searchObj?.searchDate.startDate && searchObj?.searchDate.endDate) {
        const currentDate = moment(searchObj?.searchDate.startDate);
        const lastDate = moment(searchObj?.searchDate.endDate);
        while (currentDate <= lastDate) {
          dateArray.push(currentDate.format("MM-DD-YYYY"));
          currentDate.add(1, "days");
        }
      }
      const filterByAvailability = (items) => {
        return items.filter((item) =>
          item.availability.every((date) => !dateArray.includes(date))
        );
      };

      const filterByGuests = (items) => {
        return items.filter(
          (item) => item.benefits.guests >= searchObj?.searchGuests
        );
      };

      const filterByBedRooms = (items) => {
        return items.filter(
          (item) => item.benefits.bedrooms >= bedRoomsAndBeds
        );
      };

      const filterByBeds = (items) => {
        return items.filter((item) => item.benefits.beds >= bedRooms);
      };

      const filterByPrice = (items) => {
        return items.filter((item) => item.price >= priceRange);
      };

      const filterByRating = (items) => {
        return items.filter((item) => {
          if (reviewRange === 0) {
            return item;
          }
          let sumRatings = 0;
          item.reviews.forEach((review) => {
            sumRatings += review.rating;
          });
          const averageRating = sumRatings / item.reviews.length;
          return averageRating >= reviewRange;
        });
      };

      const filterByAmenities = (items) => {
        return items.filter((item) => {
          return amenities.every((amenity) =>
            item.amenities.some((itemAmenity) => itemAmenity.name === amenity)
          );
        });
      };

      const filterByProperty = (items) => {
        return items.filter((item) => {
          return propertyTypes.every((amenity) =>
            item.propertyType.some(
              (itemAmenity) => itemAmenity.name === amenity
            )
          );
        });
      };

      let filteredData = data;
      filteredData = filterByGuests(filteredData);
      filteredData = filterByPrice(filteredData);
      filteredData = filterByRating(filteredData);
      filteredData = filterByLocation(filteredData);
      filteredData = filterByAmenities(filteredData);
      filteredData = filterByAvailability(filteredData);
      filteredData = filterByBedRooms(filteredData);
      filteredData = filterByBeds(filteredData);
      filteredData = filterByProperty(filteredData);
      setFinalItems(filteredData);
    }
  };

  useEffect(() => {
    searchClickHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError, isLoading]);

  useEffect(() => {
    if (bookObj) {
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = "";
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [bookObj]);

  return (
    <MyContext.Provider
      value={{
        bookObj,
        setBookObj,
        searchObj,
        searchClickHandler,
        onChangeLocation,
        onChangeDate,
        onChangeGuests,
        bookDates,
        setBookDates,
        finalItems,
        setFinalItems,
        tostify,
        setTostify,
        allReviews,

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
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
