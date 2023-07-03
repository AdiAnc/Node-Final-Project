var express = require('express');
var router = express.Router();

/* GET main */
router.get('/', function(req, res, next) {
  let dataLogin = req.session.dataLogin;
  res.render('main',{dataLogin: dataLogin });
});

module.exports = router;
