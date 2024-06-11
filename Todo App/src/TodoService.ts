// TodoService.ts

import TodoTypes from "./todo";


const LOCAL_STORAGE_KEY = 'todos';

const TodoService = {
  getTodos: (): TodoTypes[] => {
    const todosStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todosStr ? JSON.parse(todosStr) : [];
  },

};

export default TodoService;
