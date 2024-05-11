const index = ({ modalHandler }) => {
  return (
    <div
      className="inline-flex items-center gap-2 border-primary py-2 px-5 border bg-blue-100 mx-auto cursor-pointer text-center rounded-full mt-5 hover:bg-secondary hover:border-secondary hover:text-white"
      onClick={modalHandler}
    >
      <p className="">More filters</p>
      <i className="fa-solid fa-filter"></i>
    </div>
  );
};

export default index;
