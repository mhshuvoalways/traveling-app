import Image from "next/image";
import Link from "next/link";

const ItemCard = ({
  property,
  id,
  images,
  title,
  benefits,
  price,
  reviews,
}) => {
  return (
    <Link
      href={`/properties/${id}`}
      className={`bg-white w-full shadow-sm rounded ${
        property ? "md:w-5/12" : "md:w-4/12"
      }`}
    >
      <Image
        src={images[0]}
        alt=""
        className={`rounded-lg ${!property && "h-full md:h-60"}`}
        unoptimized
        width={800}
        height={800}
      />
      <div className="p-5">
        <p className="text-lg font-semibold">{title}</p>
        <div className="flex gap-1 justify-between items-center mt-2 text-gray-600">
          <p>{benefits.guests} Guests</p>
          <p>{benefits.bedrooms} Beedrooms</p>
          <p>{benefits.beds} Beds</p>
        </div>
        <div className="flex gap-1 justify-between items-center mt-2">
          <div className="flex gap-1">
            <p className="font-semibold">${price}</p>
            <p>/</p>
            <p className="text-gray-600">night</p>
          </div>
          <div className="flex gap-1 items-center">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <p className="font-semibold">4.8</p>
            <p className="text-gray-600">({reviews.length})</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
