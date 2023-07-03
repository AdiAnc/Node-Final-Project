var express = require("express");
const userModel = require("../models/userModel");
const userBL = require("../models/userBL");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  let dataLogin = req.session.dataLogin;
  res.render("users", { dataLogin: dataLogin });
});

router.get("/all", async function (req, res, next) {
  let alluser = await userBL.getAllUser();
  let dataLogin = req.session.dataLogin;
  res.render("allusers", { allUsers: alluser, dataLogin: dataLogin });
});

router.get("/edit/:_id", async function (req, res, next) {
  let userId = req.params._id;
  console.log("userId get" + userId);
  let userdata = await userBL.getUserById(userId);
  let dataLogin = req.session.dataLogin;
  console.log("userdata " + userdata[0]);
  res.render("edituser", { userdata: userdata[0], dataLogin: dataLogin });
});

router.post("/edit/:_id", async function (req, res, next) {
  let userId = req.params._id;
  let obj = req.body;
  console.log("userId Post " + userId);
  console.log("userupdated:", obj);
  let status = await userBL.editUser(obj._id, obj);
  let alluser = await userBL.getAllUser();
  let dataLogin = req.session.dataLogin;
  res.status(200);
  res.render("allusers", { allUsers: alluser, dataLogin: dataLogin });
});

module.exports = router;
