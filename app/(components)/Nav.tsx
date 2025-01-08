"use client";
import React, { useState } from "react";
import { Outfit, Afacad_Flux } from "next/font/google";
import { BiMenuAltRight } from "react-icons/bi";
import "./Nav.css";
import Link from "next/link";

const afacad_Flux = Afacad_Flux({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });
const Nav = () => {
  const [activeTab, setActiveTab] = useState("");
  const [menuClass, setMenuClass] = useState("mob-header-menu");

  function handleMenuToggle() {
    setMenuClass((prevClass) =>
      prevClass === "mob-header-menu"
        ? "mob-header-menu active-menu"
        : "mob-header-menu"
    );
  }

  return (
    <>
      <div
        className={`${afacad_Flux.className} h-20 bg-[#FDF7F4] md:flex  mx-10 hidden`}
      >
        <div className="flex items-center ">
          <h1 className={`${afacad_Flux.className} text-3xl text-black`}>
            Booklytic
          </h1>
        </div>
        <div className="flex-1">
          <div className="justify-center flex h-full items-center">
            <ul className="flex space-x-10">
              <li
                className="relative cursor-pointer group text-xl text-black"
                onClick={() => setActiveTab("Books")}
              >
                Books
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                {activeTab === "Books" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
                )}
              </li>
              <li
                className="relative cursor-pointer group text-xl text-black"
                onClick={() => setActiveTab("Support")}
              >
                Support
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                {activeTab === "Support" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end  gap-x-2">
          <div className="items-center flex  ">
            <button className=" bg-[#8EB486] py-2 px-5 rounded-full">
              <h1 className="text-lg">Log in</h1>
            </button>
          </div>
          <div className="items-center flex ">
            <button className=" bg-black py-2 px-5 rounded-full">
              <h1 className="text-lg ">Sign up</h1>
            </button>
          </div>
        </div>
      </div>
      <div className={`${afacad_Flux.className}  mob-header `}>
        <div className=" ">
          <h1 className={`${afacad_Flux.className} text-3xl text-black`}>
            Booklytic
          </h1>
        </div>
        <div className="">
          <button onClick={handleMenuToggle}>
            <BiMenuAltRight color="black" className="size-10" />
          </button>
        </div>
        <div className={menuClass}>
          <ul>
            <li>
              <Link
                onClick={() => setMenuClass("mob-header-menu")}
                href="/RecipePage"
                className="text-black text-2xl "
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuClass("mob-header-menu")}
                href="/Create"
                className="text-black text-2xl"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
