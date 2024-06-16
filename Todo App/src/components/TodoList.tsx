import React, { useState, useEffect } from "react";
import TodoService from "../TodoService";
import TodoTypes from "../todo";
import TodoForm from "./TodoForm";
import "../CSS/TodoList.css";
import { FaEdit, FaCheck } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState<string>("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await TodoService.getTodos();
        setTodos(fetchedTodos);
      } catch (error) {
        console.error("Error fetching todos:", error);
        alert("Failed to fetch todos. Please check your network connection.");
      }
    };
    fetchTodos();
  }, []);

  const handleEditStart = (id: number, text: string) => {
    setEditingTodoId(id);
    setEditedTodoText(text);
  };

  const handleEditCancel = () => {
    setEditingTodoId(null);
    setEditedTodoText("");
  };

  const handleEditSave = async (id: number) => {
    if (editedTodoText.trim() !== "") {
      try {
        const updatedTodo = await TodoService.updateTodo({
          id,
          text: editedTodoText,
          completed: false,
        });
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
        setEditingTodoId(null);
        setEditedTodoText("");
      } catch (error) {
        console.error("Error updating todo:", error);
        alert("Failed to update todo. Please try again.");
      }
    } else {
      alert("Todo text cannot be empty.");
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await TodoService.deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
      alert("Failed to delete todo. Please try again.");
    }
  };

  return (
    <div className="todoContainer">
      <TodoForm setTodos={setTodos} />
      <div className="todos">
        {todos.map((todo) => (
          <div className="items" key={todo.id}>
            {editingTodoId === todo.id ? (
              <div className="editText">
                <input
                  type="text"
                  value={editedTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                  autoFocus={true}
                />
                <button onClick={() => handleEditSave(todo.id)}>
                  <FaCheck />
                </button>
                <button className="cancelBtn" onClick={handleEditCancel}>
                  <GiCancel />
                </button>
              </div>
            ) : (
              <div className="editBtn">
                <span>{todo.text}</span>
                <button onClick={() => handleEditStart(todo.id, todo.text)}>
                  <FaEdit />
                </button>
              </div>
            )}
            <button onClick={() => handleDeleteTodo(todo.id)}>
              <RiDeleteBin5Fill />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
