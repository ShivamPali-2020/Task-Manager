import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Server Error: Failed to fetch todos" });
  }
});

// Add a todo
router.post("/", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || text.trim() === "") {
      return res.status(400).json({ error: "Text field is required" });
    }

    const newTodo = new Todo({ text });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: "Server Error: Failed to add todo" });
  }
});

// Toggle complete
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });

    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: "Server Error: Failed to update todo" });
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });

    res.json({ message: "Todo deleted successfully", id: req.params.id });
  } catch (err) {
    res.status(500).json({ error: "Server Error: Failed to delete todo" });
  }
});

export default router;
