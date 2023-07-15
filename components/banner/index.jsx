import Image from "next/image";
import Banner from "../../public/banner/banner.jpg";
import Banner2 from "../../public/banner/banner2.jpg";
import Banner3 from "../../public/banner/banner3.jpg";
import Banner4 from "../../public/banner/banner4.jpg";
import Search from "../search";

const index = () => {
  return (
    <div className="w-10/12 mx-auto pt-20 md:pt-0">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center md:h-screen h-auto gap-5">
        <div className="space-y-5 w-full md:w-1/2">
          <p className="text-xl border-b-2 pb-2 w-40 border-secondary text-gray-600 text-center">
            TRAVEL SAFELY
          </p>
          <p className="text-secondary font-bold text-7xl">Healthy travel,</p>
          <p className="font-normal text-6xl">healthy heart</p>
          <p className="font-normal text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ullamcorper molestie elit ac porttitor. Nulla facilisi.
            Mauris commodo diam in turpis auctor, sed lobortis nulla
            condimentum.
          </p>
        </div>
        <div className="w-full md:w-5/12 flex flex-wrap gap-5 md:justify-end justify-center">
          <Image src={Banner} alt="" className="w-5/12 rounded-lg" />
          <Image src={Banner2} alt="" className="w-5/12 rounded-lg" />
          <Image src={Banner3} alt="" className="w-5/12 rounded-lg" />
          <Image src={Banner4} alt="" className="w-5/12 rounded-lg" />
        </div>
      </div>
      <Search />
    </div>
  );
};

export default index;
