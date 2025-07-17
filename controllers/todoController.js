import Todo from "../models/Todo.js";

export const createTodo = async(req, res) => {
    try{
        const todo = new Todo({title:req.body.title});
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

export const getTodoList = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deletResponse = await Todo.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: deletResponse });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};