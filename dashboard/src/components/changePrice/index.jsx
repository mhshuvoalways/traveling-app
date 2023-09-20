import { useState } from "react";
import SignleDate from "../datePicker/SignleDate";
import MultiDate from "../datePicker/MultiDate";
import axios from "../../utils/axios";

const Index = ({ condoId, toggleModal, allChanges, setAllChanges }) => {
  const [toggleMood, setToggleMood] = useState("single");
  const [values, setValues] = useState({
    condoId: condoId,
    dates: [],
    price: "",
  });

  const toggleMoodHandler = (value) => {
    setToggleMood(value);
  };

  const priceChange = (event) => {
    setValues({
      ...values,
      price: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    if (values.dates.length && values.price) {
      event.preventDefault();
      const temp = [...allChanges];
      axios
        .post("/price/addprice", values)
        .then((resp) => {
          temp.push(resp.data);
          setAllChanges(temp);
          toggleModal();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="flex">
        <p
          className={`border p-2 cursor-pointer ${
            toggleMood === "single" ? "bg-gray-100" : "bg-white"
          }`}
          onClick={() => toggleMoodHandler("single")}
        >
          Single Date
        </p>
        <p
          className={`border p-2 cursor-pointer ${
            toggleMood === "multiple" ? "bg-gray-100" : "bg-white"
          }`}
          onClick={() => toggleMoodHandler("multiple")}
        >
          Multiple Dates
        </p>
      </div>
      {toggleMood === "single" ? (
        <SignleDate values={values} setValues={setValues} />
      ) : (
        <MultiDate values={values} setValues={setValues} />
      )}
      <input
        type="number"
        className="w-full outline-0 bg-gray-50 p-2 mt-5"
        placeholder="Price"
        value={values.price}
        onChange={priceChange}
        required
      />
      <button className="w-full outline-0 bg-gray-100 p-2 mt-5 font-semibold text-lg hover:bg-gray-200">
        Save
      </button>
    </form>
  );
};

export default Index;
