import React, { useState } from 'react';
import '../../admin.css';
import { Button } from 'react-bootstrap';

const MovieList = ({ movies = [], onDelete, onEdit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Hàm lọc danh sách phim theo từ khóa
    const filteredMovies = movies.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-black text-gray-900 p-6 rounded-lg shadow-lg my-5">
            <div className="flex items-center space-x-3 mb-4">
                <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Search movies by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    onClick={() => setSearchTerm('')}
                >
                    Clear
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-blue-100 text-blue-900">
                            <th style={{ width: "5%" }} className="px-2 py-4 text-center font-medium border-b">ID</th>
                            <th style={{ width: "20%" }} className="px-4 py-4 text-center font-medium border-b">Name</th>
                            <th style={{ width: "10%" }} className="px-4 py-4 text-center font-medium border-b">Duration</th>
                            <th style={{ width: "15%" }} className="px-4 py-4 text-center font-medium border-b">Genre</th>
                            <th style={{ width: "25%" }} className="px-4 py-4 text-center font-medium border-b">Trailer</th>
                            <th style={{ width: "25%" }} className="px-4 py-4 text-center font-medium border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMovies.map((movie) => (
                            <tr key={movie.id} className="hover:bg-gray-100 transition duration-150">
                                <td className="text-center border-b py-4">{movie.id}</td>
                                <td className="text-center border-b py-4">{movie.name}</td>
                                <td className="text-center border-b py-4">{movie.time}</td>
                                <td className="text-center border-b py-4">{movie.genres}</td>
                                <td className="text-center border-b py-4">
                                    <div className="flex justify-center">
                                        <video width="100" controls className="rounded-md shadow-md">
                                            <source src={movie.video} type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="text-center border-b py-4 space-x-2">
                                    <button
                                        className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-150"
                                        onClick={() => onEdit(movie)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-150"
                                        onClick={() => onDelete(movie.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MovieList;
