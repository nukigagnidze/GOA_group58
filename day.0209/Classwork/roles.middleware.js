module.exports.allowedTo = (...roles) => {
  return (req, res, next) => {
    // req.user.role – უნდა არსებობდეს protect middleware-ის შემდეგ
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: "fail",
        message: "You do not have permission to perform this action",
      });
    }

    next();
  };
};
