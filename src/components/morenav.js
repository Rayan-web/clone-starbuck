import React from "react";

function Morenav({ setMoreMenu }) {
  return (
    <div className="mobilee   ">
      <div className="flex justify-between items-center bg-gray-100 py-4 ">
        <svg
          onClick={() => setMoreMenu(false)}
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <h1>Menu</h1>
        <div className=""></div>
      </div>
      <ul className="ml-5 space-y-5">
        <li className="mt-2">All products</li>
        <li>Featured</li>
        <li>Previous</li>
        <li>Favorites</li>
      </ul>
    </div>
  );
}

export default Morenav;
