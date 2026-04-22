import { Outlet } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { getTheme } from "./styles/theme.jsx";
import GlobalStyle from "./styles/global.jsx";

import { ThemeModeProvider, useThemeMode } from "./context/ThemeModeContext.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";

import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
register();

function AppShell() {
  const { mode } = useThemeMode();

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeModeProvider>
      <AppShell />
    </ThemeModeProvider>
  );
}

export default App;
