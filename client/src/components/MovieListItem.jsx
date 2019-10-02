import React from 'react';

const MovieListItem = (props) => {
  return (
    <tb>
      <li>
        {props.movie.title}
      </li>
    </tb>
  )
}

export default MovieListItem;