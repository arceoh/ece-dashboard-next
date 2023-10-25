"use client";
import { useEffect } from "react";
import { Switch } from "@headlessui/react";
import { useThemeStore } from "../hooks/useThemeStore";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  const setTheme = (theme: string) => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.dataset.theme = "aesdLight";
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.dataset.theme = "aesdDark";
    }
  };

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <>
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="toggle toggle-accent"
      />
    </>
  );
};

export default ThemeToggle;
