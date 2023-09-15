import parse from "html-react-parser";

const Intro = ({ data }) => {
  return (
    <div>
      <div className="shadow-sm border rounded-xl p-5 md:p-10 bg-white">
        <p className="text-3xl text-gray-800 font-semibold">{data?.title}</p>
        <div className="flex gap-1 justify-between items-center mt-5 text-gray-600">
          <p>{data?.benefits.guests} Guests</p>
          <p>{data?.benefits.bedrooms} Bedrooms</p>
          <p>{data?.benefits.beds} Beds</p>
        </div>
        <div className="flex gap-1 justify-between items-center mt-2">
          <div className="flex gap-1">
            <p className="font-semibold">${data?.price}</p>
            <p>/</p>
            <p className="text-gray-600">night</p>
          </div>
          <div className="flex gap-1 items-center">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <p className="font-semibold">5</p>
            <p className="text-gray-600">(10)</p>
          </div>
        </div>
        <p className="mt-5 text-lg font-light">
          {parse(data?.description || "")}
        </p>
      </div>
    </div>
  );
};

export default Intro;
