import { use } from "react";
import { SidebarContext } from "../Header/context/SidebarContext";

function OverLay() {
  const { toggleSidebar } = use(SidebarContext);
  return (
    <div
      onClick={toggleSidebar}
      className="z-20 fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-black/90 to-black/60"
    ></div>
  );
}

export default OverLay;
