import React, { useContext } from "react";

import MovieContext from "../../store/movieContext";
import MovieCard from "../../components/MovieCard";

function FavoritesPage() {
  const movieCtx = useContext(MovieContext);

  const totalFavorites = movieCtx.totalFavorites;

  const favorites = movieCtx.favorites;

  return (
    <div className="container mx-auto px-8 flex gap-4 flex-wrap">
      {totalFavorites === 0 ? (
        <p className="m-auto text-white w-full flex justify-center">No Favorite Movies Added.</p>
      ) : (
        <>
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbId} movie={movie} />
          ))}
        </>
      )}
    </div>
  );
}

export default FavoritesPage;
