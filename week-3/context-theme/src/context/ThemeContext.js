import React, { useState, createContext } from "react";

const ThemeContext = createContext(); // general state

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [name, setName] = useState("Default Name");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const value = { // general store
    theme,
    toggleTheme,
    name,
    setName
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
