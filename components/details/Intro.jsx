const Intro = () => {
  return (
    <div>
      <div className="shadow-sm border rounded-xl p-5 md:p-10 bg-white">
        <p className="text-3xl text-gray-800 font-semibold">
          ☀Beach Paradise | Steps to the Ocean | Pool | Pets Book NOW!
        </p>
        <div className="flex gap-1 justify-between items-center mt-5 text-gray-600">
          <p>6 Guests</p>
          <p>2 Bedrooms</p>
          <p>5 Beds</p>
        </div>
        <div className="flex gap-1 justify-between items-center mt-2">
          <div className="flex gap-1">
            <p className="font-semibold">$26</p>
            <p>/</p>
            <p className="text-gray-600">night</p>
          </div>
          <div className="flex gap-1 items-center">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <p className="font-semibold">4.8</p>
            <p className="text-gray-600">(11)</p>
          </div>
        </div>
        <p className="mt-5 text-lg font-light">
          Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
          accommodation, an outdoor swimming pool, a bar, a shared lounge, a
          garden and barbecue facilities. Complimentary WiFi is provided.
          <br />
          There is a private bathroom with bidet in all units, along with a
          hairdryer and free toiletries.
          <br />
          The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service
          and a car rental service are available at the accommodation, while
          cycling can be enjoyed nearby.
        </p>
      </div>
    </div>
  );
};

export default Intro;
