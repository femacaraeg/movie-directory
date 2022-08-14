import React from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";

interface Movie {
  title: string;
  year?: string;
  poster: string;
}

export default function MovieCard(props: Movie) {
  const { title, year, poster } = props;

  return (
    <div className="rounded-lg w-80 hover:bg-gray-700">
      <div className="rounded-t-lg">
        <img
          src={poster}
          alt="movie"
          className="object-cove w-full h-1/2 rounded-t-lg"
        />
      </div>
      <div className="gap-1 p-2 flex rounded-b-lg h-14 justify-between">
        <div className="w-3/4">
          <p className="text-sm text-white">
            <span className="font-bold">{title}</span>
            &nbsp;({year})
          </p>
        </div>
        <button>
          <AddCircleIcon
            sx={{ color: "white" }}
            className="hover: cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
