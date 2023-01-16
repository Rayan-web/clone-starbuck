import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import Morenav from "./morenav";
function NavMoblie() {
  const [moreMenu, setMoreMenu] = useState(false);
  return (
    <div className="mobile font-light   font-soDo text-[#282828] ">
      {moreMenu && <Morenav setMoreMenu={setMoreMenu} />}
      <div className="ml-7">
        <ul className="space-y-8 mt-10">
          <div className="flex justify-between   items-center">
            <li>
              <Link to="/menu">Menu</Link>
            </li>

            <svg
              class="w-6 h-6"
              onClick={() => setMoreMenu(!moreMenu)}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>

          <li>
            <Link to="/rewords">Rewords</Link>
          </li>
          <li>
            <Link to="/giftcards">Gift cards</Link>
          </li>
        </ul>
        <hr className="mt-5 border-t-2 rounded-full mr-5" />
        <ul className="flex here md:space-x-5 lg:space-x-5 mt-5 ">
          <li className="  transition ease-in-out hover:bg-gray-100	 cursor-pointer text-sm  rounded-full px-4 border-black py-1  borderWidth ">
            Sign in
          </li>
          <li className=" transition ease-in-out hover:bg-opacity-75 cursor-pointer rounded-full px-3  bg-black  py-1   borderWidth">
            <span className="text-white text-sm ">Join now</span>
          </li>
        </ul>
        <a
          href=""
          className="find store mt-5 flex  items-center cursor-pointer"
        >
          <svg className="w-6 mr-1  " fill="#282828" viewBox="0 0 24 24">
            <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path>
          </svg>
          Find a store
        </a>
      </div>
    </div>
  );
}

export default NavMoblie;
