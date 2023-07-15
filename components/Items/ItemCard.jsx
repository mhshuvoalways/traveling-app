import Image from "next/image";
import Link from "next/link";
import Item1 from "../../public/items/item1/pic1.jpg";

const ItemCard = ({ property }) => {
  return (
    <Link
      href="/properties/1"
      className={`bg-white w-full shadow-sm rounded ${
        property ? "md:w-5/12" : "md:w-4/12"
      }`}
    >
      <Image src={Item1} alt="" className="rounded-lg" />
      <div className="p-5">
        <p className="text-lg font-semibold">
          ☀Beach Paradise | Steps to the Ocean | Pool | Pets Book NOW!
        </p>
        <div className="flex gap-1 justify-between items-center mt-2 text-gray-600">
          <p>6 Guests</p>
          <p>2 Bedrooms</p>
          <p>5 Beds</p>
        </div>
        <div className="flex gap-1 justify-between items-center mt-2">
          <div className="flex gap-1">
            <p className="font-semibold">$26</p>
            <p>/</p>
            <p className="text-gray-600">night</p>
          </div>
          <div className="flex gap-1 items-center">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <p className="font-semibold">4.8</p>
            <p className="text-gray-600">(11)</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
