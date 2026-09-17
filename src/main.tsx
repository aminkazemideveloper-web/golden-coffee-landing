import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import DarkModeProvider from "./providers/DarkModeProvider.tsx";
import { RouterProvider } from "react-router";
import routes from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <RouterProvider router={routes} />
    </DarkModeProvider>
  </StrictMode>,
);
