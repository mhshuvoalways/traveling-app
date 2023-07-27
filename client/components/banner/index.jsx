import Image from "next/image";
import Logo from "../../public/logo/logo.mp4";
import Search from "../search";

const index = () => {
  return (
    <div className="w-10/12 mx-auto pt-20 md:pt-0">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center md:h-screen h-auto gap-5">
        <div className="space-y-5 w-full md:w-1/2">
          <p className="text-xl border-b-2 pb-2 border-secondary text-gray-600 text-center">
            Your Home Away from Home in New Smyrna Beach, Florida
          </p>
          <p className="text-secondary font-bold text-7xl">Healthy travel,</p>
          <p className="font-normal text-6xl">healthy heart</p>
          <p className="font-normal text-lg text-gray-600">
            {`Visiting New Smyrna Beach is an amazing experience that you won't
            soon forget. With our three condo options, you'll be able to find
            the perfect home away from home for your vacation! Each complex
            offers different features, so we're sure you'll find something to
            fit your needs.`}
          </p>
        </div>
        <div className="w-full md:w-5/12 flex flex-wrap gap-5 md:justify-end justify-center">
          <video className="rounded-lg" autoPlay muted controls>
            <source src={Logo} />
          </video>
        </div>
      </div>
      <Search />
    </div>
  );
};

export default index;
