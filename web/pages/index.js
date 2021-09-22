import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import React, { useRef, useEffect, useState } from "react";
import {
  GiftIcon,
  ClockIcon,
  UserIcon,
  PlayIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import ItemOverview from "../components/cards/ItemOverviewCard";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Footer from "../components/Footer/footer";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmFob20xMDEiLCJhIjoiY2tzZTdrbjFmMHYxZTJwbzRjd3Q4ZXdlMSJ9.KTWO2a04dzlg509DVib2Ag";
export default function Home() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(39.27);
  const [lat, setLat] = useState(8.52);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div>
      <Head>
        <title>Home page</title>

        <link rel="icon" href="/logo.png" />
      </Head>

      <div>
        <Navbar />
        <section
          className="pt-8 space-y-6"
          style={{
            backgroundImage: "url(bg-t3.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% ",
          }}
        >
          <div className=" text-center text-7xl font-bold text-gray-800">
            Make Your Interior <span className="block ">More Minimalistic</span>
          </div>
          <div className="text-center text-xl font-semibold text-gray-600">
            Browse, Choose & Order. Very Simple
          </div>
          <div className="px-24 flex justify-center py-20">
            <Image src="/intro.png" alt="intro" width={340} height={310} />
          </div>
        </section>
        <div className="px-24 py-28 flex">
          <div className="w-1/2 space-y-8 ">
            <div className="flex space-x-2">
              <div className="w-1/2 space-x-2 space-y-2">
                <GiftIcon className="h-10 text-blue-400" />
                <div className="font-bold text-gray-800 text-xl">
                  Fast & Free Shipping
                </div>
                <div className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.t
                  fames pulvinar pharetra.
                </div>
              </div>
              <div className="w-1/2 space-x-2  space-y-2">
                <ClockIcon className="h-10 text-red-400" />
                <div className="font-bold text-gray-800 text-xl">
                  Fast & Free Shipping
                </div>
                <div className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. fames
                  pulvinar pharetra.
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-1/2 space-x-2 space-y-2">
                <GiftIcon className="h-10 text-blue-400" />
                <div className="font-bold text-gray-800 text-xl">
                  Fast & Free Shipping
                </div>
                <div className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.t
                  fames pulvinar pharetra.
                </div>
              </div>
              <div className="w-1/2 space-x-2  space-y-2">
                <UserIcon className="h-10 text-yellow-400" />
                <div className="font-bold text-gray-800 text-xl">
                  Fast & Free Shipping
                </div>
                <div className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. fames
                  pulvinar pharetra.
                </div>
              </div>
            </div>{" "}
            <button className="px-8 py-2 bg-custom text-white font-semibold rounded-full">
              Know More
            </button>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <Image src="/over.png" alt="side" width={440} height={410} />
          </div>
        </div>
        <div className="px-24 py-10 flex flex-col items-center space-y-8 ">
          <div className="flex items-center flex-col space-y-8">
            <div className="text-5xl font-bold text-gray-800 text-center w-2/3">
              A Huge Collection of Furniture Products for Your Interior
            </div>
            <div className="w-2/3 text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              diam vitae fermentum enim sit magnis mauris. Egestas ut cursus
              eros et hac. Duis erat elementu. In consequat Duis erat elementu
              dictum et fames pulvinar pharetra.
            </div>
          </div>
          <div className="flex space-x-2 justify-between w-3/4">
            <button className="font-semibold text-white bg-gray-800  px-5 py-1 rounded-full ">
              Mattress
            </button>
            <button className="font-semibold text-gray-600 px-5 py-1 rounded-full hover:bg-gray-100 bg-gray-50">
              Bedroom
            </button>
            <button className="font-semibold text-gray-600 px-5 py-1 rounded-full hover:bg-gray-100 bg-gray-50">
              Living Room
            </button>
            <button className="font-semibold text-gray-600 px-5 py-1 rounded-full hover:bg-gray-100 bg-gray-50">
              Dining
            </button>
            <button className="font-semibold text-gray-600 px-5 py-1 rounded-full hover:bg-gray-100 bg-gray-50">
              Home Office
            </button>
            <button className="font-semibold text-gray-600 px-5 py-1 rounded-full hover:bg-gray-100 bg-gray-50">
              Office
            </button>
          </div>
          <div className="flex flex-wrap justify-around py-4">
            <ItemOverview image="/side.png" />{" "}
            <ItemOverview image="/image_o1.png" />
            <ItemOverview image="/right.png" />
            <ItemOverview image="/image_o5.png" />
            <ItemOverview image="/image_o2.png" />
            <ItemOverview image="/image_o4.png" />
            <ItemOverview image="/image_o3.png" />
            <ItemOverview image="/side.png" />
          </div>
        </div>
        <div className="px-24 flex py-24">
          <div className="w-1/2 flex justify-center">
            <Image
              src="/service.png"
              alt="service section"
              width={470}
              height={410}
            />
          </div>
          <div className="w-1/2 space-y-6 py-10">
            <div className="text-5xl font-bold text-gray-800">
              Our Services & Benefits
            </div>
            <div className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              diam vitae fermentum enim sit magnis mauris. Egestas ut cursus
              eros et hac. Duis erat elementu. In consequat Duis erat elementu
              dictum et fames pulvinar pharetra.
            </div>
            <div className="flex justify-between px-20 list-disc ">
              <ul>
                <li className="text-gray-500 font-semibold"> Lorem ipsum</li>
                <li className="text-gray-500 font-semibold"> Lorem ipsum</li>
                <li className="text-gray-500 font-semibold"> Lorem ipsum</li>
              </ul>
            </div>
            <button className="px-8 py-2 flex space-x-2 items-center bg-custom text-white font-semibold rounded-full">
              <PlayIcon className="h-6" />
              <span>Watch Intro</span>
            </button>
          </div>
        </div>
        <div className="px-24">
          <div
            style={{ backgroundImage: "url(comments.png)" }}
            className="px-16 py-20 flex"
          >
            <div className="w-1/2 space-y-6">
              <div className="text-4xl text-gray-50 font-bold">
                Our Service's Review
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/propic.jpg"
                    alt="review"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <div>
                    <div className=" text-gray-100 text-xl font-bold">
                      Mr. Nahom Balcha
                    </div>
                    <div className=" text-gray-100 font-thin">
                      Owner of NFB software PLC.
                    </div>
                  </div>
                </div>
                <div className="text-gray-100  px-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  diam vitae fermentum enim sit magnis mauris. Egestas ut cursus
                  eros et hac. Duis erat elementu. In consequat Duis erat
                  elementu dictum et fames pulvinar pharetra.
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <Image src="/comp.png" alt="review" width={450} height={230} />
            </div>
          </div>
        </div>
        <div className=" py-10 space-y-10">
          <div className=" flex justify-center space-y-8 items-center flex-col">
            <div className="text-5xl font-bold text-gray-800 text-center w-3/4  ">
              Contact Us
            </div>
            <div className="text-center text-gray-500 w-2/4 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              diam vitae fermentum enim sit magnis mauris. Egestas ut cursus
              eros et hac. Duis erat elementu. In consequat Duis erat elementu
              dictum et fames pulvinar pharetra.
            </div>
          </div>

          <div ref={mapContainer} className="map-container" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
