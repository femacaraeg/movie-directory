import React, { useState, useEffect } from "react";

import MovieCard from "../../components/MovieCard";

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);

  const getMovieList = async () => {
    const url =
      "http://www.omdbapi.com/?i=tt3896198&apikey=a5f6f326&s=star wars";

    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovieList(responseJSON.Search);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="container px-12 flex gap-4">
      {movieList.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
        />
      ))}
    </div>
  );
}
