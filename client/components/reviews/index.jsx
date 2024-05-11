import User from "@/public/reviews/user.png";
import Image from "next/image";
import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { MyContext } from "../../context/context";
import Star from "./Star";

const Reviews = () => {
  const { allReviews } = useContext(MyContext);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        backgroundImage: "url(/reviews/reviewbackground.jpg)",
      }}
      className="bg-cover bg-no-repeat bg-fixed"
    >
      <div className="relative py-20 mt-20">
        <div className="w-10/12 mx-auto container">
          <p className="text-secondary font-semibold text-4xl mt-2">
            Travel Reviews
          </p>
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an
            commodo ligula eget dolor. Aenean massa. Cum sociis the
          </p>
        </div>
        <Slider {...settings} className="mt-10">
          {allReviews.data?.map((el, Reviews) => (
            <div
              key={index}
              className="bg-white rounded h-56 items-center !flex gap-5 !w-[95%] p-10 mx-auto"
            >
              <Image src={User} alt="" className="w-24" />
              <div>
                <p className="text-2xl font-semibold">{el.name}</p>
                <Star value={el.rating} />
                <p className="opacity-70">{el.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
