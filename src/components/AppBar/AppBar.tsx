import React from "react";

import Logo from "../../assets/movea1x.png";

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
              <a href="#" className="text-violet-700">
                Home
              </a>
            </li>
            <li>
              <a href="#">Favorites</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppBar;
