import { NavLink } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { MdBookmarkAdd } from "react-icons/md";
import { useContext, useEffect } from "react";
import { BookMarkContext, CartContext } from "../Providers/Context";
import { getCart, getDataFromLocal } from "../Utils";
const Links = () => {
  const { bookMarks, setBookMarks } = useContext(BookMarkContext);
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    setCart(getCart());
    setBookMarks(getDataFromLocal())
    
  }, [setCart, setBookMarks]);
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
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          to="/cart"
        >
          <div className="flex relative">
            <MdShoppingCart size={20} />
            <div className="absolute z-10 -top-2 -right-5 bg-gray-400 px-1 rounded-full">
              <p>{cart.length}</p>
            </div>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          to="/favorites"
        >
          <div className="flex relative">
            <MdBookmarkAdd size={20} />
            <div className="absolute z-10 -top-2 -right-5 bg-gray-400 px-1 rounded-full">
              <p>{bookMarks.length}</p>
            </div>
          </div>
        </NavLink>
      </li>
    </>
  );
};

export default Links;
