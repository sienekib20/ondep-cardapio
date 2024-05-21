const Controller = require("../controllers/Controller");

function isAuthenticated(req, res, next) {
  if (Controller.isAuthenticated()) {
    next();  // User is authenticated, proceed to the next middleware or route handler
  } else {
    res.redirect('/signin');  // Not authenticated, redirect to login page
    // Alternatively, you can send an error message:
    // res.status(401).send('Not authenticated');
  }
}

module.exports = isAuthenticated;
