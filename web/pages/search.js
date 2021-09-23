import { SearchIcon, XIcon } from "@heroicons/react/solid";
import Product from "../components/product/product";
import Image from "next/image";
import { Navbar } from "../components/Navbar/Navbar";
export default function Search() {
  return (
    <div>
      <Navbar />
      <div className="flex pt-24">
        <div className=" w-1/5 fixed block " style={{ minHeight: "90%" }}>
          <div className="px-8   font-semibold text-gray-600">Filter</div>
          <div className="px-10 py-2  ">
            <div className="font-semibold text-gray-700">Categories</div>
            <ul>
              <li className="mt-2 px-2 flex items-center ">
                <input
                  type="radio"
                  className="mr-2"
                  name="category"
                  value="Electronics"
                />
                <span className="text-sm text-gray-500 font-semibold">
                  Electronics
                </span>
              </li>
              <li className="mt-2 px-2">
                <input
                  type="radio"
                  className="mr-2 "
                  name="category"
                  value="Cloth"
                />
                <span className="text-sm text-gray-500 font-semibold">
                  Cloth
                </span>
              </li>
              <li className="mt-2 px-2">
                <input
                  type="radio"
                  // checked
                  className="mr-2 text-gray-900"
                  name="category"
                  value="Car"
                />
                <span className="text-sm text-gray-500 font-semibold">Car</span>
              </li>
              <li className="mt-2 px-2">
                <input
                  type="radio"
                  className="mr-2 "
                  name="category"
                  value="House"
                />
                <span className="text-sm text-gray-500 font-semibold">
                  House
                </span>
              </li>
              <li className="mt-2 px-2">
                <input
                  type="radio"
                  className="mr-2 "
                  name="category"
                  value="Accessory"
                />
                <span className="text-sm text-gray-500 font-semibold">
                  Accessories
                </span>
              </li>
              <li className="mt-2 px-2">
                <input
                  type="radio"
                  className="mr-2 "
                  name="category"
                  value="Shoes"
                />
                <span className="text-sm text-gray-500 font-semibold">
                  Shoes
                </span>
              </li>
              <li className="mt-2 px-2">
                <input
                  type="radio"
                  className="mr-2 "
                  name="category"
                  value="Other"
                />
                <span className="text-sm text-gray-500 font-semibold">
                  Other
                </span>
              </li>
            </ul>
          </div>
          <div className="px-10 py-8  ">
            <div className="font-semibold text-gray-700">Price Range</div>
            <div className="flex mt-4 justify-between">
              <div className="px-7 py-1 bg-gray-100 font-semibold text-gray-600 rounded-3xl">
                MIN
              </div>
              <div className="px-7 py-1 bg-white font-semibold border text-gray-700 rounded-3xl">
                $400
              </div>
            </div>
            <button className="px-2 py-1 w-full bg-primary text-white text-center rounded-3xl mt-3 font-semibold">
              Set Price
            </button>
          </div>
        </div>
        <div className=" w-3/5     px-14 py-2 " style={{ marginLeft: "20%" }}>
          <div className="flex bg-gray-50 px-4 py-2 rounded-xl items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-50 w-full outline-none"
              value=""
              onChange={(e) => console.log("nothing")}
            />
            <SearchIcon
              className="h-5 text-gray-400 mr-4"
              style={{ cursor: "pointer" }}
            />
            <XIcon className="h-5 text-gray-400" />
          </div>
          <div className="my-2 text-sm font-semibold text-gray-300">
            Search Result for ....
          </div>
          <div className="mt-5">
            <button className="px-4 py-1 mx-2  text-gray-500 ">Sort</button>
            <button className="px-5   mx-2  font-semibold py-1 bg-custom text-white rounded-3xl">
              Relevance
            </button>
            <button className="px-5 py-1 mx-2 text-gray-500 rounded-3xl border ">
              Most View
            </button>
            <button className="px-5  py-1 mx-2 text-gray-500 rounded-3xl border ">
              Popular
            </button>
          </div>
          <div>
            <div className="flex flex-wrap space-x-2">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
        <div
          className=" w-1/5 px-4 py-10   fixed right-0  "
          style={{ minHeight: "90%" }}
        >
          {" "}
          <div className="flex">
            <div>
              <div className="flex justify-around">
                <Image src="/intro.png" alt="intro" width={340} height={310} />
              </div>
              <div className="flex justify-between mt-4">
                <div className="rounded-full border px-2 py-2">
                  <Image
                    src="/intro.png"
                    alt="intro"
                    width={340}
                    height={310}
                  />
                </div>

                <div className="rounded-full border px-2 py-2">
                  <Image
                    src="/intro.png"
                    alt="intro"
                    width={340}
                    height={310}
                  />
                </div>

                <div className="rounded-full border px-2 py-2" rounded-lg>
                  <Image
                    src="/intro.png"
                    alt="intro"
                    width={340}
                    height={310}
                  />
                </div>
              </div>{" "}
              <div className="mt-4 text-2xl font-bold text-gray-800">name</div>
              <div className="mt-2 font-semibold text-sm text-gray-500">
                desc
              </div>
              <div className="flex justify-between items-center">
                <div className="mt-4 ">
                  <div className="font-semibold text-xl text-gray-800">
                    Price
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    price
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
