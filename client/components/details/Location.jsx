import Image from "next/image";

const Location = ({ data }) => {
  return (
    <div className="shadow-sm border rounded-xl p-5 md:p-10 bg-white">
      <p className="text-3xl text-gray-800 font-semibold mb-2">Location</p>
      <p>{data?.itemLocation.placeName}</p>
      <Image
        src={data?.itemLocation.image}
        alt=""
        className="rounded-xl mt-5 w-full"
      />
    </div>
  );
};

export default Location;
