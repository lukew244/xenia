var express = require('express');
var router = express.Router();
// var session = require("express-session");

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.indexvar = "some text";
  console.log(req.session);
  res.render('index', { title: 'Express' });
});

router.get('/another', function(req, res, next) {
  req.session.anothervar = 42;
  console.log(req.session);
  res.render('index', { title: 'Express' });
});


module.exports = router;
