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
        const res = await axios.post('/api/todos', data);
        console.log('res', res)
        await fetchTodos();
    }

    return {
        todos,
        setTodos,
        fetchTodos,
        createTodo
    };
}