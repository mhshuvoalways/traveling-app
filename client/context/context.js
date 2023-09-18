import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import moment from "moment/moment";
import { useRouter } from "next/router";
import axios from "../utils/axios";
import database from "../public/db";

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

  const router = useRouter();
  const condoId = router.query.propertydetails;

  const onChangeLocation = (event) => {
    setSearchsObj({
      ...searchObj,
      searchLocation: event.target.value,
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

  const { data, isLoading, isError } = useQuery(
    ["items", condoId],
    async () => {
      if (condoId) {
        const [availabilityResponse, vrboDates, reviewsResponse] =
          await Promise.all([
            axios.get("/book/getbooks"),
            axios.get(`/calendar/getvrbodates/${condoId}`),
            axios.get("/review/getreviews"),
          ]);

        const icsData = vrboDates.data;
        const parsedEvents = parseICS(icsData);

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
            availability: [
              ...item.availability,
              ...mergedAvailabilityDates,
              ...parsedEvents,
            ],
            reviews: [...item.reviews, ...matchingReviews],
          };
        });
        return updatedItems;
      } else {
        const [availabilityResponse, reviewsResponse] = await Promise.all([
          axios.get("/book/getbooks"),
          axios.get("/review/getreviews"),
        ]);

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
      }
    }
  );

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
    const newDatesArray = [];
    for (const event of events) {
      newDatesArray.push(...generateDateRange(event.dtstart, event.dtend));
    }
    return newDatesArray;
  }

  function generateDateRange(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const dateArray = [];
    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      dateArray.push(formatDate(date));
    }
    return dateArray;
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
