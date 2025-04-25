import React from "react";
import { motion } from "framer-motion";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <motion.div
      className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 rounded p-3 mb-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <span>{todo.text}</span>
      <button
        onClick={() => onDelete(todo._id)}
        className="text-red-500 font-bold"
      >
        X
      </button>
    </motion.div>
  );
};

export default TodoItem;
