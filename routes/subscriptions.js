var express = require('express');
var router = express.Router();
const subscriptionsBL = require('../models/subscriptiopsBL')
const subscriptionsModel = require('../models/subscriptionsModel')



/* GET home page. */
router.get('/', async function(req, res, next) {
  let allsubscriptions = await subscriptionsBL.GetAllsubscriptions()
  res.render('allsubscriptions', {allsubscriptions : allsubscriptions});
  console.log(allsubscriptions)
});

router.get('/all', async function(req, res, next) {
  let allsubscriptions = await moviesBL.GetAllMovies()
    res.render('allmovies', {allMovies: allmovies} )
    // console.log(allmovies);
  });

module.exports = router;
