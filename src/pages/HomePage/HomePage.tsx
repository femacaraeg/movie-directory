import React, { useState, useEffect } from "react";

import _ from "lodash";
import { useSearchParams } from "react-router-dom";

import MovieCard from "../../components/MovieCard";

import Movie from "../../models/movie";

export default function HomePage() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const [searchParams] = useSearchParams();

  const query = searchParams.get('search') || '';

  const getMovieList = async (query?: string): Promise<Movie[]> => {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a5f6f326&s=${query}`);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      const deserializeResponse = responseJSON.Search.map((res: Movie) =>
      _.mapKeys(res, (value, key) => _.camelCase(key))
      );

      return deserializeResponse;
    }

    return [];
  };

  useEffect(() => {
    (async () => {
      await getMovieList(query).then((items) => setMovieList(items));
    })();
  }, [query]);

  return (
    <div className="container pl-12 flex  gap-5 flex-wrap">
      {movieList.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
        />
      ))}
    </div>
  );
}
