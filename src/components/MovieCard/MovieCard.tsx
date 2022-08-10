import React from "react";

import movieImg from "../../assets/uncharted.jpg";

interface Movie {
  title: string;
  year?: string;
}

export default function MovieCard(props: Movie) {
  const { title, year } = props;

  return (
    <div className="rounded-lg">
      {/* <div className="bg-[url(../../assets/uncharted.jpg)]" /> */}
      <img src={movieImg} />
      <div className="flex gap-1 bg-white rounded-b-lg">
        <p className="">{title}</p>
        <p className="text-white">({year})</p>
      </div>
    </div>
  );
}
