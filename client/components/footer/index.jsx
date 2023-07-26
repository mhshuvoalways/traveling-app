const Footer = () => {
  return (
    <div className="py-10 border-t mt-20">
      <div className="w-10/12 mx-auto flex justify-center sm:justify-between gap-10 flex-wrap">
        <div className="w-full sm:w-3/12">
          <p className="font-bold text-xl">Logo</p>
          <a
            href="https://mlhnshuvo.vercel.app"
            target="blank"
            className="mt-2 font-light text-xs hover:underline"
          >
            © All right reserverd MH Shuvo
          </a>
        </div>
        <div className="w-full sm:w-5/12">
          <p className="text-xl font-semibold">About us</p>
          <p className="mt-2 text-justify">
            Ut excepteur aliqua id do ut fugiat et nostrud. Aliquip pariatur
            labore exercitation laboris ad irure exercitation non proident
            cillum ad excepteur esse aliquip. Quis exercitation et veniam ex in
            ea duis magna ullamco. Lorem anim reprehenderit elit esse commodo
            cupidatat proident ad ipsum nisi officia. Dolore labore ipsum
            excepteur officia. Pariatur dolore deserunt minim consequat culpa
            incididunt.
          </p>
        </div>
        <div className="w-full sm:w-3/12">
          <p className="text-xl font-semibold">Contact us</p>
          <div className="mt-2">
            <p>newsmyrnabeachrentals@gmail.com</p>
            <p>407.430.9541</p>
          </div>
          <div className="flex gap-5 mt-5">
            <i className="fa-brands cursor-pointer fa-facebook"></i>
            <i className="fa-brands cursor-pointer fa-instagram"></i>
            <i className="fa-brands cursor-pointer fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
