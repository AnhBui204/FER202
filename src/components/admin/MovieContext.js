import React, {createContext, useReducer, useEffect} from 'react'
import { movieReducer, initalState } from './MovieReducer'
import { fetchMovies } from './MovieService'

export const MovieContext = createContext()

const MovieContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(movieReducer, initalState)
    useEffect(() => {
        const getMovies = async() => {
            try{
                const movies = await fetchMovies()
                dispatch({type: 'FETCH_SUCCESS', payload: movies})
            }catch(error){
                dispatch({type: 'FETCH_ERROR'})
            }
        }
        getMovies()
    },[])


    return (
        <MovieContext.Provider value={{state, dispatch}}>
            {children}
        </MovieContext.Provider>
    
  )
}

export default MovieContextProvider