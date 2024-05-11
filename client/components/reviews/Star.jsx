import ReactStars from "react-rating-stars-component";

const Start = ({ value }) => {
  return (
    <div>
      <ReactStars
        {...{
          size: 20,
          value: value,
          count: 5,
          activeColor: "#ff3b59",
          a11y: true,
          isHalf: true,
          edit: false,
        }}
      />
    </div>
  );
};

export default Start;
