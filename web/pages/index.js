import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home page</title>

        <link rel="icon" href="/logo.png" />
      </Head>

      <div>
        <Navbar />
        <section className="pt-8 space-y-6">
          <div className=" text-center text-7xl font-bold text-gray-800">
            Make Your Interior <span className="block ">More Minimalistic</span>
          </div>
          <div className="text-center text-xl font-semibold text-gray-600">
            Browse, Choose & Order. Very Simple
          </div>
        </section>
      </div>
    </div>
  );
}
