import {
  ArrowLeftIcon,
  DesktopComputerIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import adminRoutes from "./../../pages/[routes]";
export default function Sidebar() {
  const router = useRouter();
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 bg-white md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-md   flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 ">
        <div className="md:flex-col   md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <MenuIcon className="h-5 text-gray-500" />
          </button>
          <Link
            className="md:block cursor-pointer text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            href="/"
          >
            <div className="flex">
              {" "}
              <Image
                src="/logo.png"
                width={60}
                height={40}
                className="cursor-pointer"
              />
            </div>
          </Link>
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">one</li>
            <li className="inline-block relative">two</li>
          </ul>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    href="/"
                  >
                    Notus React
                  </Link>
                </div>{" "}
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50   px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <ArrowLeftIcon className="h-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full  text-sm text-gray-500  uppercase block pt-1 pb-4 no-underline">
              Main
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {adminRoutes.map((el) => (
                <li className="items-center" key={el.label}>
                  <Link href={el.path}>
                    <button
                      className={
                        "text-md  text-sm py-3 px-2  flex space-x-2  font-semibold  items-center w-full " +
                        (router.pathname === el.path
                          ? "bg-blue-50 text-blue-500 hover:bg-blue-100"
                          : "bg-white hover:bg-blue-100")
                      }
                    >
                      <DesktopComputerIcon className="h-5 text-gray-600" />
                      <div>{el.label}</div>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
