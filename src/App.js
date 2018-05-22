import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillRceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {

  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "matrix",
            poster: "https://ia.media-imdb.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://20ui41tp7v127j03rcnp97oh-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/alberto_fullmetal.jpg"
          },
          {
            title: "Oldboy",
            poster: "https://resizing.flixster.com/V1wwb_8cVenJCCUQ43kYYhYQoMA=/206x305/v1.bTsxMTE3NjY0NjtqOzE3NzY5OzEyMDA7MTQwMDsyMTAw"
          },
          {
            title: "Star Wars",
            poster: "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711"
          },
          {
            title: "Trainspotting",
            poster: "http://barkerhost.com/wp-content/uploads/sites/4/2016/02/trainspotting.jpg"
          }
        ]
      })
    }, 5000)
  }

_renderMovies = () => {
  const movies = this.state.movies.map((movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index} />
  })
  return movies
}

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;