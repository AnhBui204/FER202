import React, { useState, useEffect, useContext } from 'react';
import { MovieContext } from './MovieContext';
import { Form, Button } from 'react-bootstrap';
import { addMovies } from './MovieService';
import '../../admin.css'

const MovieForm = ({ onSave, editingMovie }) => {
  const { dispatch } = useContext(MovieContext);
  const [movie, setMovie] = useState({ id: '', name: '', duration: '', type: '' , trailer:''});

  useEffect(() => {
    if (editingMovie) {
      setMovie(editingMovie);
    }
  }, [editingMovie]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingMovie) {
      onSave(movie);
    } else {
      const newMovie = await addMovies(movie);
      dispatch({ type: 'ADD_MOVIE', payload: newMovie });
    }
    setMovie({ id: '', name: '', duration: '', type: '', trailer:'' });
  };

  return (
    <Form onSubmit={handleSubmit} className='border-[3px] rounded-lg space-x-5 space-y-3 w-full my-5'>
      <Form.Group className='hidden'>
      </Form.Group>
      <Form.Group className='flex flex-col'>
        <Form.Label className='font-bold text-lg'>Id</Form.Label>
        <Form.Control
          type="text"
          className='w-[98%] border border-gray-300 p-1 rounded-lg hover:border-blue-100 hover:border-[2px]'
          value={movie.id}
          onChange={(e) => setMovie({ ...movie, id: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group className='flex flex-col'>
        <Form.Label className='font-bold text-lg'>Name</Form.Label>
        <Form.Control
          type="text"
          className='w-[98%] border border-gray-300 p-1 rounded-lg hover:border-blue-100 hover:border-[2px]'
          value={movie.name}
          onChange={(e) => setMovie({ ...movie, name: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group className='flex flex-col'>
        <Form.Label className='font-bold text-lg'>Duration</Form.Label>
        <Form.Control
          type="text"
          className='w-[98%] border border-gray-300 p-1 rounded-lg hover:border-blue-100 hover:border-[2px]'
          value={movie.duration}
          onChange={(e) => setMovie({ ...movie, duration: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group className='flex flex-col'>
        <Form.Label className='font-bold text-lg'>Type</Form.Label>
        <Form.Control
          type="text"
          className='w-[98%] border border-gray-300 p-1 rounded-lg hover:border-blue-100 hover:border-[2px]'
          value={movie.type}
          onChange={(e) => setMovie({ ...movie, type: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group className='flex flex-col'>
        <Form.Label className='font-bold text-lg'>Trailer</Form.Label>
        <Form.Control
          type="text"
          className='w-[98%] border border-gray-300 p-1 rounded-lg hover:border-blue-100 hover:border-[2px]'
          value={movie.trailer}
          onChange={(e) => setMovie({ ...movie, trailer: e.target.value })}
          required
        />
      </Form.Group>
      <Button type="submit" style={{ marginBottom: '1rem' }} className='bg-green-500 text-white px-3 py-1 rounded-md'>{editingMovie ? 'Save' : 'Add Movie'}</Button>
    </Form>
  );
};

export default MovieForm;
