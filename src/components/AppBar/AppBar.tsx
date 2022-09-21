import React, { useContext } from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
    </Menu>
  );

  const totalFavorites = movieCtx.totalFavorites;

  return (
    <nav className="px-12 py-8 border-gray-200 flex">
      <div className="flex items-center w-full">
        <a href="#" className="flex items-center">
          <img src={Logo} />
        </a>
        <div className="flex w-full justify-between items-center">
          <div className="ml-16">
            <ul className="flex gap-8">
              <li>
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="favorites">
                  Favorites {totalFavorites !== 0 ? `(${totalFavorites})` : ""}
                </CustomLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <SearchBox />
            {/* Account */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle className="text-white" />
            </IconButton>
          </div>
          {renderMenu}
        </div>
      </div>
    </nav>
  );
}

export default AppBar;
