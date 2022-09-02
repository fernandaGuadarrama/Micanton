const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("mi-canton/inicio");
});


module.exports = router;
