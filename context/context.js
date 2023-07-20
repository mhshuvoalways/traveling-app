import { createContext, useState, useEffect } from "react";

export const MyContext = createContext(null);

const Context = ({ children }) => {
  const [searchObj, setSearchObj] = useState({
    searchLocation: "",
    searchDate: {
      startDate: null,
      endDate: null,
    },
    searchGuests: "",
  });

  const [bookObj, setBookObj] = useState(null);

  const onChangeLocation = (event) => {
    setSearchObj({
      ...searchObj,
      searchLocation: event.target.value,
    });
  };

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setSearchObj({
      ...searchObj,
      searchDate: {
        startDate: start,
        endDate: end,
      },
    });
  };

  const onChangeGuests = (value) => {
    setSearchObj({
      ...searchObj,
      searchGuests: event.target.value,
    });
  };

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
        setSearchObj,
        onChangeLocation,
        onChangeDate,
        onChangeGuests,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
