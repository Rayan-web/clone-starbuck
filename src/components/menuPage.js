import React from "react";
import { Link } from "react-router-dom";
import Data, { data } from "../data/drinks.js";
function MenuPage() {
  return (
    <div>
      <h1 className="text-2xl mt-4 font-extrabold">Menu</h1>
      <h1 className="text-2xl my-4  font-bold">Drinks</h1>
      <hr className="border-t-2" />
      <div className="grid grid-cols-8  ">
        {data.map((item) => {
          return (
            <div className="flex  items-center md:col-span-4 lg:col-span-4 col-span-12 ">
              <Link to="hot-coffee">
                <div className="mt-10 flex items-center cursor-pointer">
                  <img src={item.img} className="rounded-full w-24" />
                  <h1 className=" font-bold text-lg ml-3  ">{item.name}</h1>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuPage;
