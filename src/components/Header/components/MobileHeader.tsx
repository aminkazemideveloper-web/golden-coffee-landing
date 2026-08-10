import { use, useState } from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import { clsx } from "clsx";

import { DarkModeContext } from "../../../context/DarkModeContext";
import type { MenuItemType } from "../Header";
import { SidebarContext } from "../context/SidebarContext";

type Props = {
  list: MenuItemType[];
};

function MobileHeader({ list }: Props) {
  const { theme, toggleTheme } = use(DarkModeContext);
  const { isOpen, toggleSidebar } = use(SidebarContext);

  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleSubMenu = (id: number) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* =====================================================
          Mobile Top Header
      ====================================================== */}
      <header
        dir="rtl"
        className="
          absolute inset-x-0 top-0 z-40
          flex h-16 items-center justify-between
          px-4
          sm:px-6
          lg:hidden
        "
      >
        {/* Shopping Cart */}
        <button
          type="button"
          aria-label="سبد خرید"
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full
            text-orange-200
            transition-colors duration-200
            hover:bg-white/10
          "
        >
          <FiShoppingCart className="h-5 w-5" />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="absolute left-1/2 w-28 -translate-x-1/2 sm:w-32"
        >
          <img src="/images/svgs/logo-type.svg" alt="لوگو" className="w-full" />
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label="باز کردن منو"
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full
            text-orange-200
            transition-colors duration-200
            hover:bg-white/10
          "
        >
          <SlMenu className="h-6 w-6" />
        </button>
      </header>

      {/* =====================================================
          Mobile Sidebar
      ====================================================== */}
      <aside
        dir="rtl"
        className={clsx(
          "fixed right-0 top-0 z-50 h-dvh w-[280px]",
          "overflow-y-auto",
          "bg-white shadow-2xl",
          "dark:bg-zinc-900",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Sidebar Header */}
        <div
          className="
            flex h-20 items-center justify-between
            border-b border-gray-100
            px-5
            dark:border-zinc-800
          "
        >
          {/* Logo */}
          <Link to="/" onClick={toggleSidebar} className="w-28">
            <img
              src="/images/svgs/logo-type.svg"
              alt="لوگو"
              className="w-full"
            />
          </Link>

          {/* Close */}
          <button
            type="button"
            onClick={toggleSidebar}
            aria-label="بستن منو"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              text-gray-500
              transition-colors duration-200
              hover:bg-orange-100
              hover:text-orange-500
              dark:text-gray-300
              dark:hover:bg-orange-300/10
            "
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>

        {/* =================================================
            Navigation
        ================================================== */}
        <nav className="px-4 py-6">
          <ul className="flex flex-col gap-2">
            {list.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isSubMenuOpen = openMenu === item.id;

              return (
                <li key={item.id}>
                  <div className="flex flex-col">
                    {/* Main Menu Item */}
                    <div className="flex items-center">
                      <NavLink
                        to={item.link}
                        onClick={() => {
                          if (!hasChildren) {
                            toggleSidebar();
                          }
                        }}
                        className={({ isActive }) =>
                          clsx(
                            "flex min-h-11 flex-1 items-center",
                            "rounded-xl px-3",
                            "font-danaMedium text-[15px]",
                            "text-gray-700",
                            "transition-colors duration-200",
                            "hover:bg-orange-300/10",
                            "hover:text-orange-500",
                            "dark:text-gray-200",
                            "dark:hover:bg-orange-300/10",
                            isActive && "nav-active",
                          )
                        }
                      >
                        {item.title}
                      </NavLink>

                      {/* Submenu Toggle */}
                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() => toggleSubMenu(item.id)}
                          aria-label={`باز کردن ${item.title}`}
                          className="
                            flex h-10 w-10 shrink-0
                            items-center justify-center
                            rounded-xl
                            text-gray-500
                            transition-colors duration-200
                            hover:bg-orange-300/10
                            hover:text-orange-500
                            dark:text-gray-300
                          "
                        >
                          <IoIosArrowDown
                            className={clsx(
                              "transition-transform duration-300",
                              isSubMenuOpen && "rotate-180",
                            )}
                          />
                        </button>
                      )}
                    </div>

                    {/* =================================================
                        Sub Menu
                    ================================================== */}
                    {hasChildren && (
                      <div
                        className={clsx(
                          "grid transition-all duration-300",
                          isSubMenuOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <ul className="overflow-hidden">
                          <div
                            className="
                              mr-4 mt-2
                              border-r border-orange-200
                              pr-3
                              dark:border-orange-300/30
                            "
                          >
                            {item.children?.map((sub: MenuItemType) => (
                              <li key={sub.id}>
                                <Link
                                  to="#"
                                  onClick={toggleSidebar}
                                  className="
                                    block rounded-lg
                                    px-3 py-2.5
                                    font-danaRegular text-sm
                                    text-gray-500
                                    transition-colors duration-200
                                    hover:bg-orange-300/10
                                    hover:text-orange-500
                                    dark:text-gray-300
                                  "
                                >
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </div>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Divider */}
        <div className="mx-5 h-px bg-gray-100 dark:bg-zinc-800" />

        {/* =================================================
            Actions
        ================================================== */}
        <div className="px-5 py-6">
          <ul className="flex flex-col gap-2">
            {/* Login / Register */}
            <li>
              <Link
                to="/login"
                onClick={toggleSidebar}
                className="
                  flex min-h-11 items-center gap-3
                  rounded-xl px-3
                  text-orange-400
                  transition-colors duration-200
                  hover:bg-orange-300/10
                "
              >
                <BsBoxArrowInRight className="h-5 w-5" />

                <span
                  className="
                    flex items-center gap-2
                    font-danaRegular text-sm
                  "
                >
                  <span>ورود</span>

                  <span className="h-4 w-px bg-orange-300" />

                  <span>ثبت نام</span>
                </span>
              </Link>
            </li>

            {/* Theme */}
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                className="
                  flex min-h-11 w-full
                  items-center gap-3
                  rounded-xl px-3
                  text-orange-400
                  transition-colors duration-200
                  hover:bg-orange-300/10
                "
              >
                {theme === "dark" ? (
                  <>
                    <IoMoonOutline className="h-5 w-5" />

                    <span className="font-danaRegular text-sm">تم تیره</span>
                  </>
                ) : (
                  <>
                    <MdOutlineLightMode className="h-5 w-5" />

                    <span className="font-danaRegular text-sm">تم روشن</span>
                  </>
                )}
              </button>
            </li>

            {/* Shopping Cart */}
            <li>
              <button
                type="button"
                className="
                  flex min-h-11 w-full
                  items-center gap-3
                  rounded-xl px-3
                  text-orange-400
                  transition-colors duration-200
                  hover:bg-orange-300/10
                "
              >
                <FiShoppingCart className="h-5 w-5" />

                <span className="font-danaRegular text-sm">سبد خرید</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default MobileHeader;
