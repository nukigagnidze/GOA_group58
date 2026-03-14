const User = require("../models/user.model");
const Post = require("../models/post.model");

// ყველა მომხმარებლის მოძებნა
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// კონკრეტული მომხმარებლის profile
exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// მომხმარებლის post-ები
exports.getUserPosts = async (req, res) => {
  try {
    const userId = req.params.id;

    const posts = await Post.find({ author: userId });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};