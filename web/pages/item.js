import { Navbar } from "../components/Navbar/Navbar";
import Head from "next/head";
export default function Item() {
  return (
    <div>
      <Head>
        <title>Item Display page</title>

        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />

      <div className="px-24">id</div>
    </div>
  );
}
