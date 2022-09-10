import React, { useState, createContext, ReactNode, FC } from "react";

import _ from "lodash";
import Movie from "../models/movie";

type MovieContextObj = {
  favorites: Movie[];
  totalFavorites: number;
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
  getItems: (title: string) => Promise<any>;
  itemIsFavorite: (id: string) => boolean;
};

export const MovieContext = createContext<MovieContextObj>({
  favorites: [],
  totalFavorites: 0,
  addToFavorites: (movie: Movie) => {},
  removeFromFavorites: (movie: Movie) => {},
  getItems: (title: string) => new Promise<any>((resolve, reject) => {}),
  itemIsFavorite: (id: string) => false,
});

export const MovieProvider: FC<{ children?: ReactNode }> = (props) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [error, setError] = useState(null);

  const addFavoriteHandler = (movie: Movie) => {
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
  };

  const removeFavoriteHandler = (movie: Movie) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.imdbId !== movie.imdbId
    );
    setFavorites(newFavorites);
  };

  const getMovieList = async (title: string): Promise<any> => {
    setError(null);

    const url = `http://www.omdbapi.com/?apikey=a5f6f326&s=${title}`;

    try {
      const response = await fetch(url);
      const responseJSON = await response.json();

      if (!response.ok) {
        throw new Error('Something went wrong!');
      } 

      if (responseJSON.Search) {
        const deserializeResponse = responseJSON.Search.map((res: Movie) =>
          _.mapKeys(res, (value, key) => _.camelCase(key))
        );

        return deserializeResponse;
      }

      return [];
    } catch (error: any) {
      setError(error.message);
    }
  };

  const itemIsFavoriteHandler = (id: string) => {
    return favorites.some((item) => item.imdbId === id.toString());
  };

  const contextValue: MovieContextObj = {
    favorites: favorites,
    totalFavorites: favorites.length,
    addToFavorites: addFavoriteHandler,
    removeFromFavorites: removeFavoriteHandler,
    getItems: getMovieList,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
