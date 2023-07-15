import ReactStars from "react-rating-stars-component";

const AddReview = ({ modalHandler }) => {
  return (
    <div>
      <div>
        <p className="text-gray-800 font-light">Rating</p>
        <ReactStars size={32} activeColor="#F59E0B" value={5} />
      </div>
      <input
        type="text"
        placeholder="Your Name"
        required
        className="w-full outline-0 bg-gray-50 px-2 py-2 rounded mt-5"
      />
      <input
        type="text"
        placeholder="Your Email"
        required
        className="w-full outline-0 bg-gray-50 px-2 py-2 rounded mt-5"
      />
      <textarea
        placeholder="Description"
        required
        className="w-full outline-0 bg-gray-50 px-2 py-5 rounded mt-5"
      />
      <button
        className="bg-secondary w-full rounded-full px-2 py-2 mt-5 text-white font-semibold"
        onClick={modalHandler}
      >
        Add
      </button>
    </div>
  );
};

export default AddReview;
