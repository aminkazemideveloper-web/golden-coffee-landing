import { useEffect, useState, type PropsWithChildren } from "react";
import { DarkModeContext, type Theme } from "../context/DarkModeContext";

type ProviderTypes = PropsWithChildren;
const DarkModeProvider = ({ children }: ProviderTypes) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saveTheme = localStorage.getItem("theme");
    return saveTheme === "dark" || saveTheme === "light" ? saveTheme : "light";
  });
  const toggleTheme = (): void => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add(theme);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
