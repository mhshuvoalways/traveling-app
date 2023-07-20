import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ startDate, endDate, onChange }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      className={`outline-0 md:text-center text-end`}
      placeholderText="Select date"
    />
  );
};

export default Calendar;
