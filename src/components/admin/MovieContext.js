import React, { createContext, useReducer, useEffect } from 'react';
import { movieReducer, initialState } from './MovieReducer';
import { fetchMovies } from './MovieService';

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(movieReducer, initialState);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const [homeData, action, anime, phimviet] = await Promise.all([
                    fetchMovies('homeData'),
                    fetchMovies('action'),
                    fetchMovies('anime'),
                    fetchMovies('phimviet')
                ]);

                dispatch({ type: 'FETCH_SUCCESS', payload: { homeData, action, anime, phimviet } });
            } catch (error) {
                console.error("Failed to fetch movies:", error);
                dispatch({ type: 'FETCH_ERROR' });
            }
        };
        loadCategories();
    }, []);

    return (
        <MovieContext.Provider value={{ state, dispatch }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;
