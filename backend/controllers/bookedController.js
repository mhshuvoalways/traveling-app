const Booked = require("../Model/Booked");
const serverError = require("../utils/serverError");

const getBooks = (req, res) => {
  Booked.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const addBook = (req, res) => {
  const { itemId, dates, name, email, phone } = req.body;
  console.log(req.body);
  const orderObj = {
    itemId: itemId,
    dates,
    name,
    email,
    phone,
  };
  new Booked(orderObj)
    .save()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  getBooks,
  addBook,
};
