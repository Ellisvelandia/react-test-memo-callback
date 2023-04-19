import React from "react";
import responseMovies from "./mocks/with-results.json";
import "./App.css";

const App = () => {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;
  return (
    <div className="page">
      <header>
        <form className="form">
          <input
            type="text"
            placeholder="Search Avengers, Star Wars, The matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {hasMovies ? (
          <ul className="movies">
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} loading="lazy" />
              </li>
            ))}
          </ul>
        ) : (
          <div></div>
        )}
      </main>
    </div>
  );
};

export default App;
