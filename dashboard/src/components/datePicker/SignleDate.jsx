import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const Index = ({ values, setValues }) => {
  const [startDate, setStartDate] = useState();

  const onChangeDate = (date) => {
    const formateDate = moment(date).format("MM-DD-YYYY");
    setStartDate(date);
    setValues({
      ...values,
      dates: [formateDate],
    });
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={onChangeDate}
      placeholderText="Select Single Date"
      className="w-full outline-0 bg-gray-50 p-2 mt-2"
      minDate={new Date()}
    />
  );
};

export default Index;
