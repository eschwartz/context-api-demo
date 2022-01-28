import { useContext, useState } from "react";
import { GlobalContext } from "./context";

function AddGame() {
    const [game, setGame] = useState('');
    const {
        games: { createGame }
    } = useContext(GlobalContext);

    const onAddGame = (evt) => {
        evt.preventDefault();

        createGame(game);

        setGame('');
    }

    return (
        <>
            <form onSubmit={onAddGame}>
                <h3>Add Game</h3>
                <input
                    value={game}
                    onChange={e => setGame(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </>
    )
}

export default AddGame;