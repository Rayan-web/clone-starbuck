import React from "react";
import { useState } from "react";
import FooterModal from "./modals/footerModal";
function FooterMenu() {
  return (
    <>
      <div className="lg:grid md:grid grid-cols-12 flex  justify-items-center w-full  h-24 sticky bottom-0 z-50 bg-[#1E3932] ">
        <div className="py-2  flex  basis-full col-span-6 ">
          <div className="text-white basis-full ">
            <h1 className="">For item availability</h1>
            <h1 className="text-lg">Choose a store</h1>
            <hr className="border-t-2 " />
          </div>
          <div className="md:ml-10 lg:ml-10  mt-3">
            <svg
              class="w-6 h-6  "
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <div className="col-span-6">
          <svg
            class="w-20 h-20"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default FooterMenu;
