import React, { useState, createContext, ReactNode, FC } from "react";

import _ from 'lodash';
import Movie from "../models/movie";

type MovieContextObj = {
  favorites: Movie[];
  totalFavorites: number;
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
  // TODO: improve and update the reutrn promise type of getItems
  getItems: (title: string) => any;
  itemIsFavorite: (id: string) => boolean;
};

export const MovieContext = createContext<MovieContextObj>({
  favorites: [],
  totalFavorites: 0,
  addToFavorites: (movie: Movie) => {},
  removeFromFavorites: (movie: Movie) => {},
  getItems: (title: string) => [],
  itemIsFavorite: (id: string) => false,
});

export const MovieProvider: FC<{children?: ReactNode}> = (props) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const addFavoriteHandler = (movie: Movie) => {
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
  };

  const removeFavoriteHandler = (movie: Movie) => {
    const newFavorites = favorites.filter((favorite) => favorite.imdbId !== movie.imdbId);
    setFavorites(newFavorites);
  };

  const getMovieList = async(title: string) => {
    const url =
    `http://www.omdbapi.com/?i=tt3896198&apikey=a5f6f326&s=${title}`;

    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      const deserializeResponse = responseJSON.Search.map((res: Movie) =>
      _.mapKeys(res, (value, key) => _.camelCase(key))
      );

      return deserializeResponse;
    }

    return [];
  };

  const itemIsFavoriteHandler = (id: string) => {
    return favorites.some(item => item.imdbId === id.toString());
  };

  const contextValue: MovieContextObj = {
    favorites: favorites,
    totalFavorites: favorites.length,
    addToFavorites: addFavoriteHandler,
    removeFromFavorites: removeFavoriteHandler,
    getItems: getMovieList,
    itemIsFavorite: itemIsFavoriteHandler,
  }

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  )
};

export default MovieContext;