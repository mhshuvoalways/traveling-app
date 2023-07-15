import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Banner1 from "../../public/banner/banner.jpg";
import Banner2 from "../../public/banner/banner2.jpg";
import Banner3 from "../../public/banner/banner3.jpg";
import Banner4 from "../../public/banner/banner4.jpg";

const Pictures = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <div>
      <Slider asNavFor={nav2} ref={slider1} arrows={false}>
        <Image src={Banner1} alt="" className="md:h-screen" />
        <Image src={Banner2} alt="" className="md:h-screen" />
        <Image src={Banner3} alt="" className="md:h-screen" />
        <Image src={Banner4} alt="" className="md:h-screen" />
      </Slider>
      <div className="w-10/12 mx-auto mt-2">
        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          className="w-full md:w-6/12 mx-auto"
        >
          <Image src={Banner1} alt="" className="md:h-20 cursor-pointer px-2" />
          <Image src={Banner2} alt="" className="md:h-20 cursor-pointer px-2" />
          <Image src={Banner3} alt="" className="md:h-20 cursor-pointer px-2" />
          <Image src={Banner4} alt="" className="md:h-20 cursor-pointer px-2" />
          <Image src={Banner1} alt="" className="md:h-20 cursor-pointer px-2" />
          <Image src={Banner2} alt="" className="md:h-20 cursor-pointer px-2" />
          <Image src={Banner3} alt="" className="md:h-20 cursor-pointer px-2" />
          <Image src={Banner4} alt="" className="md:h-20 cursor-pointer px-2" />
        </Slider>
      </div>
    </div>
  );
};

export default Pictures;
