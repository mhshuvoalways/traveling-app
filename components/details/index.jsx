import { useState } from "react";
import Pictures from "./Pictures";
import Intro from "./Intro";
import Amenities from "./Amenities";
import Availability from "./Availability";
import Location from "./Location";
import Rools from "./Rools";
import Reviews from "./Reviews";
import AddReview from "./AddReview";
import Modal from "../modal";
import Book from "./Book";
import database from "../../public/db";

const Details = ({ query }) => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  const findIndex = parseInt(query.propertydetails - 1);

  return (
    <div className="pt-16">
      <Pictures pictures={database[findIndex]} />
      <div className="w-10/12 mx-auto mt-10 flex justify-between gap-5 flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
        <div className="space-y-5 lg:w-8/12 w-full">
          <Intro data={database[findIndex]} />
          <Amenities data={database[findIndex]} />
          <Availability />
          <Location data={database[findIndex]} />
          <Rools />
          <Reviews modalHandler={modalHandler} />
          {modal && (
            <Modal modalHandler={modalHandler} title="Add Review">
              <AddReview modalHandler={modalHandler} />
            </Modal>
          )}
        </div>
        <div className="lg:w-4/12 w-full">
          <Book data={database[findIndex]} />
        </div>
      </div>
    </div>
  );
};

export default Details;
