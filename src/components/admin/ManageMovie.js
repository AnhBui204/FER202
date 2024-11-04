import React, { lazy, useContext, useState } from 'react'
import { MovieContext } from './MovieContext'
import { deleteMovie, updateMovie } from './MovieService'
import DeleteModal from './DeleteModal'
import { loadWithDelay } from '../utils/loadWithDelay';
import '../../admin.css'
const MovieList = lazy(() => loadWithDelay(() => import('./MovieList'), 2000));
const MovieForm = lazy(() => loadWithDelay(() => import('./MovieForm'), 2000));

const ManageMovie = () => {
    const { state, dispatch } = useContext(MovieContext)
    const [showModal, setShowModal] = useState(false)
    const [deleteMovieId, setDeleteMovieId] = useState(null)
    const [editingMovie, setEditingMovie] = useState(null)

    const handleDelete = (id, category) => {
        setDeleteMovieId({ id, category });
        setShowModal(true);
    }

    const confirmDelete = async () => {
        const { id, category } = deleteMovieId;
        await deleteMovie(category, id);
        dispatch({ type: 'DELETE_MOVIE', category: category, payload: id });
        setShowModal(false);
    }

    const handleEdit = (movie, category) => {
        setEditingMovie({ ...movie, category });
    }

    const handleSave = async (updatedMovie) => {
        const { category, ...movieData } = updatedMovie;
        try {
            const updated = await updateMovie(category, movieData); // Update with category and movieData
            dispatch({ type: 'EDIT_MOVIE', category: category, payload: updated });
            setEditingMovie(null); // Reset form after successful update
        } catch (error) {
            console.error("Error updating movie:", error); // Log error details in console
        }
    };

    return (
        <div className='movie-management container'>
            <h2 className='font-bold text-3xl text-center my-4'>Movie Management</h2>

            <h3 className="font-bold my-2 bg-[#e50813] rounded-lg px-6 py-3 text-white inline-block">Home Movies</h3>
            <MovieList movies={state.homeData} onDelete={(id) => handleDelete(id, 'homeData')} onEdit={(movie) => handleEdit(movie, 'homeData')} />

            <h3 className="font-bold my-2 bg-[#e50813] rounded-lg px-6 py-3 text-white inline-block">Action Movies</h3>
            <MovieList movies={state.action} onDelete={(id) => handleDelete(id, 'action')} onEdit={(movie) => handleEdit(movie, 'action')} />

            <h3 className="font-bold my-2 bg-[#e50813] rounded-lg px-6 py-3 text-white inline-block">Anime Movies</h3>
            <MovieList movies={state.anime} onDelete={(id) => handleDelete(id, 'anime')} onEdit={(movie) => handleEdit(movie, 'anime')} />

            <h3 className="font-bold my-2 bg-[#e50813] rounded-lg px-6 py-3 text-white inline-block">Phim Viet</h3>
            <MovieList movies={state.phimviet} onDelete={(id) => handleDelete(id, 'phimviet')} onEdit={(movie) => handleEdit(movie, 'phimviet')} />

            <MovieForm onSave={handleSave} editingMovie={editingMovie} />
            <DeleteModal show={showModal} onHide={() => setShowModal(false)} onConfirm={confirmDelete} />
        </div>
    )
}

export default ManageMovie