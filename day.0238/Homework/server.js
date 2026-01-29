const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// tasks.json-ში ინახება ჩვენი task-ები
const DATA_FILE = './tasks.json';

// Helper function: load tasks
function loadTasks() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

// Helper function: save tasks
function saveTasks(tasks) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

// GET all tasks
app.get('/tasks', (req, res) => {
    const tasks = loadTasks();
    res.json(tasks);
});

// POST new task
app.post('/tasks', (req, res) => {
    const tasks = loadTasks();
    const newTask = {
        id: Date.now(), // უნიკალური ID
        text: req.body.text
    };
    tasks.push(newTask);
    saveTasks(tasks);
    res.json(newTask);
});

// PUT /tasks/:id - Update existing task
app.put('/tasks/:id', (req, res) => {
    const tasks = loadTasks();
    const taskId = parseInt(req.params.id);
    const { text } = req.body;

    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    tasks[taskIndex].text = text; // ახლის ტექსტით განახლება
    saveTasks(tasks);

    res.json(tasks[taskIndex]);
});

// DELETE task
app.delete('/tasks/:id', (req, res) => {
    const tasks = loadTasks();
    const taskId = parseInt(req.params.id);
    const newTasks = tasks.filter(t => t.id !== taskId);
    saveTasks(newTasks);
    res.json({ message: 'Deleted' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
