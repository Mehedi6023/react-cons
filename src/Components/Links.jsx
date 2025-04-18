import React from "react";
import { NavLink } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { MdBookmarkAdd } from "react-icons/md";

const Links = () => {
  return (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "text-blue-600" : "")} to="/about">About</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "text-blue-600" : "")} to="/cart">
          <MdShoppingCart size={20} />
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "text-blue-600" : "")} to="/bookmarks">
          <MdBookmarkAdd size={20} />
        </NavLink>
      </li>
    </>
  );
};

export default Links;
