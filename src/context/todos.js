import axios from 'axios';
import { useState } from "react";

export default function useTodos() {
    // Global state
    const [todos, setTodos] = useState([]);

    // Fetching server data can go in here, too
    const fetchTodos = async () => {
        const res = await axios.get('/api/todos');
        setTodos(res.data);
    };

    const createTodo = async (title) => {
        const data = { title };
        await axios.post('/api/todos', data);

        await fetchTodos();
    }

    return {
        todos,
        setTodos,
        fetchTodos,
        createTodo
    };
}