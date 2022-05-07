import React from "react";

export const ThemeContext = React.createContext({
  toggleTheme: () => {},
  mode: "dark",
});
