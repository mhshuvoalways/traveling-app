import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo/Logo.jpg";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(true);

  const headerHandler = (value) => {
    setShowHeader(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setPrevScrollY(currentScrollY);
      if (currentScrollY > prevScrollY) {
        setScrollDirection(false);
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div
      className={`py-5 shadow-sm fixed left-0 right-0 z-10 transition-transform duration-500 ease-in-out bg-white $ ${
        scrollDirection ? "transform-none" : "-translate-y-full"
      }`}
    >
      <header className="w-10/12 mx-auto">
        <nav className="flex justify-between gap-5 flex-wrap items-center">
          <Link href="/">
            <Image src={Logo} alt="" className="w-20" />
          </Link>
          {showHeader ? (
            <p
              className="cursor-pointer block md:hidden font-bold"
              onClick={() => headerHandler(false)}
            >
              ✕
            </p>
          ) : (
            <p
              className="cursor-pointer block md:hidden font-bold"
              onClick={() => headerHandler(true)}
            >
              ☰
            </p>
          )}
          <ul className="md:flex items-center gap-5 md:gap-10 flex-wrap hidden">
            <li>
              <Link
                href="/"
                className="cursor-pointer hover:text-primary text-lg text-gray-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/properties"
                className="cursor-pointer hover:text-primary text-lg text-gray-600"
              >
                Properties
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className={`${
          showHeader
            ? "translate-y-0 w-full"
            : "-translate-y-full w-0 opacity-0"
        } transform transition-all duration-300 fixed top-24 border-b border-t shadow-md left-0 right-0 z-20 block md:hidden bg-white`}
      >
        <ul>
          <li>
            <Link href="/">
              <p className="py-2 w-10/12 mx-auto">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/properties">
              <p className="py-2 w-10/12 mx-auto">Properties</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
