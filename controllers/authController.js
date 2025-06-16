import passport from "passport";

console.log("authController loaded");

const login = (req, res, next) => {
  console.log("login called, req", !!req);
  passport.authenticate("local", {
    successRedirect: "/", // Or wherever you want to redirect
    failureRedirect: "/login",
    failureFlash: false,
    failureMessage: true,
  })(req, res, next);
};

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
};

export default {
  login,
  isLoggedIn,
};
