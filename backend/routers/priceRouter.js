const express = require("express");
const router = express.Router();
const {
  getPrices,
  addPrice,
  deletePrice,
} = require("../controllers/priceController");

router.use(express.json());

router.get("/getprices", getPrices);
router.post("/addprice", addPrice);
router.delete("/deleteprice/:id", deletePrice);

module.exports = router;
