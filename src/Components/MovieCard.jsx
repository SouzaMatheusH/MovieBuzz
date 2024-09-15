import { Link } from 'react-router-dom';

const imageUrl = import.meta.env.VITE_IMG;

import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className='movie-card'>
      <Link to={`/moviedesc/${movie.id}`}><img src={imageUrl + movie.backdrop_path} alt={movie.title} /></Link>
    </div>
  )
}

export default MovieCard
