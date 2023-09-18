const express = require("express");
const router = express.Router();
const axios = require("axios");
const serverError = require("../utils/serverError");

router.use(express.json());

router.get("/getvrbodates/:condoId", async (req, res) => {
  const condoId = req.params.condoId;
  console.log(condoId);
  if (Number(condoId) === 1) {
    try {
      const response = await axios.get(
        `http://www.vrbo.com/icalendar/b4623b2711b5432299aef2a155f59072.ics?nonTentative`
      );
      res.json(response.data);
    } catch (error) {
      serverError(res);
    }
  } else if (Number(condoId) === 2) {
    try {
      const response = await axios.get(
        `http://www.vrbo.com/icalendar/5cafb891ed8d4620bbd0d7ec343a5514.ics?nonTentative`
      );
      res.json(response.data);
    } catch (error) {
      serverError(res);
    }
  } else if (Number(condoId) === 3) {
    try {
      const response = await axios.get(
        `http://www.vrbo.com/icalendar/0c25bfb988fc4a208f85b7a2b035d3b4.ics?nonTentative`
      );
      res.json(response.data);
    } catch (error) {
      serverError(res);
    }
  }
});

module.exports = router;
