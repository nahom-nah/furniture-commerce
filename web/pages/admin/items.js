import AddItem from "../../components/add/additem";
import Layout from "../../layouts/AdminLayout";
import {
  PlusIcon,
  FilterIcon,
  CogIcon,
  ArrowDownIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import Image from "next/image";
export default function AdminItem() {
  let color;
  const [hide, setHide] = useState(true);
  const handleHide = () => {
    setHide(!hide);
  };
  return (
    <div>
      <Layout>
        <AddItem hide={hide} handleHide={handleHide} />
        <div className="px-12">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">Users</div>
            <button
              onClick={handleHide}
              className="bg-blue-600 flex justify-around items-center space-x-4 text-white font-semibold px-6 rounded-full py-2"
            >
              <PlusIcon className="h-5 text-white" />
              Add New Items
            </button>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button className="px-2 py-1 flex space-x-2 items-center border shadow bg-white">
              <FilterIcon className="h-5" />
              <div className="font-semibold text-gray-700 ">Fillters</div>
            </button>
            <button className="px-2 py-1 flex space-x-2 items-center border shadow bg-white">
              <CogIcon className="h-5" />
              <ArrowDownIcon className="h-3" />
            </button>
          </div>
          <div className="mt-8">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Item Name
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Price
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Quantity
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Images
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Completion
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <Image
                      src="/propic.jpg"
                      className="h-12 w-12 bg-white rounded-full border"
                      alt="..."
                      width={100}
                      height={100}
                    />
                    <span
                      className={
                        "ml-3 font-bold " +
                        +(color === "light"
                          ? "text-blueGray-600"
                          : "text-white")
                      }
                    >
                      Argon Design System
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    $2,500 USD
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-circle text-orange-500 mr-2"></i>{" "}
                    pending
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                      <Image
                        src="/propic.jpg"
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/propic.jpg"
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/propic.jpg"
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/propic.jpg"
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                        width={100}
                        height={100}
                      />
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">60%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                          <div
                            style={{ width: "60%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    dd
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  );
}
