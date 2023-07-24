import Paypal from "./Paypal";

const Confirm = ({
  bookDates,
  bookObj,
  setBookObj,
  getBooksDates,
  setTostify,
  finalItems,
  setFinalItems,
}) => {
  return (
    <div className="shadow-sm border rounded-xl p-10 bg-white text-gray-700">
      <p className="text-3xl font-semibold">Confirm and payment</p>
      <div className="mt-5 pt-5 border-t">
        <p className="text-2xl font-semibold">Your trip</p>
        <div className="mt-2 w-full md:w-auto">
          <div>
            <p>Date</p>
            <p className="font-semibold text-xl">
              {bookDates[0]} - {bookDates[bookDates.length - 1]}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 pt-5 border-t">
        <p className="text-2xl font-semibold">Pay with</p>
        <Paypal
          bookObj={bookObj}
          bookDates={bookDates}
          setBookObj={setBookObj}
          getBooksDates={getBooksDates}
          setTostify={setTostify}
          finalItems={finalItems}
          setFinalItems={setFinalItems}
        />
      </div>
    </div>
  );
};

export default Confirm;
