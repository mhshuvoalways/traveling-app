import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo/Logo.jpg";

const Footer = () => {
  return (
    <div className="py-10 mt-20">
      <div className="w-10/12 mx-auto flex justify-center sm:justify-between gap-10 flex-wrap container">
        <div className="w-full sm:w-3/12">
          <Link href="/">
            <Image src={Logo} alt="" className="w-20" />
          </Link>
          <p className="font-light text-xs">
            © All right reserverd to New Smyrna Beach Condo Rentals
          </p>
        </div>
        <div className="w-full sm:w-5/12">
          <p className="text-xl font-semibold">About us</p>
          <p className="mt-2 text-justify opacity-70">
            Our experienced staff makes sure that all of our properties are
            clean and well maintained. We have a dedicated team to make sure
            that we provide the best customer service and experience when you
            come stay with us. No matter what kind of vacation you are looking
            for, we have something for everyone. Whether it be a family getaway
            or a romantic retreat, we will do everything in our power to make
            your stay as enjoyable as possible. Our property managers are always
            available to answer any questions and offer suggestions for things
            to do while you are here. We strive to make sure that all of our
            guests get the most out of their New Smyrna Beach vacation.
          </p>
        </div>
        <div className="w-full sm:w-3/12">
          <p className="text-xl font-semibold">Contact us</p>
          <div className="mt-2">
            <p>newsmyrnabeachrentals@gmail.com</p>
            <p>407.430.9541</p>
          </div>
          <div className="flex gap-5 mt-5">
            <a
              href="https://www.facebook.com/profile.php?id=100057277036574"
              target="blank"
            >
              <i className="fa-brands cursor-pointer fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/nsbcondorentals3" target="blank">
              <i className="fa-brands cursor-pointer fa-instagram"></i>
            </a>
            <a href="https://twitter.com/nsb_rentals" target="blank">
              <i className="fa-brands cursor-pointer fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
