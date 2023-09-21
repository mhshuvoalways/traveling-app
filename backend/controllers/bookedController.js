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
  const { itemId, dates, name, email, phone, title } = req.body;
  const orderObj = {
    itemId: itemId,
    title,
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
