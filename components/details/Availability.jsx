import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Availability = () => {
  return (
    <div className="shadow-sm border rounded-xl p-10 bg-white">
      <p className="text-3xl text-gray-800 font-semibold mb-2">Availability</p>
      <p>Prices may increase on weekends or holidays</p>
      <div className="mt-5">
        <DatePicker inline className="border-none" monthsShown={2}/>
      </div>
    </div>
  );
};

export default Availability;
