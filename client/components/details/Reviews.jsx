import { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    const reviews = document.getElementById("reviews");
    const script = document.createElement("script");
    script.type = "application/javascript";
    script.src = "https://www.revyoos.com/js/widgetBuilder.js";
    script.setAttribute(
      "data-revyoos-widget",
      "eyJoIjoiNjMyNjZjZmE4YzUzZGYwNzZlYzNhOGYyIn0="
    );
    reviews.appendChild(script);
    return () => {
      reviews.removeChild(script);
    };
  }, []);

  return (
    <div className="shadow-sm border rounded-xl p-5 md:p-10 bg-white">
      <p className="text-3xl text-gray-800 font-semibold mb-5">Reviews</p>
      <div id="reviews"></div>
    </div>
  );
};

export default Reviews;
