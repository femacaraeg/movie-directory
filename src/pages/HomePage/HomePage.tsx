import React, { useState } from "react";

import MovieCard from "../../components/MovieCard";

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);

  return (
    <div className="px-12">
      <MovieCard title="Uncharted" year="2022" />
    </div>
  );
}
