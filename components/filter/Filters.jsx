const Filters = ({ modalHandler }) => {
  return (
    <div>
      <div className="mb-5">
        <p className="fond-semibold text-2xl">Rooms and Bathrooms</p>
        <div className="mt-2 flex justify-between gap-2 items-center">
          <p>Bedrooms</p>
          <div className="flex justify-between gap-5 items-center text-xl">
            <p className="border-primary border h-4 w-4 pb-4 pt-3 pr-4 pl-4 rounded-full flex justify-center items-center cursor-pointer">
              -
            </p>
            <p>0</p>
            <p className="border-primary border h-4 w-4 pb-4 pt-3 pr-4 pl-4 rounded-full flex justify-center items-center cursor-pointer">
              +
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-5">
        <p className="fond-semibold text-2xl">Guest Rating</p>
        <div className="mt-2 flex justify-between gap-2 items-center">
          <input type="range" className="w-6/12" step={1} />
          <p>4</p>
        </div>
      </div>
      <hr />
      <div className="my-5">
        <p className="fond-semibold text-2xl">Price Range</p>
        <div className="mt-2 flex justify-between gap-2 items-center">
          <input type="range" className="w-6/12" step={1} />
          <p>4</p>
        </div>
      </div>
      <hr />
      <div className="my-5">
        <p className="fond-semibold text-2xl">Amenities</p>
        <div className="mt-2 flex gap-4 items-center flex-wrap">
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <p>Internet</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <p>TV</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <p>Swiming</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <p>Kitchen</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <p>AC</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <p>Washing machine</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <p>Clothes dryer</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <p>Oven</p>
          </label>
        </div>
      </div>
      <hr />
      <div className="my-5">
        <p className="fond-semibold text-2xl">Property type</p>
        <div className="mt-2 flex gap-4 items-center flex-wrap">
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <p>Outdoor swimming pool</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <p>Accessible 24/7</p>
          </label>
          <label className="flex gap-2 items-center w-5/12 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <p>Elevator in building</p>
          </label>
        </div>
      </div>
      <div className="flex justify-between gap-2 mt-10">
        <p
          className="font-semibold text-lg cursor-pointer border px-4 py-1 rounded-full"
          onClick={modalHandler}
        >
          Clear
        </p>
        <p
          className="font-semibold text-lg cursor-pointer border border-primary px-5 py-1 rounded-full bg-primary text-white"
          onClick={modalHandler}
        >
          Apply
        </p>
      </div>
    </div>
  );
};

export default Filters;
