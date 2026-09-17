import { NavLink } from "react-router";
import styles from "./FooterHeader.module.css";
import clsx from "clsx";
import { BiHome, BiShoppingBag, BiUser } from "react-icons/bi";

function FooterHeader() {
  return (
    <div className={clsx(styles["footer-header"])}>
      <ul>
        <li>
          <NavLink
            to="/home"
            end
            className={({ isActive }) =>
              clsx(
                styles.link,
                " h-full hover:text-orange-500",
                isActive && styles.active,
              )
            }
          >
            <span className={styles.icon}>
              <BiHome />
            </span>
            <span>خانه</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth/login"
            className={({ isActive }) =>
              clsx(
                styles.link,
                " h-full hover:text-orange-500",
                isActive && styles.active,
              )
            }
          >
            <span className={styles.icon}>
              <BiUser />
            </span>
            <span>ورود</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              clsx(
                styles.link,
                " h-full hover:text-orange-500",
                isActive && styles.active,
              )
            }
          >
            <span className={styles.icon}>
              <BiShoppingBag />
            </span>
            <span className="text-xs">فروشگاه</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default FooterHeader;
