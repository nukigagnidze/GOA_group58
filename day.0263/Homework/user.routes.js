const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserProfile);
router.get("/:id/posts", userController.getUserPosts);

module.exports = router;