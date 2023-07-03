var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let test = req.sesion 
  console.log(test)
  res.redirect('/login');
});

module.exports = router;
