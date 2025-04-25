import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
