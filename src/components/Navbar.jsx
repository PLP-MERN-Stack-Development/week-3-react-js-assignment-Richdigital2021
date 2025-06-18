import React, { useEffect, useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        TASK MANAGER
      </h1>
      <Button
        onClick={() => setDarkMode(!darkMode)}
        size="sm"
        variant="secondary"
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </Button>
    </nav>
  );
};

export default Navbar;
