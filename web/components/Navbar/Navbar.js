import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import Link from "next/link";
export function Navbar() {
  return (
    <div className="px-24 pt-5 z-50 flex top-0 w-full bg-white justify-between items-center fixed ">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={78}
          height={50}
          className="cursor-pointer"
        />
      </Link>

      <div className="flex space-x-2 justify-between">
        <button className="font-semibold text-gray-600 px-5 py-1 rounded-full hover:bg-gray-50">
          Mattress
        </button>
        <button className="font-semibold text-gray-600 px-5 py-1 rounded-full hover:bg-gray-50">
          Bedroom
        </button>
        <button className="font-semibold text-gray-600 px-5 py-1 rounded-full hover:bg-gray-50">
          Living Room
        </button>
        <button className="font-semibold text-gray-600 px-5 py-1 rounded-full hover:bg-gray-50">
          Dining
        </button>
        <button className="font-semibold text-gray-600 px-5 py-1 rounded-full hover:bg-gray-50">
          Home Office
        </button>
        <button className="font-semibold text-gray-600 px-5 py-1 rounded-full hover:bg-gray-50">
          Office
        </button>
      </div>
      <div className="flex space-x-2">
        <div className="px-2 py-2 bg-gray-50 rounded-full">
          <SearchIcon className="h-5 text-gray-800" />
        </div>
        <div className="px-2 py-2 bg-gray-50 rounded-full">
          <ShoppingCartIcon className="h-5 text-gray-800" />
        </div>
      </div>
    </div>
  );
}
