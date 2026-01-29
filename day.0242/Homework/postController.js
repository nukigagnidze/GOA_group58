const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../posts.json');

const loadPosts = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

const savePosts = (posts) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2));
};

exports.getPosts = (req, res) => {
    const posts = loadPosts();
    res.json(posts);
};

exports.addPost = (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const posts = loadPosts();
    const newPost = { id: Date.now(), title, content };
    posts.push(newPost);
    savePosts(posts);
    res.json(newPost);
};

exports.updatePost = (req, res) => {
    const posts = loadPosts();
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;

    const index = posts.findIndex(p => p.id === postId);
    if (index === -1) return res.status(404).json({ message: 'Post not found' });

    posts[index] = { ...posts[index], title, content };
    savePosts(posts);
    res.json(posts[index]);
};

exports.deletePost = (req, res) => {
    const posts = loadPosts();
    const postId = parseInt(req.params.id);
    const newPosts = posts.filter(p => p.id !== postId);
    savePosts(newPosts);
    res.json({ message: 'Post deleted' });
};
