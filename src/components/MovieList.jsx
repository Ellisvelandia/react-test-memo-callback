import React from "react";

const MovieList = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} loading="lazy" />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? (
    <MovieList movies={movies} />
  ) : (
    <p>No se encontro el resultado de la busqueda</p>
  );
}
