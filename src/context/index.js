import axios from 'axios';
import { createContext, useState } from "react";
import useStateLogger from "../useStateLogger";
import useGames from './games';
import useTodos from './todos';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    // There are all the values that will be made available
    // from `useContext(GlobalContext)`
    const state = {
        todos: useTodos(),
        games: useGames(),
    }

    // Log state changes, similar to redux-logger
    // Not necessary for this to work, but it's nice
    useStateLogger(state);

    return (
        <GlobalContext.Provider
            value={state}
        >
            {children}
        </GlobalContext.Provider>
    );
}