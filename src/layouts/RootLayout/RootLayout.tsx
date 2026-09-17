import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./RootLayout.module.css";
import FooterHeader from "../../components/Header/components/FooterHeader/FooterHeader";
import clsx from "clsx";
function RootLayout() {
  return (
    <div className={styles["root-layout"]}>
      <Header />

      <div>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
      <div className={clsx(styles["fix-toolbar"])}>
        <FooterHeader />
      </div>
    </div>
  );
}

export default RootLayout;
