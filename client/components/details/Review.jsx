import ReactStars from "react-rating-stars-component";
import moment from "moment";

const Review = ({ name, email, date, rating, description }) => {
  return (
    <div className="border-b pb-3">
      <div className="flex justify-between gap-2">
        <div>
          <p className="font-semibold text-lg">{name}</p>
          <p>{email}</p>
          <p className="text-gray-700 font-light">
            {moment(date).format("LL")}
          </p>
        </div>
        <ReactStars
          size={24}
          activeColor="#F59E0B"
          value={rating}
          edit={false}
        />
      </div>
      <p className="text-gray-700 text-lg mt-2">{description}</p>
    </div>
  );
};

export default Review;
