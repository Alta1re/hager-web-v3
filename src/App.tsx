import React, { useState, useMemo } from "react";

// layout component
import Layout from "Layout/Layout";

// global alert hoc for convenient error-handling
import withGlobalAlert from "hoc/withGlobalAlert";

// material-ui theming
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

// context
import { ThemeContext } from "context/themeContext";

import "./App.css";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const themeMode: { toggleTheme: () => void; mode: "light" | "dark" } =
    useMemo(() => {
      return {
        toggleTheme: () => {
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        },
        mode: mode,
      };
    }, [mode]);

  const theme = createTheme({
    status: {
      danger: orange[500],
    },
    palette: {
      mode: mode,
      primary: {
        main: "#89cff0",
      },
      /*    secondary: {
        main: "#d4d46a",
      }, */
    },
    typography: {
      fontFamily: "Roboto",
    },
  });

  return (
    <ThemeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Layout />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default withGlobalAlert(App);
