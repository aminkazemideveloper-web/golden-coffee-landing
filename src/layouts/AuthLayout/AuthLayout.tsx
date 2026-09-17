import styles from "./AuthLayout.module.css";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className={styles["auth-layout"]}>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
