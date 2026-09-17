import { use } from "react";
import OverLay from "../OverLay/OverLay";
import DesktopHeader from "./components/DesktopHeader";
import MobileHeader from "./components/MobileHeader";
import { SidebarContext } from "./context/SidebarContext";
import SidebarProvider from "./context/SidebarProvider";


export type MenuItemType = {
  id: number;
  title: string;
  link: string;
  children?: {
    id: number;
    title: string;
    link: string;
  }[];
};

const menuItems: MenuItemType[] = [
  {
    id: 1,
    title: "صفحه اصلی",
    link: "/",
  },
  {
    id: 2,
    title: "فروشگاه",
    link: "/shop",
    children: [
      {
        id: 21,
        title: "قهوه ویژه",
        link: "/shop/special",
      },
      {
        id: 22,
        title: "ویژه در سطح جهانی",
        link: "/shop/world-class",
      },
      {
        id: 23,
        title: "قهوه درجه یک",
        link: "/shop/premium",
      },
    ],
  },
  {
    id: 3,
    title: "دیکشنری",
    link: "/dictionary",
  },
  {
    id: 4,
    title: "بلاگ",
    link: "/blog",
  },
  {
    id: 5,
    title: "درباره ما",
    link: "/about-us",
  },
  {
    id: 6,
    title: "تماس با ما",
    link: "/contact-us",
  },
];

function Header() {
  return (
    <SidebarProvider>
      <HeaderComponents />
    </SidebarProvider>
  );
}

export default Header;

const HeaderComponents = () => {
  const { isOpen } = use(SidebarContext);

  return (
    <>
      <DesktopHeader list={menuItems} />
      <MobileHeader list={menuItems} />
      {isOpen && <OverLay />}
    </>
  );
};
