const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: String,
  text: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const PostSchema = new mongoose.Schema({
  text: String,
  likes: {
    type: Number,
    default: 0
  },
  comments: [CommentSchema]
});

module.exports = mongoose.model("Post", PostSchema);