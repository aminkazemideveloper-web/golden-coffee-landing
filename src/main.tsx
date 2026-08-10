import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import DarkModeProvider from "./providers/DarkModeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      
        <BrowserRouter>
          <App />
        </BrowserRouter>
      
    </DarkModeProvider>
  </StrictMode>,
);
