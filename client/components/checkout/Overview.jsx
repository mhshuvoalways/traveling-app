import Image from "next/image";

const Overview = ({ bookObj, bookDates }) => {
  return (
    <div className="shadow-sm border rounded-xl py-10 px-5 bg-white text-gray-700">
      <div>
        <Image
          src={bookObj?.images[0]}
          alt=""
          className="rounded-lg"
          unoptimized
          width={500}
          height={500}
        />
        <div className="mt-2">
          <p className="text-lg font-semibold">{bookObj?.title}</p>
          <div className="flex gap-1 justify-between items-center mt-2 text-gray-600">
            <p>{bookObj?.benefits.guests} Guests</p>
            <p>{bookObj?.benefits.bedrooms} Bedrooms</p>
            <p>{bookObj?.benefits.beds} Beds</p>
          </div>
          <div className="flex gap-1 justify-between items-center mt-2">
            <div className="flex gap-1">
              <p className="font-semibold">${bookObj?.price}</p>
              <p>/</p>
              <p className="text-gray-600">night</p>
            </div>
            <div className="flex gap-1 items-center">
              <i className="fa-solid fa-star text-yellow-500"></i>
              <p className="font-semibold">4.8</p>
              <p className="text-gray-600">({bookObj?.reviews.length})</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-2 mt-5 text-xl">
          <p>
            ${bookObj?.price} x {bookDates.length} night
          </p>
          <p>${bookObj?.price * bookDates.length}</p>
        </div>
        <div className="flex justify-between gap-2 mt-2 text-xl">
          <p>Service charge</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between gap-2 mt-5 text-xl border-t">
          <p className="text-2xl font-semibold">Total</p>
          <p>${bookObj?.price * bookDates.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
