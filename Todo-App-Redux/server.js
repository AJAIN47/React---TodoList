import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000

// Enable CORS for frontend communication
app.use(cors());
app.use(express.json());

let todos = [
  {
    id: '123',
    text: 'Fake - Add a server',
    isCompleted: true,
  },
  {
    id: '456',
    text: 'Mock Complete List',
    isCompleted: false,
  },
];

// GET: Fetch all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// POST: Add a new todo
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: `${Date.now()}`,
    text: req.body.text,
    isCompleted: false,
  };
  todos.push(newTodo);
  res.json(newTodo);
});

// DELETE: Remove a todo
app.delete('/api/todos/:id', (req, res) => {
  const todoId = req.params.id;
  todos = todos.filter(todo => todo.id !== todoId);
  res.sendStatus(204);
});

// PUT: Update a todo
app.put('/api/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const updatedTodo = req.body;

  const todoIndex = todos.findIndex(todo => todo.id === todoId);
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
  res.json(todos[todoIndex]);
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${port}`);
});
