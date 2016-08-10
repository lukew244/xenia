var thinky = require(__dirname + '/../util/thinky.js');

var r = thinky.r;
var type = thinky.type;

var User = thinky.createModel('User', {
  id: type.string(),
  name: type.string(),
  email: type.string().email(),
  password: type.string()
});

module.exports = User;
