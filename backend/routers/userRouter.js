const express = require("express");
const router = express.Router();
const { login } = require("../controllers/userController");
router.use(express.json());

router.post("/login", login);

module.exports = router;
