import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen">
        <Header/>
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💗 &copy; All Rights Reserved by Team 7
      </div>
    </div>
  );
};

export default Applayout;


