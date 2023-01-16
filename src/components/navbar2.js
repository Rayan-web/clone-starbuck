import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar2() {
  return (
    <div>
      <nav className=" hidden lg:block md:block  sticky top-0 z-50  bg-gray-200 p-3  border-b-gray-600 w-full borderWidth border-opacity-20    ">
        <ul className="flex items-center space-x-10 paddingSides text-sm ">
          <li className="cursor-pointer">
            <NavLink to="/menu">All products</NavLink>
          </li>

          <li className="cursor-pointer">
            <NavLink to="/">Featured</NavLink>
          </li>

          <li className="cursor-pointer">
            <NavLink to="previous">Previous Orders</NavLink>
          </li>

          <li className="cursor-pointer">
            <NavLink to="/">Favorite Products</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar2;
