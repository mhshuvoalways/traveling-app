const Amenities = () => {
  return (
    <div className="shadow-sm border rounded-xl p-5 md:p-10 bg-white">
      <p className="text-3xl text-gray-800 font-semibold mb-2">Amenities</p>
      <p>About the propertys amenities and services</p>
      <div className="flex justify-between items-center flex-wrap mt-5 gap-5">
        <div className="text-lg flex items-center gap-2 w-4/12 md:w-3/12">
          <i className="fa-solid fa-wifi"></i>
          <p className="text-gray-700">Internet</p>
        </div>
        <div className="text-lg flex items-center gap-2 w-4/12 md:w-3/12">
          <i className="fa-solid fa-tv"></i>
          <p className="text-gray-700">TV</p>
        </div>
        <div className="text-lg flex items-center gap-2 w-4/12 md:w-3/12">
          <i className="fa-solid fa-person-swimming"></i>
          <p className="text-gray-700">Swiming</p>
        </div>
        <div className="text-lg flex items-center gap-2 w-4/12 md:w-3/12">
          <i className="fa-solid fa-kitchen-set"></i>
          <p className="text-gray-700">Kitchen</p>
        </div>
        <div className="text-lg flex items-center gap-2 w-4/12 md:w-3/12">
          <i className="fa-solid fa-fan"></i>
          <p className="text-gray-700">AC</p>
        </div>
        <div className="text-lg flex items-center gap-2 w-4/12 md:w-3/12">
          <i className="fa-solid fa-soap"></i>
          <p className="text-gray-700">Washing machine</p>
        </div>
        <div className="text-lg flex items-center gap-2 w-4/12 md:w-3/12">
          <i className="fa-regular fa-hard-drive"></i>
          <p className="text-gray-700">Clothes dryer</p>
        </div>
        <div className="text-lg flex items-center gap-2 w-4/12 md:w-3/12">
          <i className="fa-solid fa-square"></i>
          <p className="text-gray-700">Oven</p>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
