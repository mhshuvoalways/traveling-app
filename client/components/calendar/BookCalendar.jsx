import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const Calendar = ({ startDate, endDate, onChange, uniqueDatesArray }) => {
  const renderDayContents = (day, date) => {
    const formattedDate = moment(date).format("MM-DD-YYYY");
    const isDisabled = uniqueDatesArray.includes(formattedDate);
    if (isDisabled) {
      return (
        <div className="text-red-600 font-semibold rounded cursor-not-allowed" title="This date is already booked">
          {day}
        </div>
      );
    }
    return <div>{day}</div>;
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      dateFormat={"MM-dd-yyyy"}
      className="outline-0 text-start"
      placeholderText="Select date"
      minDate={new Date()}
      renderDayContents={renderDayContents}
    />
  );
};

export default Calendar;
