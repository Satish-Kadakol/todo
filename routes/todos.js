import express from 'express';
import Todo from '../models/Todo.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { createTodo, getTodoList, updateTodo, deleteTodo } from '../controllers/todoController.js';
const router = express.Router();

router.use(authMiddleware); // protect all routes below

router.post('/', createTodo);

// Get all todos
router.get('/', getTodoList);

// Update a todo by ID
router.put('/:id', updateTodo);

// Delete a todo by ID
router.delete('/:id', deleteTodo);

export default router;