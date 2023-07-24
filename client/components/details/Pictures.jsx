import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Pictures = ({ pictures }) => {
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
        {pictures?.images.map((image) => (
          <Image
            src={image}
            alt="Wait..."
            className="md:h-screen"
            key={image}
            unoptimized
            width={2000}
            height={2000}
          />
        ))}
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
          {pictures?.images.map((image) => (
            <Image
              src={image}
              alt="Wait..."
              className="md:h-20 cursor-pointer px-1"
              key={image}
              unoptimized
              width={2000}
              height={2000}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Pictures;
