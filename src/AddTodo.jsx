import { useContext, useState } from "react";
import { GlobalContext } from "./context";

function AddTodo() {
    const [todo, setTodo] = useState('');
    const { createTodo } = useContext(GlobalContext);

    const onAddTodo = (evt) => {
        evt.preventDefault();

        createTodo(todo);

        setTodo('');
    }

    return (
        <>
            <form onSubmit={onAddTodo}>
                <h3>Add Todo</h3>
                <input
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </>
    )
}

export default AddTodo;