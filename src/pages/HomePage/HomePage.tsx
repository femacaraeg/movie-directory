import React, { useState, useEffect, useContext } from "react";

import _ from "lodash";
import { useSearchParams } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";

import MovieCard from "../../components/MovieCard";
import MovieContext from "../../store/movieContext";

import Movie from "../../models/movie";

export default function HomePage() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchParams] = useSearchParams();

  const movieCtx = useContext(MovieContext);

  const query = searchParams.get("search") || "";

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await movieCtx.getItems(query).then((items: Movie[]) => {
        setMovieList(items);
        setIsLoading(false);
      });
    })();
  }, [query]);

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
    </div>
  );
}
