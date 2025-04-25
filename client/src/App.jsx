import React from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import axios from "./api/axios";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    axios
      .get("/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addTodo = async (text) => {
    try {
      const res = await axios.post("/todos", { text });
      setTodos((prev) => [...prev, res.data]);
      toast.success("Todo added!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add todo.");
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/todos/${id}`);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
      toast.error("Todo deleted.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete todo.");
    }
  };

  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <div className="max-w-xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Todo List</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
        <TodoForm onAdd={addTodo} />
        <AnimatePresence>
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} onDelete={deleteTodo} />
          ))}
        </AnimatePresence>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default App;
