function checkAuth(req, res, next) {
  try {
    if (req.headers.token) {
      next();
    } else {
      return res.status(401).json({
        message: "Invalid Or Expired Token Provided!",
      });
    }
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  checkAuth: checkAuth,
};
