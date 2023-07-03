var express = require("express");
var router = express.Router();
const moviesBL = require("../models/moviesBL");

/* GET users listing. */
router.get("/", function (req, res, next) {
  let dataLogin = req.session.dataLogin;
  res.render("movies", { dataLogin: dataLogin });
});

router.get("/all", async function (req, res, next) {
  let allmovies = await moviesBL.getAllMovies();
  // console.log(allmovies)
  let dataLogin = req.session.dataLogin;
  res.render("allmovies", { allmovies: allmovies, dataLogin: dataLogin });
  // console.log(allmovies);
});

router.get("/add", function (req, res, next) {
  let dataLogin = req.session.dataLogin;
  res.render("addmovie", { dataLogin: dataLogin });
});

router.post("/add", async function (req, res, next) {
  let movie = req.body;
  let resp = await moviesBL.addmovie(movie);
  res.redirect("/movies");
});

// router.get('/edit', function(req, res, next) {
//   console.log("req",req.body)
//   res.render('editmovie', );
// });

router.get("/edit/:id", async function (req, res, next) {
  let movieid = req.params.id;
  console.log("movieid" + movieid);
  let moviedata = await moviesBL.getMovieById(movieid);
  console.log("moviedata " + moviedata[0].name);
  let dataLogin = req.session.dataLogin;
  res.render("editmovie", { moviedata: moviedata[0], dataLogin: dataLogin });
});

router.post("/edit/:id", async function (req, res, next) {
  let movieID = req.params.id;
  let obj = req.body;
  console.log("movieupdated:", obj);
  try {
    let status = await moviesBL.editMovie(obj._id, obj);
    req.flash("success", "Movie updated successfully");
    res.render("movies", { flash: req.flash() });
    res.redirect("/movies");
    console.log(req.flash("success")); // Check if success message is logged
  } catch (error) {
    req.flash("error", "Failed to update movie");
    res.redirect("/movies");
    console.log(req.flash("error")); // Check if error message is logged
  }
});

module.exports = router;
