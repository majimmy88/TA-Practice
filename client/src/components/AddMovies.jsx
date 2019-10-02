import React from 'react';

const AddMovies = (props) => {
  return (
    <div>
      <form onSubmit={props.handleAddMovie}>
        <label>
        <input type='text' name='name' placeholder='Add movie...' value={props.movieValue} onChange={props.handleMovieChange}/>
          </label>
          <input type='submit' value='Add Movie'/>
      </form>
    </div>
  )
}

export default AddMovies