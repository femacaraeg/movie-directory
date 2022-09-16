import React, { useState, useEffect } from "react";

import _ from "lodash";
import { useSearchParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import MovieCard from "../../components/MovieCard";
import useHttp from "../../hooks/useHttp";

import Movie from "../../models/movie";

export default function HomePage() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const { isLoading, error, sendRequest: fetchMovies } = useHttp();

  const [searchParams] = useSearchParams();

  const query = searchParams.get("search") || "";

  useEffect(() => {
    const transformMovies = (moviesObj: any) => {
      if (moviesObj.Search) {
        const deserializeResponse = moviesObj.Search.map((res: Movie) =>
          _.mapKeys(res, (value, key) => _.camelCase(key))
        );

        setMovieList(deserializeResponse);
      }
    };

    fetchMovies(
      { url: `https://www.omdbapi.com/?apikey=a5f6f326&s=${query}` },
      transformMovies
    );
  }, [fetchMovies, query]);

  return (
    <div className="container mx-auto px-8 flex gap-4 flex-wrap">
      {!isLoading && movieList.length > 0 && (
        <>
          {movieList.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </>
      )}
      {!isLoading && movieList.length === 0 && (
        <p className="text-white">Found no movies.</p>
      )}
      {isLoading && (
        <div
          className="w-full m-auto flex justify-center"
          style={{ justifyContent: "center" }}
        >
          <CircularProgress />
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
