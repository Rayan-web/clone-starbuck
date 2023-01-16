import React from "react";
import { Link } from "react-router-dom";
import hotTea from "../assets/images/hotTea.jpeg";
import Data, { data } from "../data/drinks.js";
function HotTeas() {
  return (
    <section>
      <p className="space-x-2">
        <Link to="/menu">
          <span className="text-opacity-70 text-gray-600">Menu</span>
        </Link>
        <span className="text-opacity-95 text-gray-600 font-bold ">
          / Hot Coffees
        </span>
      </p>
      <div className=" space-y-10">
        <h1 className="text-2xl font-extrabold ">Hot Coffees</h1>
        <h1 className="text-2xl font-normal ">Americanos</h1>
        <hr className="border-t-2" />
      </div>
      <div className=" ml-10 mt-5  ">
        <img src={hotTea} className="rounded-full w-36" />
        <h1 className="text-lg font-semibold ">Caffè Americano</h1>
      </div>
      <h1 className="text-xl font-black pt-10 pb-4  ">Brewed Coffees</h1>
      <hr className="border-t-2" />
      <div className="grid grid-cols-12  ">
        {data.map((item) => {
          return (
            <div className="flex  items-center md:col-span-4 lg:col-span-4 col-span-12 ">
              <Link to="#">
                <div className="mt-10 text-center items-center cursor-pointer">
                  <img src={item.img} className="rounded-full w-36" />
                  <h1 className=" font-bold text-lg ml-3  ">{item.name}</h1>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HotTeas;
