import React from 'react';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false,
    };
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(e){
    console.log(e)
    this.setState(state => ({
      watched: !state.watched
    }));
  }

  render(){
    return (
      <tb>
        <li>
          {this.props.movie.title}
          <button
          onClick={this.toggleButton}
          value={this.state.watched}
          >{this.state.watched ? 'Watched': 'Unwatched'}</button>
        </li>
      </tb>
    )
  }
}

export default MovieListItem;