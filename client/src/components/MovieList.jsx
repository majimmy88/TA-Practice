import React from 'react';
import MovieListItem from './MovieListItem.jsx'

const MovieList = (props) => {
  return (
    <ul>
      {props.movies.map(movie => <MovieListItem movie={movie}/>)}
    </ul>
  )
}

export default MovieList;