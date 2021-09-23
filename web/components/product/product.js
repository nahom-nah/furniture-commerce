import Image from "next/image";
import Link from "next/link";

export default function Product(props) {
  return (
    <div className=" w-56 mt-6 hover:shadow-sm  flex justify-center">
      <div>
        <Image src="/intro.png" alt="intro" width={340} height={310} />
        <div className="px-4 py-2 space-y-2 ">
          <div className="text-lg font-bold text-center text-gray-800">
            product one
          </div>
          <div className="text-sm font-semibold text-center text-gray-500">
            product one description
          </div>
          <div className="text-sm font-semibold text-center text-gray-800">
            sofa
          </div>{" "}
          <Link href="/item">
            <div className="flex items-center justify-center">
              <button className="bg-custom  text-white font-semibold rounded-3xl border px-10 ">
                Detail
              </button>
            </div>
          </Link>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
}
