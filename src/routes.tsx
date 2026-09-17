import AbautUs from "./pages/AbautUs/AbautUs";
import Blog from "./pages/Blog/Blog";
import ContactUs from "./pages/ContactUs/ContactUs";
import Dictionary from "./pages/Dictionary/Dictionary";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Register from "./pages/Register/Register";
import Shop from "./pages/Shop/Shop";
import RootLayout from "./layouts/RootLayout/RootLayout";
import { createBrowserRouter, redirect } from "react-router";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, loader: () => redirect("/home") },
      { path: "home", element: <Home /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "shop", element: <Shop /> },
      { path: "blog", element: <Blog /> },
      { path: "dictionary", element: <Dictionary /> },
      { path: "abaout-us", element: <AbautUs /> },
      { path: "contact-us", element: <ContactUs /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, loader: () => redirect("/auth/login") },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
