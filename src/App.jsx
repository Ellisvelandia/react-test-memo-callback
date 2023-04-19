import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import { useMovies } from "./hooks/useMovies";

const App = () => {
  const { movies: mappedMovies } = useMovies();

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
        <MovieList movies={mappedMovies} />
  
      </main>
    </div>
  );
};

export default App;
