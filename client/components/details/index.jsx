import { useContext, useState } from "react";
import moment from "moment/moment";
import { MyContext } from "../../context/context";
import Pictures from "./Pictures";
import Intro from "./Intro";
import Amenities from "./Amenities";
import Availability from "./Availability";
import Location from "./Location";
import Property from "./Property";
import Rools from "./Rools";
import Reviews from "./Reviews";
import AddReview from "./AddReview";
import Modal from "../modal";
import Book from "./Book";

const Details = ({ query }) => {
  const [modal, setModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { setBookObj, setBookDates, finalItems, setTostify, setFinalItems } =
    useContext(MyContext);

  const modalHandler = () => {
    setModal(!modal);
  };

  const findItems = finalItems.find(
    (item) => item.id.toString() === query.propertydetails?.toString()
  );

  const dateArray = [];
  if (startDate && endDate) {
    const currentDate = moment(startDate);
    const lastDate = moment(endDate);
    while (currentDate <= lastDate) {
      dateArray.push(currentDate.format("MM-DD-YYYY"));
      currentDate.add(1, "days");
    }
  }

  const filterItems = finalItems.filter(
    (el) => el.id.toString() === query.propertydetails?.toString()
  );
  const uniqueDatesSet = new Set();
  filterItems.forEach((item) => {
    item.availability.forEach((date) => {
      uniqueDatesSet.add(date);
    });
  });
  const uniqueDatesArray = Array.from(uniqueDatesSet);

  const onChange = (dates) => {
    const formattedDate = moment(dates[0]).format("MM-DD-YYYY");
    const isDisabled = uniqueDatesArray.includes(formattedDate);
    if (!isDisabled) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }
  };

  let sumReview = 0;
  findItems?.reviews.forEach((el) => {
    sumReview += el.rating;
  });

  return (
    <div className="pt-16">
      <Pictures pictures={findItems} />
      <div className="w-10/12 mx-auto mt-10 flex justify-between gap-5 flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
        <div className="space-y-5 lg:w-8/12 w-full">
          <Intro data={findItems} />
          <Amenities data={findItems} />
          <Availability uniqueDatesArray={uniqueDatesArray} />
          <Location data={findItems} />
          <Property data={findItems} />
          <Rools />
          <Reviews
            modalHandler={modalHandler}
            findItems={findItems}
            sumReview={sumReview}
          />
          {modal && (
            <Modal modalHandler={modalHandler} title="Add Review">
              <AddReview
                modalHandler={modalHandler}
                setFinalItems={setFinalItems}
                itemId={query.propertydetails}
                finalItems={finalItems}
              />
            </Modal>
          )}
        </div>
        <div className="lg:w-4/12 w-full">
          <Book
            data={findItems}
            setBookObj={setBookObj}
            setBookDates={setBookDates}
            startDate={startDate}
            endDate={endDate}
            dateArray={dateArray}
            uniqueDatesArray={uniqueDatesArray}
            onChange={onChange}
            setTostify={setTostify}
            findItems={findItems}
            sumReview={sumReview}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
