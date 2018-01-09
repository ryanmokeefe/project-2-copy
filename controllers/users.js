// all from passport lesson

var passport = require("passport")

// GET /signup
function getSignup(req, res, next) {
  res.render('signup.hbs', { message: req.flash('signupMessage') });
}

// POST /signup
function postSignup(req, res, next) {
  // local signup has to match the local signup in passport.use export: **********************
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
  });

  return signupStrategy(req, res, next);
}

// GET /login

function getLogin(req, res, next) {
  res.render('login.hbs', { message: req.flash('loginMessage') });
}

// POST /login (if verification was a success, allow entry):
function postLogin(req, res, next) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
  });

  return loginProperty(req, res, next);
}

// GET /logout
function getLogout(req, res) {
  req.logout();
  res.redirect('/');
}

// Restricted page
function profile(req, res){
  res.render("profile.hbs");
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  profile: profile
}
