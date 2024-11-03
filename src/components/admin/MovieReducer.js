export const initalState = {
    movies: [],
    loading: true,
    error: ''
}

export const movieReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: true,
                movies: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                movies: [],
                error: 'Something went wrong!'
            }
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        case 'EDIT_MOVIE':
            return {
                ...state,
                movies: state.movies.map(movie =>
                    movie.id === action.payload.id ? action.payload : movie
                )
            };
        case 'DELETE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.payload)
            };
        default:
            return state;
    }
}