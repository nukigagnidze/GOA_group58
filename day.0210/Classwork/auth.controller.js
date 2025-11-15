exports.logout = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),   // cookie იწურება მყისიერად
  });

  res.status(200).json({
    status: "success",
    message: "Logged out successfully",
  });
};
