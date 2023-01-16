import React from "react";
import "../styles/style.css";
import { Link, NavLink } from "react-router-dom";
import CaffèAmericano from "../assets/images/CaffeAmericano.jpeg";
import FooterModal from "./modals/footerModal";
import { Outlet } from "react-router-dom";
import Hotcoffee from "./hotcoffee";
import Sidebar from "./sidebar";
import Test from "./menuPage";
import { useState } from "react";
import FooterMenu from "./FooterMenu";
import Navbar2 from "./navbar2";

function Menu() {
  const [mount, setMount] = useState(true);
  return (
    <section className="menu  ">
      {/* <Navbar2 /> */}
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
      <div className=" grid grid-cols-12 paddingSides mt-10  ">
        <Sidebar />

        <div className="secoundSection md:col-span-7 lg:col-span-7 col-span-12 ml-10 space-y-5 ">
          <Outlet />
        </div>
      </div>
      <FooterMenu />
    </section>
  );
}

export default Menu;
