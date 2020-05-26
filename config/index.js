const passport = require("passport");

const SignupStratagy = require("./SignupStrategy");
const LoginStratagy = require("./LoginStrategy");
// const GoogleStratagy = require("./GoogleStratagy");

passport.use("local-signup", SignupStratagy);
passport.use("local-login", LoginStratagy);


module.exports = passport;