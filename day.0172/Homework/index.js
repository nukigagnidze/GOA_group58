const { posts, getNextId } = require('../models/postModel');

function createPost(req, res) {
  const { title, author, description } = req.body;
  if (!title || !author || !description) return res.status(400).json({ error: 'Missing fields' });

  const newPost = {
    id: getNextId(),
    title,
    author,
    description,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
}

function getAllPosts(req, res) {
  res.json(posts);
}

function getPostById(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
}

function updatePost(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Post not found' });

  const { title, author, description } = req.body;
  if (title) post.title = title;
  if (author) post.author = author;
  if (description) post.description = description;

  res.json(post);
}

function deletePost(req, res) {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Post not found' });

  posts.splice(index, 1);
  res.status(204).send();
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
