const express = require("express");
const router = express.Router();
const { getBooks, addBook } = require("../controllers/bookedController");

router.use(express.json());

router.get("/getbooks", getBooks);
router.post("/addbook", addBook);

module.exports = router;
