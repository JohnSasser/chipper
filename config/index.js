const passport = require("passport");

const SignupStratagy = require("./SignupStratagy");
const LoginStratagy = require("./LoginStratagy");
// const GoogleStratagy = require("./GoogleStratagy");

passport.use("local-signup", SignupStratagy);
passport.use("local-login", LoginStratagy);


module.exports = passport;