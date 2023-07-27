import Image from "next/image";
import Item1 from "../../public/howworks/item1.webp";
import Item2 from "../../public/howworks/item2.webp";
import Item3 from "../../public/howworks/item3.webp";

const index = () => {
  return (
    <div className="w-10/12 mx-auto pt-20">
      <div>
        <p className="text-secondary font-semibold text-4xl">How it work</p>
        <p className="text-gray-600 mt-2">Keep calm & travel on</p>
      </div>
      <div className="flex justify-center md:justify-between items-center mt-10 gap-5 flex-wrap md:flex-nowrap">
        <div>
          <Image src={Item1} alt="" className="w-48 mx-auto" />
          <div className="text-center mt-5">
            <p className="text-xl">Book & relax</p>
            <p className="font-light mt-2">
              Know when you get there all you will need is your food, clothes
              and Toiletries
            </p>
          </div>
        </div>
        <div>
          <Image src={Item2} alt="" className="w-48 mx-auto" />
          <div className="text-center mt-5">
            <p className="text-xl">Check Out</p>
            <p className="font-light mt-2">
              You will need to start Dishwasher, take trash out and lock the
              condo.
            </p>
          </div>
        </div>
        <div>
          <Image src={Item3} alt="" className="w-48 mx-auto" />
          <div className="text-center mt-5">
            <p className="text-xl">Save more</p>
            <p className="font-light mt-2">
              Save more by liking us on Facebook, Twitter or Instagram as we do
              run special offers!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
