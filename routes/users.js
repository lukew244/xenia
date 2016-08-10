var express = require('express');
var router = express.Router();
var User = require(__dirname + '/../models/users.js');
var bcrypt = require('bcryptjs');


/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('users/new', { title: 'Express' });

  var currentUser = User.filter({
    email: 'l@email.com'}).run().then(function(user) {
      console.log("we're in the variable");
      var hash = user[0].password;
      console.log(hash);
      var teststring = "test";
      bcrypt.compare(teststring, hash, function(err, res) {
          console.log(res);

      });
    });




});


router.post('/', function(req, res, next) {
  var encPassword = genPassword(req.body.password, newUser);

  function newUser(hashedPassword) {

    var user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    user.saveAll();
  }


  // res.redirect('/');
});


function genPassword(password, newUser) {
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
          newUser(hash);
      });
  });
}




module.exports = router;
