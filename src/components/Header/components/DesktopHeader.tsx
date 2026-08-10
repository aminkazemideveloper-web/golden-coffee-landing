import { use } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { clsx } from "clsx";

import ShoppingCart from "../../shoppingcart/ShoppingCart";
import type { MenuItemType } from "../Header";
import { DarkModeContext } from "../../../context/DarkModeContext";

type Props = {
  list: MenuItemType[];
};

function DesktopHeader({ list }: Props) {
  const { theme, toggleTheme } = use(DarkModeContext);

  return (
    <header
      dir="rtl"
      className="
    hidden h-16 w-full items-center
    border-b border-zinc-200/70
    bg-white
    lg:flex
  "
    >
      <div className="container mx-auto flex h-full items-center justify-between px-8">
        {/* Logo */}
        <Link to="/" className="w-28 shrink-0">
          <img src="/images/svgs/logo-type.svg" alt="Logo" className="w-full" />
        </Link>

        {/* Navigation */}
        <nav className="flex h-full items-center">
          <ul
            className="
    flex h-full items-center gap-7
    font-danaMedium text-lg tracking-tight
    text-zinc-700
  "
          >
            {list.map((item) => (
              <li
                key={item.id}
                className="group relative flex h-full items-center"
              >
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    clsx(
                      "flex h-full items-center gap-1.5 whitespace-nowrap",
                      "transition-colors duration-200",
                      "hover:text-orange-500",
                      isActive && "text-orange-500",
                    )
                  }
                >
                  <span>{item.title}</span>

                  {item.children && (
                    <IoIosArrowDown className="text-sm transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </NavLink>

                {/* Dropdown */}
                {item.children && (
                  <ul
                    className="
                      invisible absolute right-0 top-full z-50
                      w-56 translate-y-2
                      rounded-xl border-t-[3px] border-orange-300
                      bg-white p-2
                      opacity-0 shadow-xl
                      transition-all duration-200
                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      dark:bg-zinc-800
                    "
                  >
                    {item.children.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          to={sub.link}
                          className="
                            block rounded-lg px-3 py-2.5
                            font-danaRegular text-sm
                            text-gray-700
                            transition-colors duration-200
                            hover:bg-orange-300/15
                            hover:text-orange-500
                            dark:text-gray-200
                            dark:hover:bg-orange-300/10
                          "
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {/* Cart */}
          <div className="group relative flex h-10 w-10 items-center justify-center">
            <button
              type="button"
              aria-label="سبد خرید"
              className="
    text-zinc-600
    transition-colors duration-200
    hover:text-orange-500
  "
            >
              <FiShoppingCart className="h-5 w-5" />
            </button>

            <div
              className="
                invisible absolute left-0 top-full z-50
                translate-y-2 pt-3
                opacity-0
                transition-all duration-200
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <ShoppingCart />
            </div>
          </div>

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="تغییر تم"
            className="
    text-zinc-600
    transition-colors duration-200
    hover:text-orange-500
  "
          >
            {theme === "dark" ? (
              <IoMoonOutline className="h-5 w-5" />
            ) : (
              <MdOutlineLightMode className="h-5 w-5" />
            )}
          </button>

          {/* Divider */}
          <span className="h-4 w-px bg-orange-300" />

          {/* Login / Register */}
          <Link
            to="/login"
            className="
    flex items-center gap-3.5
    text-orange-500
    transition-colors duration-200
    hover:text-orange-600
  "
          >
            <BsBoxArrowInRight className="h-5 w-5" />

            <span className="flex items-center gap-2 text-lg">
              <span>ورود</span>

              <span className="h-4 w-px bg-orange-200" />

              <span>ثبت نام</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default DesktopHeader;
