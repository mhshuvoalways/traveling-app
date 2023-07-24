import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const Availability = ({ uniqueDatesArray }) => {
  const renderDayContents = (day, date) => {
    const formattedDate = moment(date).format("MM-DD-YYYY");
    const isDisabled = uniqueDatesArray.includes(formattedDate);
    if (isDisabled) {
      return (
        <div
          className="text-red-600 font-semibold rounded cursor-not-allowed"
          title="This date is booked"
        >
          {day}
        </div>
      );
    }
    return <div>{day}</div>;
  };

  return (
    <div className="shadow-sm border rounded-xl p-5 md:p-10 bg-white">
      <p className="text-3xl text-gray-800 font-semibold mb-2">Availability</p>
      <p>Prices may increase on weekends or holidays</p>
      <div className="mt-5">
        <DatePicker
          inline
          className="border-none"
          monthsShown={2}
          renderDayContents={renderDayContents}
        />
      </div>
    </div>
  );
};

export default Availability;
