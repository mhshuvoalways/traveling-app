import Image from "next/image";
import Item1 from "../../public/items/item1/pic1.jpg";

const Overview = () => {
  return (
    <div className="shadow-sm border rounded-xl py-10 px-5 bg-white text-gray-700">
      <div>
        <Image src={Item1} alt="" className="rounded-lg" />
        <div className="mt-2">
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
              <p className="font-semibold">$119</p>
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
      </div>
      <div>
        <div className="flex justify-between gap-2 mt-5 text-xl">
          <p>$119 x 3 night</p>
          <p>$357</p>
        </div>
        <div className="flex justify-between gap-2 mt-2 text-xl">
          <p>Service charge</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between gap-2 mt-5 text-xl border-t">
          <p className="text-2xl font-semibold">Total</p>
          <p>$357</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
