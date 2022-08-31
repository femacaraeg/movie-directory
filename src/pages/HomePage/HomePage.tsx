import React, { useState, useEffect, useContext } from "react";

import _ from "lodash";
import { useSearchParams } from "react-router-dom";

import MovieCard from "../../components/MovieCard";
import MovieContext from "../../store/movieContext";

import Movie from "../../models/movie";

export default function HomePage() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const [searchParams] = useSearchParams();

  const movieCtx = useContext(MovieContext);

  const query = searchParams.get("search") || "";

  useEffect(() => {
    (async () => {
      await movieCtx
        .getItems(query)
        .then((items: Movie[]) => setMovieList(items));
    })();
  }, [query]);

  return (
    <div className="container mx-auto px-8 flex gap-4 flex-wrap">
      {movieList.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}
