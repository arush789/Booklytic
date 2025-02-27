"use client";
import React, { useState } from "react";
import { Afacad_Flux } from "next/font/google";
import { BiMenuAltRight } from "react-icons/bi";
import "./Nav.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { ImBooks } from "react-icons/im";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import Loading from "./Loading";
import { Skeleton } from "@mui/material";

const afacad_Flux = Afacad_Flux({ subsets: ["latin"] });
const Nav = () => {
  const path = usePathname();
  const [menuClass, setMenuClass] = useState("mob-header-menu");

  const { data: session, status } = useSession();

  const isLoading = status === "loading";

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
        className={`${afacad_Flux.className} h-20 bg-[#FDF7F4] px-10 hidden  md:flex items-center`}
      >
        <div className=" ">
          <h1 className={`${afacad_Flux.className} text-3xl text-black`}>
            Booklytic
          </h1>
        </div>

        <div className="justify-center flex h-full items-center flex-1 ">
          {/* <ul className="flex space-x-10">
            <li className="relative cursor-pointer group text-xl text-black">
              <Link href={"/"}>
                Home
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                {path === "/" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
                )}
              </Link>
            </li>
            <li className="relative cursor-pointer group text-xl text-black">
              <Link href={"/books"}>
                Books
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                {path === "/books" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
                )}
              </Link>
            </li>
            <li className="relative cursor-pointer group text-xl text-black">
              <Link href={"/support"}>
                Support
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                {path === "/support" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
                )}
              </Link>
            </li>
            {session?.user?.role === "admin" && (
              <li className="relative cursor-pointer group text-xl text-black">
                <Link href={"/admin"}>
                  Admin
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                  {path === "/admin" && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
                  )}
                </Link>
              </li>
            )}
          </ul> */}
          <div>
            <div className="py-3 px-2 flex gap-1">
              <div className="group relative px-3 cursor-pointer">
                <Link href="/">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
                    <GoHome size={24} color="black" />
                  </div>
                  <p className="absolute -bottom-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xl text-black font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
                    Home
                  </p>
                </Link>
              </div>

              <div className="group relative px-3 cursor-pointer">
                <Link href="/books">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
                    <ImBooks size={24} color="black" />
                  </div>
                  <p className="absolute -bottom-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xl text-black font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
                    Books
                  </p>
                </Link>
              </div>

              <div className="group relative px-3 cursor-pointer">
                <Link href="/support">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
                    <MdOutlineSupportAgent size={24} color="black" />
                  </div>
                  <p className="absolute -bottom-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xl text-black font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
                    Support
                  </p>
                </Link>
              </div>

              <div className="group relative px-3 cursor-pointer">
                <Link href="/admin/dashboard">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
                    <RiAdminFill size={24} color="black" />
                  </div>
                  <p className="absolute -bottom-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xl text-black font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
                    Admin
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end  gap-x-2">
          <div className="items-center flex  ">
            {isLoading ? (
              <div className="flex w-52 gap-2 items-center">
                <Skeleton variant="circular" width={80} height={60} />
                <div className="flex flex-col w-52">
                  <Skeleton />
                  <Skeleton />
                </div>
              </div>
            ) : session ? (
              <Link href="/api/auth/signout?callbackUrl=/">
                <Image
                  src={session?.user?.image as string}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-gray-500"
                  alt="profile"
                />
              </Link>
            ) : (
              <>
                <Link
                  href="/api/auth/signin"
                  className="bg-[#8EB486] py-2 px-5 rounded-full"
                >
                  <h1 className="text-lg">Log in</h1>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={`${afacad_Flux.className} mob-header md:hidden flex `}>
        <div className=" ">
          <h1 className={`${afacad_Flux.className} text-3xl text-black`}>
            <Link href={"/"}>Booklytic</Link>
          </h1>
        </div>
        <div className="">
          {/* <button onClick={handleMenuToggle}>
            <BiMenuAltRight color="black" className="size-10" />
          </button> */}

          <label className="flex flex-col gap-2 w-8">
            <input
              className="peer hidden"
              type="checkbox"
              onClick={handleMenuToggle}
            />
            <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
            <div className="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45"></div>
            <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
          </label>
        </div>
        <div className={menuClass}>
          <ul>
            <li>
              <Link
                onClick={() => setMenuClass("mob-header-menu")}
                href="/books"
                className="text-black text-2xl "
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuClass("mob-header-menu")}
                href="/support"
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
