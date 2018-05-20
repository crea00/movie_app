import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
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
  } 
];

class App extends Component {
  render() {
    return (
      <div className="App">
       {movies.map(movie => {
         return <Movie title={movie.title} poster={movie.poster} />
       })}
      </div>
    );
  }
}

export default App;
