import React from 'react';
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      currentList: this.props.movies
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
    var list = this.props.movies.slice();
    console.log(list)
    var searchValue = this.state.value;
    var newList = list.filter(movie => movie.title.toLowerCase().includes(this.state.value.toLowerCase()));
    this.setState({currentList: newList})
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <SearchBar value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <MovieList movies={this.state.currentList}/>
      </div>
    )
  }
}

export default App;