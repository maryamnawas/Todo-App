import axios from 'axios';
import TodoTypes from './todo';

const API_URL = 'http://localhost:5001/api/todos';

const TodoService = {
  getTodos: async (): Promise<TodoTypes[]> => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  },

  addTodo: async (text: string): Promise<TodoTypes> => {
    try {
      const newTodo = { id: 0, text, completed: false };
      const response = await axios.post(API_URL, newTodo);
      return response.data;
    } catch (error) {
      console.error("Error adding todo:", error);
      throw error;
    }
  },

  updateTodo: async (todo: TodoTypes): Promise<TodoTypes> => {
    try {
      const response = await axios.put(`${API_URL}/${todo.id}`, todo);
      return response.data;
    } catch (error) {
      console.error("Error updating todo:", error);
      throw error;
    }
  },

  deleteTodo: async (id: number): Promise<void> => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  },
};

export default TodoService;
