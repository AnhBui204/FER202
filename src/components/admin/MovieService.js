import axios from "axios";

const API_URL = 'http://localhost:5000/movies'

export const fetchMovies = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

export const addMovies = async (movie) => {
    const response = await axios.post(API_URL, movie)
    return response.data
}

export const updateMovies = async (movie) => {
    const response = await axios.put(`${API_URL}/${movie.id}`, movie)
    return response.data
}

export const deleteMovies = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`)
    return response.data
}