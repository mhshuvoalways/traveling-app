const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const serverError = require("../utils/serverError");

const adminRegister = ({ email, password }) => {
  User.findOne({ email }).then((res) => {
    if (!res) {
      const user = {
        email,
        password,
      };
      new User(user).save();
    }
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((response) => {
      if (response) {
        if (password === response.password) {
          const token = jwt.sign(
            {
              _id: response._id,
              email: response.email,
            },
            "mySecret",
            { expiresIn: "1d" }
          );
          res.status(200).json({
            message: "Welcome back!",
            token,
          });
        } else {
          res.status(400).json({
            message: "Password doesn't match!",
          });
        }
      } else {
        res.status(400).json({
          message: "User not found!",
        });
      }
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  adminRegister,
  login,
};
