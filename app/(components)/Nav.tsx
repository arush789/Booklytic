"use client";
import React, { useState } from "react";
import { Afacad_Flux } from "next/font/google";
import { BiMenuAltRight } from "react-icons/bi";
import "./Nav.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const afacad_Flux = Afacad_Flux({ subsets: ["latin"] });
const Nav = () => {
  const path = usePathname();
  const [menuClass, setMenuClass] = useState("mob-header-menu");

  const { data: session } = useSession({
    required: false,
  });

  function handleMenuToggle() {
    setMenuClass((prevClass) =>
      prevClass === "mob-header-menu"
        ? "mob-header-menu active-menu"
        : "mob-header-menu"
    );
  }

  // console.log(session?.user);

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

        <div className="justify-center flex h-full items-center flex-1 pr-10">
          <ul className="flex space-x-10">
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
          </ul>
        </div>

        <div className="flex justify-end  gap-x-2">
          <div className="items-center flex  ">
            {session ? (
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
          <button onClick={handleMenuToggle}>
            <BiMenuAltRight color="black" className="size-10" />
          </button>
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
