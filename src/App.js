import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
];

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg",
  "https://20ui41tp7v127j03rcnp97oh-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/alberto_fullmetal.jpg",
  "https://resizing.flixster.com/V1wwb_8cVenJCCUQ43kYYhYQoMA=/206x305/v1.bTsxMTE3NjY0NjtqOzE3NzY5OzEyMDA7MTQwMDsyMTAw",
  "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711"
];

class App extends Component {
  render() {
    return (
      <div className="App">
       <Movie title={movieTitles[0]} poster={movieImages[0]} />
       <Movie title={movieTitles[1]} poster={movieImages[1]} />
       <Movie title={movieTitles[2]} poster={movieImages[2]} />
       <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    )
  }
}

export default App;
