import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { BellIcon, InboxIcon } from "@heroicons/react/outline";
import React from "react";
import Image from "next/image";
export default function AdminNavbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="     w-full   z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-4 px-4">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <MenuIcon className="h-6 text-gray-500" />
            <div className="relative flex items-center bg-blue-50 px-4 rounded-md">
              <input
                type="text"
                placeholder="Search here..."
                className="  py-2 bg-blue-50 text-gray-600  relative     outline-none focus:outline-none focus:ring w-full  "
              />
              <SearchIcon className="h-5 text-gray-500" />
            </div>
          </div>
          {/* For
          m */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"></form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex space-x-3">
            <li>
              <button>
                <BellIcon className="h-6 text-gray-600" />
              </button>
            </li>
            <li>
              <button>
                <InboxIcon className="h-6 text-gray-600" />
              </button>
            </li>
            <li>
              <Image
                src="/propic.jpg"
                alt="propic"
                width={45}
                height={45}
                className="rounded-full"
              />
            </li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
