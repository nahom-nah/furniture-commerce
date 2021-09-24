import { Route } from "next/router";
import AdminNavbar from "../components/Navbar/AdminNavbar";
import HeaderStats from "../components/Headers/HeaderStats";
import Sidebar from "../components/Sidebar/Sidebar";
export default function Layout({ children }) {
  return (
    <>
      <div>
        <Sidebar />
        <div className=" relative md:ml-64 ">
          <AdminNavbar />

          <div className="px-4 bg-adminbg mt-1  md:px-5 block mx-auto w-full ">
            <HeaderStats />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
