var express = require("express");
const { render } = require("../app");
var router = express.Router();
const userBL = require("../models/userBL");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("login");
});

router.post("/", async function (req, res, next) {
  let userName = req.body.userName;
  let password = req.body.password;

  try {
    let dataLogin = await userBL.login(userName, password);
    // let currectUser = await userBL.getUserJasonById(dataLogin._id)
    console.log("dataLogin" + dataLogin);

    req.session.dataLogin = dataLogin;

    res.redirect("/main");

    console.log("data login ", dataLogin);
  } catch (error) {
    console.log("catch the error of login", error);

    res.render("login", { error: "Incorrect username or password" });
  }
});

router.get("/create", async function (req, res, next) {
  res.render("createAccount");
});

router.post("/create", async function (req, res, next) {
  let userName = req.body.userName;
  
  let lastName = req.body.lastName;

  let password = req.body.password;

  let permession = req.body.permession;

  try {
    let dataCreate = await userBL.createAccount(userName, lastName, password, permession);

    res.redirect("/login");
  } catch {
    res.render("error", { error: error });
  }
});

module.exports = router;
