const Reviews = require("../Model/Reviews");
const serverError = require("../utils/serverError");

const getReviews = (req, res) => {
  Reviews.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const addReview = (req, res) => {
  const { itemId, rating, name, email, description } = req.body;
  const orderObj = {
    itemId,
    rating,
    name,
    email,
    description,
  };
  new Reviews(orderObj)
    .save()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  getReviews,
  addReview,
};
