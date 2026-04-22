/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "portfolio-theme";

const ThemeModeContext = createContext(null);

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      /* ignore */
    }
    return "dark";
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((m) => (m === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({ mode, setMode, toggleTheme }),
    [mode, toggleTheme]
  );

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  }
  return ctx;
}
