import React, { useContext } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import Movie from "../../models/movie";
import MovieContext from '../../store/movieContext';

export default function MovieCard({ movie: movieProp }: any) {
  const { poster, imdbId } = movieProp;

  const favoritesCtx = useContext(MovieContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(imdbId);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFromFavorites(movieProp);
    } else {
      favoritesCtx.addToFavorites(movieProp);
    }
  };

  return (
    <div className="rounded-lg hover:cursor-pointer image-container">
       <img
          src={poster}
          alt="movie"
          className="object-cove rounded-lg h-72 w-52"
        />
        <div className="overlay text-white" onClick={toggleFavoriteStatusHandler}>
          { 
            itemIsFavorite ? (
              <p>Remove from Favorites</p>
            ) : (
              <p>Add to Favorites</p>
            )
          }
        </div>
    </div>
  );
}
