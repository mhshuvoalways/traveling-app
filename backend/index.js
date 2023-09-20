require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./config/db");

const bookRouter = require("./routers/bookRouter");
const reviewRouter = require("./routers/reviewRouter");
const vrboRouter = require("./routers/vrboRouter");
const priceRouter = require("./routers/priceRouter");

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use("/book", bookRouter);
app.use("/review", reviewRouter);
app.use("/calendar", vrboRouter);
app.use("/price", priceRouter);

app.get("/", (req, res) => {
  res.send("This is a traveling project");
});

db(app);