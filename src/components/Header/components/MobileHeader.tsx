import { use, useState } from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { Link, NavLink } from "react-router";

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
      {/* ==================== Mobile Header ==================== */}
      <header
        dir="rtl"
        className="
          absolute inset-x-0 top-0 z-40
          flex w-full items-center justify-between
          bg-white px-4 py-2
          dark:bg-zinc-800
          lg:hidden
        "
      >
        {/* Menu button */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleSidebar}
            aria-label="باز کردن منو"
            className="text-2xl text-zinc-700 dark:text-white"
          >
            <SlMenu />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="images/app-logo.png"
              alt="لوگو"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="تغییر تم"
            className="text-xl text-zinc-700 dark:text-white"
          >
            {theme === "dark" ? <MdOutlineLightMode /> : <IoMoonOutline />}
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="سبد خرید"
            className="text-xl text-zinc-700 dark:text-white"
          >
            <FiShoppingCart />
          </Link>
        </div>
      </header>

      {/* ==================== Sidebar ==================== */}

      <div
        className={clsx(
          "fixed inset-y-0 right-0 z-50 w-[280px] overflow-hidden lg:hidden",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <aside
          dir="rtl"
          className={clsx(
            "absolute inset-0 overflow-y-auto",
            "bg-white shadow-2xl",
            "dark:bg-zinc-900",
            "transition-transform duration-300 ease-in-out",
            "grid grid-rows-[auto_1fr_auto]",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Sidebar Header */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-zinc-200
              px-4
              py-4
              dark:border-zinc-700
            "
          >
            {/* Close */}
            <button
              type="button"
              onClick={toggleSidebar}
              aria-label="بستن منو"
              className="text-2xl text-zinc-700 dark:text-white"
            >
              <IoMdClose />
            </button>

            {/* Logo */}
            <Link
              to="/"
              onClick={() => {
                if (isOpen) toggleSidebar();
              }}
              className="flex items-center"
            >
              <img
                src="images/app-logo.png"
                alt="لوگو"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Sidebar Content */}
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-1">
              {list.map((item) => {
                const hasChildren =
                  Array.isArray(item.children) && item.children.length > 0;

                if (!hasChildren) {
                  return (
                    <li key={item.id}>
                      <NavLink
                        to={item.link}
                        onClick={() => {
                          setOpenMenu(null);

                          if (isOpen) {
                            toggleSidebar();
                          }
                        }}
                        className={({ isActive }) =>
                          clsx(
                            "flex items-center justify-between rounded-lg px-3 py-3",
                            "font-danaMedium text-400",
                            "transition-colors",
                            isActive
                              ? "bg-orange-500 text-white"
                              : "text-zinc-700 hover:bg-orange-50 hover:text-orange-500 dark:text-white dark:hover:bg-zinc-800",
                          )
                        }
                      >
                        <span>{item.title}</span>
                      </NavLink>
                    </li>
                  );
                }

                const isMenuOpen = openMenu === item.id;

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => toggleSubMenu(item.id)}
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-lg
                        px-3
                        py-3
                        font-danaMedium
                        text-400
                        text-zinc-700
                        transition-colors
                        hover:bg-orange-50
                        hover:text-orange-500
                        dark:text-white
                        dark:hover:bg-zinc-800
                      "
                    >
                      <span>{item.title}</span>

                      <IoIosArrowDown
                        className={clsx(
                          "text-lg transition-transform duration-300",
                          isMenuOpen && "rotate-180",
                        )}
                      />
                    </button>

                    {/* Submenu */}
                    <div
                      className={clsx(
                        "grid transition-[grid-template-rows] duration-300",
                        isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <ul className="mt-1 flex flex-col gap-1 pr-3">
                          {item.children?.map((child) => (
                            <li key={child.id}>
                              <NavLink
                                to={child.link}
                                onClick={() => {
                                  setOpenMenu(null);

                                  if (isOpen) {
                                    toggleSidebar();
                                  }
                                }}
                                className={({ isActive }) =>
                                  clsx(
                                    "block rounded-lg px-3 py-2",
                                    "font-danaRegular text-300",
                                    "transition-colors",
                                    isActive
                                      ? "bg-orange-500 text-white"
                                      : "text-zinc-600 hover:bg-orange-50 hover:text-orange-500 dark:text-zinc-200 dark:hover:bg-zinc-800",
                                  )
                                }
                              >
                                {child.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Login */}
          <div className="border-t border-zinc-200 px-4 py-4 dark:border-zinc-700">
            <Link
              to="/login"
              onClick={() => {
                if (isOpen) toggleSidebar();
              }}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-orange-500
                px-4
                py-3
                font-danaMedium
                text-400
                text-white
                transition-colors
                hover:bg-orange-600
              "
            >
              <BsBoxArrowInRight />
              <span>ورود / ثبت نام</span>
            </Link>
          </div>
        </aside>
      </div>

      {/* ==================== Backdrop ==================== */}
      {isOpen && (
        <button
          type="button"
          aria-label="بستن منو"
          onClick={toggleSidebar}
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            lg:hidden
          "
        />
      )}
    </>
  );
}

export default MobileHeader;
