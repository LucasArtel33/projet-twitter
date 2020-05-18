const passport = require('passport');

exports.signinForm = (req, res, next) => {
  res.render('auth/auth-form', {errors: null });
}

exports.signin = (req, res, next) => {
  passport.authenticate('local', (e, user, info) => {
    if(e) {
      next(e)
    } else if (!user) {
      res.render('auth/auth-form', {errors: [ info.message ], isAuthenticated: req.isAuthenticated(), currentUser: req.user });
    } else {
      req.login(user, (e) => {
        if(e) { next(e) } else {
          res.redirect('/tweets');
        }
      });
    }
  })(req, res, next);
}

exports.signout = (req, res, next) => {
  req.logout();
  res.redirect('/auth/signin/form');
}