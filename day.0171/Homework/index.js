const express = require('express');
const postRouter = express.Router();

let posts = [];
let currentId = 1;

// დამატება ახალი პოსტის
postRouter.post('/', (req, res) => {
  const { title, author, description } = req.body;
  if (!title || !author || !description) {
    return res.status(400).json({ error: 'Title, author and description are required' });
  }
  const newPost = {
    id: currentId++,
    title,
    author,
    description,
    comments: []
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// პოსტის წაშლა ID-ს მიხედვით
postRouter.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(post => post.id === id);
  if (index === -1) return res.status(404).json({ error: 'Post not found' });
  posts.splice(index, 1);
  res.status(204).send();
});

// პოსტის წამოღება ID-ს მიხედვით
postRouter.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// პოსტის განახლება ID-ს მიხედვით
postRouter.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id);
  if (!post) return res.status(404).json({ error: 'Post not found' });

  const { title, author, description } = req.body;
  if (title) post.title = title;
  if (author) post.author = author;
  if (description) post.description = description;

  res.json(post);
});

// მომხმარებლის პოსტების ნახვა (author-ზე დაყრდნობით)
postRouter.get('/author/:author', (req, res) => {
  const author = req.params.author;
  const userPosts = posts.filter(post => post.author === author);
  res.json(userPosts);
});

// კომენტარის დამატება პოსტზე
postRouter.post('/:id/comments', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id);
  if (!post) return res.status(404).json({ error: 'Post not found' });

  const { comment } = req.body;
  if (!comment) return res.status(400).json({ error: 'Comment is required' });

  post.comments.push(comment);
  res.status(201).json(post.comments);
});

// პოსტის კომენტარების გამოჩენა
postRouter.get('/:id/comments', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id);
  if (!post) return res.status(404).json({ error: 'Post not found' });

  res.json(post.comments);
});

module.exports = postRouter;
