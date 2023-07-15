import Link from "next/link";
import Calendar from "../calendar";

const Book = () => {
  return (
    <div className="shadow-sm border rounded-xl py-10 px-5 bg-white text-gray-700">
      <div className="flex gap-1 justify-between items-center">
        <div className="flex gap-1 items-center">
          <p className="font-semibold text-3xl">$119</p>
          <p>/</p>
          <p className="text-gray-600">night</p>
        </div>
        <div className="flex gap-1 items-center">
          <i className="fa-solid fa-star text-yellow-500"></i>
          <p className="font-semibold">4.8</p>
          <p className="text-gray-600">(11)</p>
        </div>
      </div>
      <div className="mt-5 space-y-3 border p-5 rounded-2xl">
        <div className="text-center w-full md:w-auto flex items-center">
          <i className="fa-regular fa-calendar text-2xl"></i>
          <div>
            <p className="font-semibold text-xl">Feb 06 - Feb 10</p>
            <Calendar />
          </div>
        </div>
        <div className="text-center w-full md:w-auto flex items-center gap-3">
          <i className="fa-regular fa-user text-2xl"></i>
          <div>
            <p className="font-semibold text-xl">4 Guests</p>
            <p>Guests</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-2 mt-5 text-xl">
          <p>$119 x 3 night</p>
          <p>$357</p>
        </div>
        <div className="flex justify-between gap-2 mt-5 text-xl">
          <p>Service charge</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between gap-2 mt-5 text-xl border-t">
          <p className="text-2xl font-semibold">Total</p>
          <p>$357</p>
        </div>
      </div>
      <Link href="/checkout">
        <button className="bg-secondary w-full rounded-full px-2 py-2 mt-5 text-white font-semibold">
          Book
        </button>
      </Link>
    </div>
  );
};

export default Book;
