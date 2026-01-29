const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../books.json');

// Helper functions
const loadBooks = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

const saveBooks = (books) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(books, null, 2));
};

// Controllers
exports.getBooks = (req, res) => {
    const books = loadBooks();
    res.json(books);
};

exports.addBook = (req, res) => {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const books = loadBooks();
    const newBook = { id: Date.now(), title, author, year };
    books.push(newBook);
    saveBooks(books);
    res.json(newBook);
};

exports.updateBook = (req, res) => {
    const books = loadBooks();
    const bookId = parseInt(req.params.id);
    const { title, author, year } = req.body;

    const index = books.findIndex(b => b.id === bookId);
    if (index === -1) return res.status(404).json({ message: 'Book not found' });

    books[index] = { ...books[index], title, author, year };
    saveBooks(books);
    res.json(books[index]);
};

exports.deleteBook = (req, res) => {
    const books = loadBooks();
    const bookId = parseInt(req.params.id);
    const newBooks = books.filter(b => b.id !== bookId);
    saveBooks(newBooks);
    res.json({ message: 'Book deleted' });
};
