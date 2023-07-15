import Calendar from "../calendar";

const index = ({ availability }) => {
  return (
    <div
      className={`mx-auto shadow-lg md:rounded-full rounded-md bg-white px-5 py-2 text-gray-600 flex items-center justify-center md:justify-between flex-wrap gap-5 ${
        availability
          ? "w-full"
          : "md:bottom-10 md:absolute relative w-full md:w-10/12 mt-5"
      }`}
    >
      <div className="text-end md:text-center w-full md:w-auto flex items-center md:justify-center justify-between">
        <i className="fa-solid fa-location-dot text-2xl"></i>
        <div>
          <p className="font-semibold text-xl">Location</p>
          <select className="outline-0 cursor-pointer text-end md:text-center bg-white">
            <option className="">United State</option>
            <option className="">Florida</option>
            <option className="">Deltona</option>
            <option className="">Volusia County</option>
          </select>
        </div>
      </div>
      <p className="hidden md:block">|</p>
      <div className="text-end md:text-center w-full md:w-auto flex items-center md:justify-center justify-between">
        <i className="fa-regular fa-calendar text-2xl"></i>
        <div>
          <p className="font-semibold text-xl">Feb 06 - Feb 10</p>
          <Calendar />
        </div>
      </div>
      <p className="hidden md:block">|</p>
      <div className="text-end md:text-center w-full md:w-auto flex items-center md:justify-center justify-between">
        <i className="fa-regular fa-user text-2xl"></i>
        <div>
          <p className="font-semibold text-xl">4 Guests</p>
          <input type="number" className="outline-0 text-end md:text-center" placeholder="Guests"/>
        </div>
      </div>
      <button className="bg-primary text-white md:w-16 md:h-16 rounded-full font-bold mx-auto md:mx-0 w-full h-12">
        <i className="fa-solid fa-magnifying-glass text-xl"></i>
      </button>
    </div>
  );
};

export default index;
