import React from 'react';
import '../../admin.css';
import { Button } from 'react-bootstrap';

const MovieList = ({ movies, onDelete, onEdit }) => {
    return (
        <div className='container bg-white text-black space-y-3 my-5'>
            <div className='flex items-center'>
                <input
                    type='text'
                    className='mr-1 w-full rounded-md border border-gray-300 px-4 py-2'
                    placeholder='Search movie'
                />
                <button className='bg-blue-800 text-white px-2 py-2 rounded-md'>Search</button>
            </div>
            <div className='overflow-y-auto'>
                <table className='min-w-full bg-white border border-gray-300 border-separate'>
                    <thead>
                        <tr className='border-b text-white'>
                            <th className='px-6 py-4 text-center text-md font-medium text-gray-900 bg-gray-100 border border-gray-300'>ID</th>
                            <th className='px-28 py-4 text-center text-md font-medium bg-gray-100 text-gray-900 border border-gray-300'>Name</th>
                            <th className='px-6 py-4 text-center text-md font-medium bg-gray-100 text-gray-900 border border-gray-300'>Duration</th>
                            <th className='px-6 py-4 text-center text-md font-medium bg-gray-100 text-gray-900 border border-gray-300'>Genre</th>
                            <th className='px-16 py-4 text-center text-md font-medium bg-gray-100 text-gray-900 border border-gray-300'>Trailer</th>
                            <th className='text-center text-md font-medium bg-gray-100 text-gray-900 border border-gray-300'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='space-x-4 m-3'>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td className='text-sm text-center border border-gray-500 py-3'>{movie.id}</td>
                                <td className='text-sm text-center border border-gray-500'>{movie.name}</td>
                                <td className='text-sm text-center border border-gray-500'>{movie.time}</td>
                                <td className='text-sm text-center border border-gray-500'>{movie.genres}</td>
                                <td className='text-sm text-center border border-gray-500'>
                                    <video width="120" controls>
                                        <source src={movie.video} type="video/mp4" />
                                    </video>
                                </td>
                                <td className='flex items-center justify-center space-x-3'>
                                    <button className="px-5 py-2 rounded-lg bg-blue-500 text-white" onClick={() => onEdit(movie)}>Edit</button>{' '}
                                    <button className="px-2 py-2 rounded-lg bg-red-500 text-white" onClick={() => onDelete(movie.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MovieList;
