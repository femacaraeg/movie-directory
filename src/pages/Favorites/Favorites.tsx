import React, { useContext } from 'react';

import MovieContext from '../../store/movieContext';

function FavoritesPage() {
  const movieCtx = useContext(MovieContext);

  const totalFavorites = movieCtx.totalFavorites;

  console.log(totalFavorites);
  
  return (
    <>
      <p>Favorites</p>
    </>
  );
}

export default FavoritesPage;

