const Price = require("../Model/Price");
const serverError = require("../utils/serverError");

const getPrices = (req, res) => {
  Price.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const addPrice = (req, res) => {
  const { condoId, dates, price } = req.body;
  const orderObj = {
    itemId: condoId,
    dates,
    price,
  };
  new Price(orderObj)
    .save()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const deletePrice = (req, res) => {
  Price.findOneAndRemove({ _id: req.params.id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  getPrices,
  addPrice,
  deletePrice,
};
