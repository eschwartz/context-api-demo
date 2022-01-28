import { useContext, useEffect } from "react";
import { GlobalContext } from "./context";

function GameList() {
    const {
        games: { fetchGames, games }
    } = useContext(GlobalContext);

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <>
            <h2>Games</h2>
            <ul>
                {games.map((todoItem, i) => (
                    <li key={i}>{todoItem.name}</li>
                ))}
            </ul>
        </>
    )
}

export default GameList;