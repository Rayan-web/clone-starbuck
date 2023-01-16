import React, { useState } from "react";
import starrewardes from "../assets/images/starBucksRewards.jpg";
import backit from "../assets/images/backit.jpg";
import coffie from "../assets/images/coffie.jpg";
import juice from "../assets/images/juice.jpg";
import NavMoblie from "./navMoblie";
import "../styles/style.css";
import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className=" relative ">
        <nav className="flex justify-around text-[#282828] z-20 shadow-md   py-5 ">
          <div className=" leftSide flex  basis-1/2 items-center space-x-5 ">
            <svg
              className="lg:w-14 md:w-14 w-11 cursor-pointer  "
              height="100%"
              viewBox="0 0 62 62"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="31" cy="31" fill="#fff" r="30.002"></circle>
              <path
                d="M34.017 13.969c-.263-.047-1.531-.26-3.017-.26s-2.754.212-3.017.26c-.151.027-.209-.121-.094-.207.104-.077 3.11-2.365 3.11-2.365l3.109 2.365c.117.086.06.234-.091.207zm-5.194 14.856s-.159.057-.201.197c.63.484 1.064 1.585 2.378 1.585s1.748-1.101 2.377-1.585c-.041-.141-.2-.197-.2-.197s-.823.194-2.177.194-2.177-.194-2.177-.194zm2.177-1.853c-.365 0-.445-.138-.694-.137-.237.001-.697.19-.797.363.007.088.039.167.103.237.532.08.772.376 1.389.376s.856-.296 1.389-.376c.062-.07.096-.148.103-.237-.099-.173-.56-.361-.798-.363-.25-.002-.331.137-.695.137zm29.956 5.673c-.038.717-.102 1.428-.19 2.131-3.396.562-4.61-2.464-8.089-2.312.208.738.377 1.49.507 2.258 2.869-.002 4.025 2.68 7.217 2.285-.168.82-.37 1.629-.603 2.426-2.524.248-3.413-2.26-6.334-2.191.024.416.037.836.037 1.26l-.012.701 5.672 2.164c-.297.807-.629 1.596-.991 2.369-1.705-.094-2.293-2.281-4.887-2.107-.078.561-.177 1.115-.295 1.662 2.253-.158 2.738 1.916 4.352 2.084-.411.75-.854 1.48-1.325 2.191-.956-.512-1.785-2.057-3.598-2.152.186-.574.349-1.156.487-1.748-1.608 0-3.447-.627-4.989-2.031.5-2.846-3.917-5.744-3.917-7.828 0-2.264 1.145-3.517 1.145-6.569 0-2.265-1.1-4.722-2.759-6.401-.321-.326-.65-.59-1.028-.827 1.524 1.886 2.694 4.122 2.694 6.712 0 2.874-1.337 4.391-1.337 7.044 0 2.652 3.88 4.947 3.88 7.682 0 1.076-.344 2.127-1.478 4.191 1.742 1.74 4.011 2.689 5.475 2.689.475 0 .73-.145.9-.518.146-.322.285-.648.416-.977 1.577.061 2.299 1.494 3.172 2.066-.479.643-.982 1.264-1.509 1.865-.585-.648-1.371-1.738-2.522-2.041-.206.4-.424.795-.653 1.182.991.27 1.669 1.27 2.194 1.928-.566.586-1.155 1.148-1.768 1.688-.383-.596-.979-1.352-1.647-1.76-.247.334-.504.66-.769.977.568.385 1.069 1.078 1.396 1.643-.708.568-1.44 1.107-2.198 1.611-.374-3.047-4.533-5.135-3.412-8.67-.368.623-.807 1.402-.807 2.34 0 2.559 2.726 4.59 2.943 7.133-.565.338-1.143.656-1.732.957-.098-2.795-2.984-5.854-2.984-8.148 0-2.561 3.354-5.133 3.354-8.156 0-3.025-3.87-5.119-3.87-7.775 0-2.654 1.646-4.181 1.646-7.583 0-2.492-1.184-5.014-3.013-6.625-.324-.286-.643-.513-1.026-.712 1.725 2.069 2.725 3.946 2.725 6.794 0 3.199-1.886 4.975-1.886 8.107 0 3.133 3.798 4.875 3.798 7.795s-3.535 5.381-3.535 8.381c0 2.729 3.116 5.453 3.162 8.691-.681.297-1.375.568-2.081.814.396-3.271-3.111-6.645-3.111-9.314 0-2.918 3.667-5.426 3.667-8.572 0-3.148-3.728-4.611-3.728-7.842 0-3.229 2.287-5.017 2.287-8.585 0-2.781-1.373-5.282-3.379-6.832l-.127-.096c-.189-.14-.345.029-.211.195 1.42 1.773 2.179 3.566 2.179 6.221 0 3.264-2.627 5.916-2.627 9.078 0 3.732 3.528 4.799 3.528 7.861 0 3.061-3.783 5.51-3.783 8.76 0 3.014 3.58 6.359 2.966 9.838-.718.186-1.446.348-2.185.48.672-4.332-2.84-7.443-2.84-10.277 0-3.068 3.918-5.803 3.918-8.801 0-2.828-2.812-3.752-3.182-6.645-.051-.395-.368-.688-.805-.615-.571.104-1.303.48-2.453.48s-1.882-.377-2.454-.48c-.436-.072-.753.221-.804.615-.369 2.893-3.183 3.816-3.183 6.645 0 2.998 3.919 5.732 3.919 8.801 0 2.834-3.512 5.945-2.841 10.277-.738-.133-1.467-.295-2.185-.48-.614-3.479 2.967-6.824 2.967-9.838 0-3.25-3.784-5.699-3.784-8.76 0-3.062 3.529-4.129 3.529-7.861 0-3.162-2.628-5.813-2.628-9.078 0-2.654.759-4.447 2.18-6.221.133-.166-.022-.335-.212-.195l-.126.096c-2.004 1.546-3.376 4.047-3.376 6.828 0 3.568 2.287 5.356 2.287 8.585 0 3.23-3.728 4.693-3.728 7.842 0 3.146 3.667 5.654 3.667 8.572 0 2.67-3.507 6.043-3.11 9.314-.707-.246-1.401-.518-2.082-.814.047-3.238 3.161-5.963 3.161-8.691 0-3-3.533-5.461-3.533-8.381s3.796-4.662 3.796-7.795c0-3.132-1.885-4.908-1.885-8.107 0-2.848.999-4.725 2.724-6.794-.384.199-.702.426-1.025.712-1.829 1.611-3.012 4.133-3.012 6.625 0 3.402 1.646 4.929 1.646 7.583 0 2.656-3.87 4.75-3.87 7.775 0 3.023 3.354 5.596 3.354 8.156 0 2.295-2.888 5.354-2.985 8.148-.589-.301-1.167-.619-1.732-.957.218-2.543 2.943-4.574 2.943-7.133 0-.938-.438-1.717-.807-2.34 1.121 3.535-3.038 5.623-3.412 8.67-.758-.504-1.491-1.043-2.198-1.611.326-.564.827-1.258 1.396-1.643-.266-.316-.522-.643-.769-.977-.669.408-1.266 1.164-1.648 1.76-.611-.539-1.201-1.102-1.767-1.688.525-.658 1.203-1.658 2.194-1.928-.229-.387-.447-.781-.653-1.182-1.151.303-1.938 1.393-2.522 2.041-.527-.602-1.031-1.223-1.509-1.865.873-.572 1.595-2.006 3.171-2.066.132.328.271.654.417.977.17.373.426.518.9.518 1.464 0 3.732-.949 5.475-2.689-1.134-2.064-1.478-3.115-1.478-4.191 0-2.734 3.88-5.029 3.88-7.682 0-2.653-1.337-4.17-1.337-7.044 0-2.59 1.17-4.826 2.694-6.712-.378.237-.707.501-1.028.827-1.659 1.68-2.759 4.136-2.759 6.401 0 3.052 1.146 4.305 1.146 6.569 0 2.084-4.418 4.982-3.918 7.828-1.542 1.404-3.381 2.031-4.99 2.031.14.592.303 1.174.487 1.748-1.812.096-2.641 1.641-3.598 2.152-.472-.711-.914-1.441-1.325-2.191 1.613-.168 2.099-2.242 4.353-2.084-.118-.547-.218-1.102-.296-1.662-2.594-.174-3.182 2.014-4.887 2.107-.362-.773-.694-1.562-.991-2.369l5.673-2.164-.012-.701c0-.424.013-.844.036-1.26-2.921-.068-3.81 2.439-6.334 2.191-.232-.797-.435-1.605-.602-2.426 3.19.395 4.347-2.287 7.217-2.285.13-.768.299-1.52.506-2.258-3.479-.151-4.693 2.875-8.088 2.312-.089-.703-.152-1.414-.19-2.131 3.947.441 5.427-2.804 9.021-2.407.339-.859.733-1.69 1.177-2.49-4.506-.792-6.036 2.976-10.23 2.397.453-16.171 13.706-29.143 29.989-29.143s29.536 12.972 29.989 29.147c-4.195.579-5.725-3.188-10.23-2.397.443.8.837 1.631 1.177 2.49 3.592-.398 5.072 2.848 9.02 2.407zm-42.852-12.583c-2.209-.903-4.883-.695-7.167.772-.354-2.125-1.507-4.013-3.149-5.152-.227-.157-.463-.008-.442.255.347 4.49-2.278 8.389-5.506 11.816 3.327 1 6.159-3.284 10.474-1.789 1.548-2.305 3.514-4.308 5.79-5.902zm12.896-2.716c-2.785 0-5.118 1.575-5.729 3.61-.047.156.017.257.197.176.501-.225 1.071-.333 1.69-.333 1.136 0 2.137.417 2.729 1.143.262.864.284 2.115-.012 2.829-.468-.105-.636-.467-1.093-.467s-.811.321-1.586.321c-.774 0-.865-.366-1.374-.366-.599 0-.709.617-.709 1.313 0 3.103 2.852 7.373 5.886 7.373 3.033 0 5.885-4.27 5.885-7.373 0-.696-.143-1.292-.769-1.373-.312.225-.599.426-1.313.426-.775 0-.989-.321-1.445-.321-.551 0-.496 1.162-1.15 1.227-.436-1.048-.457-2.392-.095-3.589.593-.726 1.593-1.143 2.729-1.143.619 0 1.193.109 1.689.333.181.081.244-.021.197-.176-.61-2.035-2.942-3.61-5.727-3.61zm4.434 4.452c-.668 0-1.451.205-1.943.753-.051.149-.051.371.021.519 1.211-.415 2.279-.431 2.795.146.275-.25.363-.475.363-.736 0-.403-.41-.682-1.236-.682zm-9.741 1.418c.584-.585 1.815-.56 3.094-.088.056-.636-1.083-1.331-2.221-1.331-.827 0-1.236.279-1.236.683 0 .261.088.487.363.736zm19.194-10.504c-2.199.157-4.109.912-5.654 2.17.656-1.86 1.489-3.487 2.545-5.064-2.8.297-5.141 1.321-6.849 3.071l-1.337-3.505 2.968-2.621-3.974-.281-1.586-3.696-1.587 3.696-3.974.281 2.968 2.621-1.336 3.505c-1.709-1.75-4.05-2.774-6.848-3.071 1.054 1.578 1.887 3.205 2.543 5.064-1.544-1.259-3.454-2.014-5.653-2.17 1.319 1.696 2.488 3.504 3.354 5.448.098.219.308.291.535.178 3.012-1.497 6.406-2.339 9.997-2.339s6.984.843 9.998 2.339c.227.113.437.041.534-.178.867-1.944 2.036-3.752 3.356-5.448zm4.801 13.254c4.313-1.495 7.146 2.788 10.473 1.789-3.228-3.427-5.852-7.326-5.505-11.816.021-.263-.216-.413-.442-.255-1.643 1.139-2.796 3.027-3.149 5.152-2.285-1.467-4.958-1.676-7.167-.772 2.273 1.592 4.24 3.595 5.79 5.902z"
                fill="#006341"
              ></path>
              <g fill="#006341">
                <path d="M53.595 57.01h-1.526v4.105h-.547v-4.105h-1.522v-.51h3.595v.51zM54.236 56.5h.811l1.57 3.618h.011l1.574-3.618h.798v4.615h-.551v-3.869h-.012l-1.653 3.869h-.333l-1.659-3.869h-.011v3.869h-.545v-4.615z"></path>
              </g>
            </svg>

            <ul className="md:flex lg:flex space-x-5 font-black  tracking-wide text-[#282828] hidden md:block lg:block   ">
              <NavLink to="/menu">
                <li className="hover:text-secondary cursor-pointer">MENU</li>
              </NavLink>
              <li className="hover:text-secondary cursor-pointer">REWORDS</li>
              <li className="hover:text-secondary cursor-pointer">
                GIFT CARDS
              </li>
            </ul>
          </div>
          <div className=" hidden md:block lg:block rightSide flex-grow-0 lg:flex md:flex space-x-5 font-semibold ">
            <a
              href=""
              className="find store flex  items-center cursor-pointer icon "
            >
              <svg className="w-6 mr-1  " fill="#282828" viewBox="0 0 24 24">
                <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path>
              </svg>
              Find a store
            </a>
            <ul className="flex items-center space-x-5 ">
              <li className=" transition ease-in-out hover:bg-gray-100	 cursor-pointer ml-5 rounded-full px-3 border-black py-1  borderWidth ">
                Sign in
              </li>
              <li className=" transition ease-in-out hover:bg-opacity-75 cursor-pointer rounded-full px-3  bg-black  py-1  borderWidth">
                <span className="text-white text-base ">Join now</span>
              </li>
            </ul>
          </div>
          <svg
            class={`${
              open ? " hidden " : " block w-6 h-6 md:hidden lg:hidden mt-2"
            }`}
            onClick={() => setOpen(!open)}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            class={`${
              open ? "block w-6 h-6 md:hidden lg:hidden mt-2" : "hidden "
            }`}
            onClick={() => setOpen(false)}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </nav>
        {open && <NavMoblie />}
      </section>
      <div className="" onClick={() => setOpen(false)}>
        <section className="paddingSides mt-8  ">
          {/* first hero */}
          <div className="lg:flex md:flex ">
            <img
              src={starrewardes}
              className=" md:w-1/2 lg:w-1/2 object-fill  "
              alt=""
            />

            <div className="  md:w-1/2 lg:w-1/2 w-full pb-5 bg-[#1E3932] text-white   ">
              <center>
                <h1 className="font-normal text-xl pt-10   tracking-tight">
                  <span className="mt-10 lg:text-2xl md:text-xl text-lg ">
                    Summer is brighter with free treats.*
                  </span>
                </h1>
                <p className="mt-14  transition ease-in-out hover:bg-opacity-10 hover:bg-white	 cursor-pointer py-1 px-5 rounded-full  border-white w-fit   borderWidth ">
                  <span className="  ">Join Starbucks® Rewards</span>
                </p>
              </center>
            </div>
          </div>

          {/* secound hero */}

          <div className="lg:flex md:flex mt-10 lg:flex-row  md:flex-row  flex flex-col-reverse  ">
            <div className="  md:w-1/2 lg:w-1/2 w-full pb-5  bg-[#FAAA5A] text-white   ">
              <center className="   ">
                <h1 className="font-black text-3xl lg:pt-40 md:pt-20  tracking-wide">
                  <span className=" lg:text-5xl text-[#1E3932] md:text-4xl text-2xl  ">
                    Back-to-school <br /> smiles
                  </span>
                </h1>
                <p className="text-[#1E3932]  pb-10 font-medium lg:text-2xl  md:text-xl text-lg">
                  A Starbucks eGift makes an A+ treat for <br /> students,
                  teachers and school support staff.
                </p>
                <a className="   transition ease-in-out hover:bg-opacity-10 hover:bg-white  cursor-pointer py-2 px-5 rounded-full  border-[#1E3932] w-fit   borderWidth ">
                  <span className=" text-[#1E3932] font-medium	  ">
                    Send an eGift
                  </span>
                </a>
              </center>
            </div>
            <img
              src={backit}
              className=" md:w-1/2 lg:w-1/2 object-fill  "
              alt=""
            />
          </div>
          {/* theared hero */}
          <div className="lg:flex md:flex mt-10    ">
            <img
              src={juice}
              className=" md:w-1/2 lg:w-1/2 object-fill  "
              alt=""
            />
            <div className="  md:w-1/2 lg:w-1/2 w-full pb-5  bg-[#FA91AA] text-white   ">
              <center className="   ">
                <h1 className="font-black text-3xl lg:pt-40 md:pt-20 pb-10 tracking-wide">
                  <span className=" lg:text-5xl text-[#1E3932] md:text-4xl text-2xl  ">
                    Summer’s brightest <br /> new drinks
                  </span>
                </h1>
                <p className="text-[#1E3932]  pb-10 font-medium lg:text-2xl  md:text-xl text-lg">
                  Introducing the Pineapple Passionfruit <br /> Starbucks
                  Refreshers® beverage and the <br /> Starbucks® Paradise Drink
                  with
                  <br /> creamy coconutmilk.
                </p>
                <a className="   transition ease-in-out hover:bg-opacity-10 hover:bg-white  cursor-pointer py-2 px-5 rounded-full  border-[#1E3932] w-fit   borderWidth ">
                  <span className=" text-[#1E3932] font-medium	  ">
                    Learn more
                  </span>
                </a>
              </center>
            </div>
          </div>
          {/* fourth hero */}
          <div className="lg:flex md:flex mt-10 lg:flex-row  md:flex-row  flex flex-col-reverse  ">
            <div className="  md:w-1/2 lg:w-1/2 w-full pb-5  bg-[#FAAA5A] text-white   ">
              <center className="   ">
                <h1 className="font-black text-3xl lg:pt-40 md:pt-20  pb-10 tracking-wide">
                  <span className=" lg:text-5xl text-white  md:text-4xl text-lg   ">
                    Cold brew for two
                  </span>
                </h1>
                <p className="text-white  pb-10 font-medium lg:text-2xl  md:text-xl text-lg">
                  Try the new Chocolate Cream Cold Brew with <br /> silky,
                  chocolaty cold foam. Or go for a Vanilla <br /> Sweet Cream
                  Cold Brew with house-made <br />
                  vanilla-flavored sweet cream.
                </p>
                <a className="   transition ease-in-out hover:bg-opacity-10 hover:bg-white  cursor-pointer py-2 px-5 rounded-full  border-white w-fit   borderWidth ">
                  <span className=" text-white  font-medium	  ">Learn more</span>
                </a>
              </center>
            </div>
            <img
              src={coffie}
              className=" md:w-1/2 lg:w-1/2 object-fill  "
              alt=""
            />
          </div>
        </section>
        <div className="info text-center mt-10">
          <h1 className="text-lg">
            *Starbucks Rewards is available at participating stores. Some
            restrictions apply. For full program <br /> details, visit
            <span className="underline hover:no-underline cursor-pointer ">
              starbucks.com/rewards
            </span>
          </h1>
        </div>
        <footer className="shadow-2xl mt-5   ">
          <div className="lg:flex lg:justify-evenly md:flex md:justify-evenly flex-wrap flex ">
            <ul className="space-y-5 mb-5 mt-5">
              <h1 className="text-lg  ">About Us</h1>
              <li className="text-base  text-gray-500">Our Company</li>
              <li className="text-base  text-gray-500">Our Coffee</li>
              <li className="text-base  text-gray-500">Stories and News</li>
              <li className="text-base  text-gray-500">Investor Relations</li>
              <li className="text-base  text-gray-500">Customer Service</li>
            </ul>
            <ul className="space-y-5 mb-5 mt-5">
              <h1 className="text-lg  ">Careers Careers</h1>
              <li className="text-base  text-gray-500">
                Inclusion, Diversity, and Equity
              </li>
              <li className="text-base  text-gray-500">
                College Achievement Plan
              </li>
              <li className="text-base  text-gray-500">Alumni Community</li>
              <li className="text-base  text-gray-500">U.S. Careers</li>
              <li className="text-base  text-gray-500">Customer Service</li>
            </ul>
            <ul className="space-y-5 mb-5 mt-5">
              <h1 className="text-lg  ">Social Impact</h1>
              <li className="text-base  text-gray-500">People</li>
              <li className="text-base  text-gray-500">Planet</li>
              <li className="text-base  text-gray-500">
                Environmental and Social Impact Reporting
              </li>
            </ul>
            <ul className="space-y-5 mb-5 mt-5">
              <h1 className="text-lg  ">For Business Partners</h1>
              <li className="text-base  text-gray-500">
                Landlord Support Center
              </li>
              <li className="text-base  text-gray-500">Suppliers</li>
              <li className="text-base  text-gray-500">
                Corporate Gift Card Sales
              </li>
              <li className="text-base  text-gray-500">
                Office and Foodservice Coffee
              </li>
            </ul>
            <ul className="space-y-5 mb-5 mt-5">
              <h1 className="text-lg  ">Order and Pickup</h1>
              <li className="text-base  text-gray-500">Order on the App</li>
              <li className="text-base  text-gray-500">Order on the Web</li>
              <li className="text-base  text-gray-500">Delivery</li>
              <li className="text-base  text-gray-500">
                Order and Pickup Options
              </li>
              <li className="text-base  text-gray-500">
                Explore and Find Coffee for Home
              </li>
            </ul>
          </div>
          <hr className="border-t-2" />
          <div className="flex   md:ml-28 lg:ml-28 mt-5">
            <svg
              className="w-14 h-10  "
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
            </svg>
            <svg
              className="w-14 h-10  "
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
            </svg>
            <svg
              className="w-14 h-10  "
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
            </svg>
            <svg
              className="w-14 h-10  "
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
            </svg>
          </div>
          <div className=" ml-5 md:ml-28 lg:ml-28 mt-5">
            <ul className=" md:flex lg:flex md:space-x-2 lg:space-x-2">
              <li className="cursor-pointer">Privacy Policy </li>
              <li>|</li>
              <li className="cursor-pointer">Terms of Use</li>
              <li className="">|</li>
              <li className="cursor-pointer">CA Supply Chain Act</li>
              <li className="">|</li>
              <li className="cursor-pointer">Cookie Preferences</li>
            </ul>
          </div>
          <h1 className="md:ml-28 ml-5 lg:ml-28 mt-5 text-gray-500 ">
            © 2022 Starbucks Coffee Company. All rights reserved.
          </h1>
        </footer>
      </div>
    </>
  );
}

export default Home;
