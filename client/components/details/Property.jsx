const Amenities = ({ data }) => {
  return (
    <div className="shadow-sm border rounded-xl p-5 md:p-10 bg-white">
      <p className="text-3xl text-gray-800 font-semibold mb-2">Property Types</p>
      <p>About the propertys amenities and services</p>
      <div className="flex justify-between items-center flex-wrap mt-5 gap-5">
        {data?.propertyType.map((el) => (
          <div className="text-lg flex items-center gap-2 w-4/12" key={el.id}>
            <i className={el.icon}></i>
            <p className="text-gray-700">{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
