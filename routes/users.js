var express = require('express');
var router = express.Router();
var User = require(__dirname + '/../models/users.js');
var bcrypt = require('bcryptjs');
var session = require('express-session');

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('users/new', { title: 'Sign up', currentUser: req.session.user });
});

router.post('/', function(req, res, next) {
userExists(req, res);

function userExists(req, res) {
  User.filter({email: req.body.email}).run().then(function(userExists) {
    if (userExists[0] === undefined) {
      createUser();
    } else {res.redirect('/users/new');}
    });
  }

function createUser() {
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password)
  });

  user.saveAll();
  req.session.user = user;
  req.session.save();
  res.redirect('/');
}


});

module.exports = router;
