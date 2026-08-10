import { createContext } from "react";

export type Theme = "dark" | "light";

type ContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

export const DarkModeContext = createContext<ContextValue>({} as ContextValue);
