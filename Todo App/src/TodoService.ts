// TodoService.ts

import TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = 'todos';

//  Getting the todos from the array
const TodoService = {
  getTodos: (): TodoTypes[] => {
    const todosStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todosStr ? JSON.parse(todosStr) : [];
  },

//  Adding the todos
  addTodo: (text: string): TodoTypes => {
    const todos = TodoService.getTodos();
    const newTodo: TodoTypes = { id: todos.length + 1, text, completed: false };
    const updatedTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    return newTodo;
  },

//  Updating the todos
  updateTodo: (todo: TodoTypes): TodoTypes => {
    const todos = TodoService.getTodos();
    const updatedTodos = todos.map((t) => (t.id === todo.id ? todo : t));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    return todo;
  },

//  Deleting the todos
  deleteTodo: (id: number): void => {
    const todos = TodoService.getTodos();
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  },
};

export default TodoService;
