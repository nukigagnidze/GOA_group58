const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// add comment
router.post("/:id/comment", async (req, res) => {
  const { text, user } = req.body;

  try {
    const post = await Post.findById(req.params.id);

    const newComment = {
      user,
      text
    };

    post.comments.push(newComment);

    await post.save();

    res.json(post.comments);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// get comments
router.get("/:id/comments", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.json(post.comments);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;