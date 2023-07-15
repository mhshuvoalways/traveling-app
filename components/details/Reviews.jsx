import Review from "./Review";

const Reviews = ({ modalHandler }) => {
  return (
    <div className="shadow-sm border rounded-xl p-10 bg-white">
      <div className="flex justify-between gap-2 mb-5">
        <div>
          <p className="text-3xl text-gray-800 font-semibold mb-2">Reviews</p>
          <div className="flex gap-1 items-center">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <p className="font-semibold">4.8</p>
            <p className="text-gray-600">(11)</p>
          </div>
        </div>
        <div>
          <button
            className="bg-secondary px-5 py-2 text-white rounded-full"
            onClick={modalHandler}
          >
            Add Review
          </button>
        </div>
      </div>
      <div className="space-y-5">
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Reviews;
