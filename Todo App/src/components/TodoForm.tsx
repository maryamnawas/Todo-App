import React, { Dispatch, SetStateAction, useState } from "react";
import TodoService from "../TodoService";
import TodoTypes from "../todo";
import "../CSS/TodoForm.css";

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleAddTodo = async () => {
    if (newTodoText.trim() !== "") {
      try {
        const newTodo = await TodoService.addTodo(newTodoText);
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setNewTodoText("");
      } catch (error) {
        console.error("Error adding todo:", error);
        alert("Failed to add todo. Please try again.");
      }
    } else {
      alert("Todo text cannot be empty.");
    }
  };

  return (
    <div className="inputForm">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus={true}
        placeholder="Add a Task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
