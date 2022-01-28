import axios from 'axios';
import { useState } from "react";

export default function useGames() {
    // Global state
    const [games, setGames] = useState([]);

    // Fetching server data can go in here, too
    const fetchGames = async () => {
        const res = await axios.get('/api/games');
        setGames(res.data);
    };

    const createGame = async (name) => {
        await axios.post('/api/games', { name });

        await fetchGames();
    }

    return {
        games,
        setGames,
        fetchGames,
        createGame
    };
}