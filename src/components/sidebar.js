import React from "react";
import { Link, NavLink } from "react-router-dom";
function sidebar() {
  return (
    <div>
      <div className="firstSection col-span-2 lg:block md:block hidden  ">
        <ul className="space-y-5">
          <h1 className="text-xl font-semibold  ">Drinks</h1>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            <Link to="hot-coffee">Hot Coffees</Link>
          </li>

          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            <Link to="hot-teas">Hot Teas</Link>
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Hot Drinks
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Frappuccino® Blended <br /> Beverages
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Cold Coffees
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Iced Teas
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Cold Drinks
          </li>
        </ul>

        <ul className="space-y-5 mt-5">
          <h1 className="text-xl font-semibold ">Food</h1>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Hot Breakfast
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Bakery
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Lunch
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Snacks & Sweets
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Oatmeal & Yogurt
          </li>
        </ul>
        <ul className="space-y-5 mt-5">
          <h1 className="text-xl font-semibold  ">At Home Coffee</h1>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Whole Bean
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            VIA® Instant
          </li>
        </ul>

        <ul className="space-y-5 mt-5">
          <h1 className="text-xl font-semibold ">Merchandise</h1>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Cold Cups
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Tumblers
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">Mugs</li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Water Bottles
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Other
          </li>
        </ul>

        <ul className="space-y-5 mt-5">
          <h1 className="text-xl font-semibold "> Gift Cards</h1>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Happy Birthday
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Thank You
          </li>
          <li className="text-gray-500 text-opacity-75 cursor-pointer">
            Traditional
          </li>
        </ul>
      </div>
    </div>
  );
}

export default sidebar;
