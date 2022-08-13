import React from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import Logo from "../../assets/movea1x.png";

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
  return (
    <nav className="px-12 py-8 border-gray-200 flex">
      <div className="flex flex-wrap items-center">
        <a href="#" className="flex items-center">
          <img src={Logo} />
        </a>
        <div className="ml-16">
          <ul className="flex gap-8">
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="favorites">Favorites</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppBar;
