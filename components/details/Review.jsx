import ReactStars from "react-rating-stars-component";

const Review = () => {
  return (
    <div className="border-b pb-3">
    <div className="flex justify-between gap-2">
      <div>
        <p className="font-semibold text-lg">Cody Fisher</p>
        <p>mlah@gmail.com</p>
        <p className="text-gray-700 font-light">May 20, 2023</p>
      </div>
      <ReactStars
        size={24}
        activeColor="#F59E0B"
        value={5}
        edit={false}
      />
    </div>
    <p className="text-gray-700 text-lg mt-2">
      There’s no stopping the tech giant. Apple now opens its 100th store
      in China.There’s no stopping the tech giant. There’s no stopping the
      tech giant. Apple now opens its 100th store in China.There’s no
      stopping the tech giant.
    </p>
  </div>
  );
};

export default Review;
