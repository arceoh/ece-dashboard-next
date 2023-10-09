"use client";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
// import { FaSun } from "react-icons/fa";
// import { BsFillMoonStarsFill } from "react-icons/bs";

type Theme = "dark" | "light";

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const setTheme = (theme: Theme) => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.dataset.theme = "aesdLight";
      localStorage.setItem("theme", "light");
      setIsDarkTheme(false);
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.dataset.theme = "aesdDark";
      localStorage.setItem("theme", "dark");
      setIsDarkTheme(true);
    }
  };

  useEffect(() => {
    const theme =
      localStorage.getItem("theme") === "dark" ||
      localStorage.getItem("theme") === null
        ? "dark"
        : "light";
    setTheme(theme);
  }, []);

  return (
    <>
      <Switch
        checked={isDarkTheme}
        onChange={(e) => (e ? setTheme("dark") : setTheme("light"))}
        className="toggle toggle-accent"
      />
    </>
  );
};

export default ThemeToggle;
