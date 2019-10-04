import React from 'react';
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'
import AddMovies from './AddMovies.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      movieValue:'',
      currentList: [],
      watched: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleMovieChange = this.handleMovieChange.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    var list = this.state.currentList;
    var searchValue = this.state.value;
    var newList = list.filter(movie => movie.title.toLowerCase().includes(this.state.value.toLowerCase()));
    this.setState({currentList: newList})
  }

  handleMovieChange(e) {
    this.setState({movieValue: e.target.value})
  }

  handleAddMovie(e) {
    e.preventDefault()
    var movieObj = {title: this.state.movieValue, watched: this.state.watched}
    var newList = this.state.currentList.slice()
    newList.push(movieObj)
    this.setState({currentList: newList})
   }

   toggleButton(e){
    this.setState(state => ({
      watched: !state.watched
    }));
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <SearchBar
        value={this.state.value}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>

        <AddMovies
        movieValue={this.movieValue}
        handleMovieChange={this.handleMovieChange}
        handleAddMovie={this.handleAddMovie}/>

        <MovieList
        movies={this.state.currentList}
        watched={this.state.watched}
        />
      </div>
    )
  }
}

export default App;