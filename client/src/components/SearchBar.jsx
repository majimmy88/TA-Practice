import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          <input type='text' name='name' placeholder='Search...' value={props.value} onChange={props.handleChange}/>
        </label>
        <input type='submit' value='Submit'/>
    </form>
    </div>
  )
}

export default SearchBar;