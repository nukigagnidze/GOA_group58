const getAllPosts = (req, res) => {
    res.send('ყველა პოსტის სია');
};

const getPostById = (req, res) => {
    res.send(პოსტი ID-ით: ${req.params.id});
};

const createPost = (req, res) => {
    res.send('ახალი პოსტი დაემატა');
};

const updatePost = (req, res) => {
    res.send(პოსტი განახლდა ID: ${req.params.id});
};

const deletePost = (req, res) => {
    res.send(პოსტი წაიშალა ID: ${req.params.id});
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
const express = require('express');
const router = express.Router();
const {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/post.controller');

router
    .route('/')
    .get(getAllPosts)
    .post(createPost);

router
    .route('/:id')
    .get(getPostById)
    .put(updatePost)
    .delete(deletePost);

module.exports = router;
const express = require('express');
const app = express();
const postRouter = require('./routes/post.routes');

app.use(express.json());
app.use('/posts', postRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});