import Calendar from "../calendar";

const index = ({ availability }) => {
  return (
    <div
      className={`mx-auto shadow-lg md:rounded-full rounded-md bg-white px-5 py-2 text-gray-600 flex items-center justify-between flex-wrap gap-5 ${
        availability
          ? "top-0 static w-full"
          : "md:bottom-10 md:absolute relative w-full md:w-10/12 mt-5"
      }`}
    >
      <div className="text-center w-full md:w-auto flex items-center">
        <i className="fa-solid fa-location-dot text-2xl"></i>
        <div>
          <p className="font-semibold text-xl">Location</p>
          <select className="outline-0 cursor-pointer text-center">
            <option className="">United State</option>
            <option className="">Florida</option>
            <option className="">Deltona</option>
            <option className="">Volusia County</option>
          </select>
        </div>
      </div>
      <p className="hidden md:block">|</p>
      <div className="text-center w-full md:w-auto flex items-center">
        <i className="fa-regular fa-calendar text-2xl"></i>
        <div>
          <p className="font-semibold text-xl">Feb 06 - Feb 10</p>
          <Calendar />
        </div>
      </div>
      <p className="hidden md:block">|</p>
      <div className="text-center w-full md:w-auto flex items-center gap-3">
        <i className="fa-regular fa-user text-2xl"></i>
        <div>
          <p className="font-semibold text-xl">4 Guests</p>
          <input type="number" className="outline-0 text-center" placeholder="Guests"/>
        </div>
      </div>
      <button className="bg-primary text-white md:w-16 md:h-16 rounded-full font-bold mx-auto md:mx-0 w-full h-12">
        <i className="fa-solid fa-magnifying-glass text-xl"></i>
      </button>
    </div>
  );
};

export default index;
