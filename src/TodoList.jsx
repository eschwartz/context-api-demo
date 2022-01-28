import { useContext, useEffect } from "react";
import { GlobalContext } from "./context";

function TodoList() {
    const { fetchTodos, todos } = useContext(GlobalContext);

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todoItem, i) => (
                    <li key={i}>{todoItem.title}</li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;