import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Movie from './Movie';
import './App.css';
import Header from './Header';
import Like from './Like';

const FEATURED_API = 'https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&language=en-US&page=1'
// const IMG_API = ''
// const SEARCH_API = ''
// const API_KEY = 'd0f5f2e135336200362af8a1a73acb17'

function App() {

  const [movies, setMovies] = useState([]);


  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results)
      });
  }, []);

  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Header />
            <div className="movie__container">
              {movies.length > 0 && movies.map((movie) => (
                <Movie key={movie.id} {...movie} />
              ))}
            </div>
          </Route>

          <Route exact path="/like">
            <Header />
            <Like />
          </Route>
        </Switch>
      </>
    </Router>

  );
}

export default App;
