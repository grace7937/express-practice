const passport = require("passport");
const express = require("express");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const googleCredencials = require("../config/google.json");
const router = express.Router();


 passport.use(
    new GoogleStrategy(
        {
          clientID: googleCredencials.web.client_id,
          clientSecret: googleCredencials.web.client_secret,
          callbackURL: googleCredencials.web.redirect_uris[0],
        },
        function (accessToken, refreshToken, profile, done) {
            console.log("GoogleStratege",accessToken, refreshToken, profile)
        //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //     return done(err, user);
        //   });
        }
      )
    );

router.get("/",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
  })
);

// router.get('/auth/google/callbaßck', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });


module.exports = router;
