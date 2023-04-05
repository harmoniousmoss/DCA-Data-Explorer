var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/demographics", function (req, res) {
  res.render("demographics");
});

router.get("/ict-users", function (req, res) {
  res.render("ict-users");
});

router.get("/ict-professionals", function (req, res) {
  res.render("ict-professionals");
});

router.get("/digital-infra", function (req, res) {
  res.render("digital-infra");
});

router.get("/digital-culture", function (req, res) {
  res.render("digital-culture");
});

module.exports = router;
