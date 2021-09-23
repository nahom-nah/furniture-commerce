import { Navbar } from "../components/Navbar/Navbar";
import Head from "next/head";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import Footer from "./../components/Footer/footer";
import RatingDropdown from "../components/dropdown/rating";
import Comment from "../components/comment/comment";
import { useState } from "react";
export default function Item() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const [openComment, setComment] = useState(false);
  const handleCommentOpen = () => {
    setComment(!openComment);
  };
  return (
    <div>
      <Head>
        <title>Item Display page</title>

        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />

      <div className="px-24 mt-16">
        <div className="flex pt-16">
          <div className="w-1/2">
            <div className="flex space-y-5 flex-col items-center justify-center">
              <div className=" px-24 rounded-md  bg-gradient-to-b from-gray-100 gray-50">
                <Image
                  src="/image_o1.png"
                  alt="service section"
                  width={310}
                  height={310}
                />{" "}
              </div>

              <div className="space-x-4  flex">
                <div className="px-2 py-2 rounded-md bg-gray-50">
                  {" "}
                  <Image
                    src="/image_o2.png"
                    alt="service section"
                    width={70}
                    height={80}
                  />
                </div>

                <div className="px-2 py-2 rounded-md bg-gray-50">
                  {" "}
                  <Image
                    src="/image_o3.png"
                    alt="service section"
                    width={70}
                    height={80}
                  />
                </div>

                <div className="px-2 py-2 rounded-md bg-gray-50">
                  {" "}
                  <Image
                    src="/image_o4.png"
                    alt="service section"
                    width={70}
                    height={80}
                  />
                </div>

                <div className="px-2 py-2 rounded-md bg-gray-50">
                  {" "}
                  <Image
                    src="/image_o5.png"
                    alt="service section"
                    width={70}
                    height={80}
                  />
                </div>

                <div className="px-2 py-2 rounded-md bg-gray-50">
                  {" "}
                  <Image
                    src="/side.png"
                    alt="service section"
                    width={70}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="px-10 space-y-5">
              <div className="text-5xl text-gray-800 font-bold">
                Soft W-23 M-ONE
              </div>
              <div className="text-gray-700 h-32 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                diam vitae fermentum enim sit magnis mauris. Egestas ut cursus
                eros et hac. Duis erat elementu. In consequat Duis erat elementu
                dictum et fames pulvinar pharetra. In consequat Duis erat
                elementu dictum et fames pulvinar pharetra
              </div>
              <div className="flex items-center pb-10 justify-between">
                {" "}
                <div className="flex items-center space-x-1">
                  <div className="text-3xl text-gray-800 font-bold">4.0</div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                    value={4.5}
                  />
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  120,000 Birr
                </div>
              </div>
              <hr className="shadow-sm " />
              <div className="flex  justify-between items-center">
                <div className="space-x-4">
                  <select
                    className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 
                bg-white rounded text-sm  focus:outline-none focus:ring  w-28  
                ease-linear transition-all duration-150 shadow-md"
                  >
                    <option className="font-semibold text-gray-500 rounded-md">
                      one
                    </option>
                    <option className="font-semibold text-gray-500 rounded-md">
                      two
                    </option>
                    <option className="font-semibold text-gray-500 rounded-md">
                      three
                    </option>
                  </select>
                  {/* color */}
                  <select
                    className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 
                bg-white rounded text-sm shadow-md focus:outline-none focus:ring  w-28  
                ease-linear transition-all duration-150"
                  >
                    <option className="font-semibold text-gray-500 rounded-md">
                      black
                    </option>
                    <option className="font-semibold text-gray-500 rounded-md">
                      red
                    </option>
                    <option className="font-semibold text-gray-500 rounded-md">
                      yellow
                    </option>
                  </select>
                </div>
                <div className="flex items-center  space-x-2">
                  <button
                    onClick={handleCommentOpen}
                    className="bg-custom text-white font-semibold px-4 rounded-full"
                  >
                    comments
                  </button>

                  <RatingDropdown />
                </div>
              </div>
              <Comment
                open={openComment}
                handleCommentOpen={handleCommentOpen}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
