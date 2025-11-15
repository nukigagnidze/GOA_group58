module.exports = function createSendToken(user, statusCode, res) {
  const token = user.signToken();

  // (სურვილისამებრ) ქუქი – თუ გინდა
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false, // production-ში true გახდება
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  // Response
  res.status(statusCode).json({
    status: "success",
    token,
    user: {
      id: user._id,
      fullname: user.fullname,
      email: user.email,
    },
  });
};
