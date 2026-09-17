import { BiSearch } from "react-icons/bi";
import styles from "./SearchInput.module.css";
import clsx from "clsx";

function SearchInput() {
  return (
    <label className={clsx(styles["search-input"], "flex lg:hidden")}>
      <input type="text" placeholder="جستجو..." />
      <button className="bg-orange-400/90  hover:bg-orange-600">
        <BiSearch className={styles.icon} />
      </button>
    </label>
  );
}

export default SearchInput;
