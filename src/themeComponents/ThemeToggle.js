import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full">
      {theme === "dark" ? (
        <FaSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-900 dark:text-gray-100 text-2xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-900 dark:text-gray-100 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
