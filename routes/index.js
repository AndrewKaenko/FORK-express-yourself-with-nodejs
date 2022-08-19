var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  try {
    return res.status(200).send("Welcome!");
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
});

module.exports = router;
