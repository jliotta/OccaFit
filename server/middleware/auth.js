module.exports.checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) { //check if it's an authenticated route
    next();
  }
  else {
    res.status(401).json({});
  }
}
