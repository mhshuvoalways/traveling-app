import Review from "./Review";

const Reviews = ({ modalHandler, findItems, sumReview }) => {
  return (
    <div className="shadow-sm border rounded-xl p-5 md:p-10 bg-white">
      <div className="flex justify-between gap-2 mb-5">
        <div>
          <p className="text-3xl text-gray-800 font-semibold mb-2">Reviews</p>
          <div className="flex gap-1 items-center">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <p className="font-semibold">
              {findItems?.reviews.length &&
                (sumReview / findItems?.reviews.length).toFixed(1)}
            </p>
            <p className="text-gray-600">({findItems?.reviews.length})</p>
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
        {findItems?.reviews.map((review) => (
          <div key={review._id}>
            <Review
              name={review.name}
              email={review.email}
              date={review.createdAt}
              rating={review.rating}
              description={review.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;