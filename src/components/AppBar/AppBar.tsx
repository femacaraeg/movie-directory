import React, { useContext } from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import Logo from "../../assets/movea1x.png";
import SearchBox from "../SearchBox";
import MovieContext from "../../store/movieContext";

function CustomLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={`${match ? "font-bold" : "font-norm"} hover:font-semibold`}
      {...props}
    >
      {children}
    </Link>
  );
}

function AppBar() {
  const movieCtx = useContext(MovieContext);

  const totalFavorites = movieCtx.totalFavorites;

  return (
    <nav className="px-12 py-8 border-gray-200 flex">
      <div className="flex items-center w-full">
        <a href="#" className="flex items-center">
          <img src={Logo} />
        </a>
        <div className="flex justify-between w-full items-center">
          <div className="ml-16">
            <ul className="flex gap-8">
              <li>
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="favorites">Favorites {totalFavorites !== 0 ? (`(${totalFavorites})`) : ''}</CustomLink>
              </li>
            </ul>
          </div>
          <SearchBox />
        </div>

      </div>
    </nav>
  );
}

export default AppBar;
