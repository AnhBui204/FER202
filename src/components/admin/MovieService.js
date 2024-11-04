import axios from "axios";

const BASE_URL = 'http://localhost:5000';

export const fetchMovies = async (category) => {
    const response = await axios.get(`${BASE_URL}/${category}`);
    return response.data;
};

// Add a new movie to a specific category
export const addMovie = async (category, movie) => {
    const response = await axios.post(`${BASE_URL}/${category}`, movie);
    return response.data;
};

// Update an existing movie in a specific category
export const updateMovie = async (category, movie) => {
    try {
        const response = await axios.get(`${BASE_URL}/${category}/${movie.id}`);
        if (response.status === 200) {  // Check if the movie exists
            const updateResponse = await axios.put(`${BASE_URL}/${category}/${movie.id}`, movie);
            return updateResponse.data;
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error(`Movie with ID ${movie.id} not found in ${category}.`);
        } else {
            console.error("Error updating movie:", error);
        }
        throw error;
    }
};

// Delete a movie from a specific category
export const deleteMovie = async (category, id) => {
    const response = await axios.delete(`${BASE_URL}/${category}/${id}`);
    return response.data;
};
