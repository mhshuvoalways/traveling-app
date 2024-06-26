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
  setCardHover,
}) => {
  let sumReview = 0;
  reviews.forEach((el) => {
    sumReview += el.rating;
  });

  return (
    <Link
      href={`/properties/${id}`}
      className={`bg-white w-full shadow-sm rounded`}
      onMouseOver={() => setCardHover && setCardHover(id)}
    >
      <Image
        src={images[id]}
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
          <p>{benefits.bedrooms} Bedrooms</p>
          <p>{benefits.beds} Beds</p>
        </div>
        <div className="flex gap-1 justify-between items-center mt-2">
          <div className="flex gap-1">
            <p className="font-semibold">${price}</p>
            <p>/</p>
            <p className="text-gray-600">night</p>
          </div>
          <div className="flex gap-1 items-center">
            <i
              className={`fa-solid fa-star ${
                reviews.length ? "text-yellow-500" : "text-gray-500"
              }`}
            ></i>
            <p className="font-semibold">
              {reviews.length && (sumReview / reviews.length).toFixed(1)}
            </p>
            <p className="text-gray-600">({reviews.length})</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
