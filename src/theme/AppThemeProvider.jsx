import { useMemo, useState, createContext, useContext } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme-mod";

const ThemeModeContext = createContext(null);

export function useThemeMode() {
  return useContext(ThemeModeContext);
}

export default function AppThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    // () => (mode === "light" ? darkTheme : lightTheme),
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  const toggle = () => setMode(m => (m === "light" ? "dark" : "light"));

  return (
    <ThemeModeContext.Provider value={{ mode, toggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
