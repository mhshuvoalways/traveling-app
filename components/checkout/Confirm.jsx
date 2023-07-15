const Confirm = () => {
  return (
    <div className="shadow-sm border rounded-xl p-10 bg-white text-gray-700">
      <p className="text-3xl font-semibold">Confirm and payment</p>
      <div className="mt-5 pt-5 border-t">
        <p className="text-2xl font-semibold">Your trip</p>
        <div className="flex justify-between gap-5 items-center mt-2">
          <div className="w-full md:w-auto">
            <div>
              <p>Date</p>
              <p className="font-semibold text-xl">Feb 06 - Feb 8</p>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <div>
              <p>Guests</p>
              <p className="font-semibold text-xl">4 Guests</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-5 border-t">
        <p className="text-2xl font-semibold">Pay with</p>
        <div className="flex justify-between gap-2 flex-wrap">
          <p className="bg-primary rounded-full px-10 cursor-pointer py-2 mt-5 text-white font-semibold md:w-auto w-full text-center">
            PAYPAL
          </p>
          <p className="bg-secondary rounded-full px-10 cursor-pointer py-2 mt-5 text-white font-semibold md:w-auto w-full text-center">
            CREDIT CARD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
