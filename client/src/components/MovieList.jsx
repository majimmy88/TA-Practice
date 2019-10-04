import React from 'react';
import MovieListItem from './MovieListItem.jsx'

const MovieList = (props) => {
  return (
    <ul>
      {props.movies.map((movie,i) => <MovieListItem movie={movie} key={i} watched={props.watched}/>)}
    </ul>
  )
}

export default MovieList;