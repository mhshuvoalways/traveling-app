const express = require("express");
const router = express.Router();
const { getReviews, addReview } = require("../controllers/reviewController");

router.use(express.json());

router.get("/getreviews", getReviews);
router.post("/addreview", addReview);

module.exports = router;
