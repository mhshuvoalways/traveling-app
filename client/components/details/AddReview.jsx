import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { motion } from "framer-motion";
import axios from "../../utils/axios";

const AddReview = ({ modalHandler, itemId, setFinalItems, finalItems }) => {
  const [addReview, setAddReview] = useState({
    itemId,
    rating: 5,
    name: "",
    email: "",
    description: "",
  });

  const onChangeHandler = (event) => {
    setAddReview({
      ...addReview,
      [event.target.name]: event.target.value,
    });
  };

  const reviewHandler = (rating) => {
    setAddReview({
      ...addReview,
      rating,
    });
  };

  const reviewSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/review/addreview", addReview)
      .then((reviewsResponse) => {
        const temp = [...finalItems];
        temp.map((item) => {
          if (reviewsResponse.data.itemId.toString() === item.id.toString()) {
            item.reviews.push(reviewsResponse.data);
          }
        });
        setFinalItems(temp);
        modalHandler();
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={reviewSubmit}>
      <div>
        <p className="text-gray-800 font-light">Rating</p>
        <ReactStars
          size={32}
          activeColor="#F59E0B"
          value={5}
          onChange={reviewHandler}
        />
      </div>
      <input
        type="text"
        placeholder="Your Name"
        required
        name="name"
        onChange={onChangeHandler}
        className="w-full outline-0 bg-gray-50 px-2 py-2 rounded mt-5"
      />
      <input
        type="text"
        placeholder="Your Email"
        required
        name="email"
        onChange={onChangeHandler}
        className="w-full outline-0 bg-gray-50 px-2 py-2 rounded mt-5"
      />
      <textarea
        placeholder="Description"
        required
        name="description"
        onChange={onChangeHandler}
        className="w-full outline-0 bg-gray-50 px-2 py-5 rounded mt-5"
      />
      <motion.button
        className="bg-secondary w-full rounded-full px-2 py-2 mt-5 text-white font-semibold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Add
      </motion.button>
    </form>
  );
};

export default AddReview;
