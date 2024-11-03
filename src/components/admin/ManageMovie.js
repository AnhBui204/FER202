import React, { lazy, useContext, useState } from 'react'
import { MovieContext } from './MovieContext'
import { deleteMovie, updateMovies } from './MovieService'
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

    const handleDelete = id => {
        setDeleteMovieId(id)
        setShowModal(true)
    }

    const confirmDelete = async () => {
        await deleteMovie(deleteMovieId)
        dispatch({ type: 'DELETE_MOVIE', payload: deleteMovieId })
        setShowModal(false)
    }

    const handleEdit = movie => {
        setEditingMovie(movie)
    }

    const handleSave = async (updateMovies) => {
        const update = await updateMovies(updateMovies)
        dispatch({ type: 'EDIT_MOVIE', payload: update })
        setEditingMovie(null)
    }

    return (
        <div className='movie-management container'>
            <h2 className='font-bold text-3xl text-center my-4'>Movie Management</h2>

                <h3 className='font-bold my-4'>Home Movies</h3>
                <MovieList movies={state.homeData} onDelete={handleDelete} onEdit={handleEdit}/>

                <h3 className='font-bold my-4'>Action Movies</h3>
                <MovieList movies={state.actionData} onDelete={handleDelete} onEdit={handleEdit}/>

                <h3 className='font-bold my-4'>Anime Movies</h3>
                <MovieList movies={state.animeData} onDelete={handleDelete} onEdit={handleEdit} />

                <h3 className='font-bold my-4'>Phim Viet</h3>
                <MovieList movies={state.phimvietData} onDelete={handleDelete} onEdit={handleEdit}/>
            <MovieForm onSave={handleSave} editingMovie={editingMovie} />
            <DeleteModal show={showModal} onHide={() => setShowModal(false)} onConfirm={confirmDelete} />
        </div>
    )
}

export default ManageMovie