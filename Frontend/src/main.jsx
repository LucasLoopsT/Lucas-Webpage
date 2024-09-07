import React from 'react'
import ReactDOM from 'react-dom/client'
// Styled-components
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.jsx';
import GlobalStyle from './styles/global.jsx';
//Pages
import Home from './pages/Home/index.jsx';
import Login from './pages/Login/index.jsx';
import ManageProject from './pages/ManageProject/index.jsx';
import ProjectView from './pages/ProjectView/index.jsx';
//Swiper
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
register();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <ManageProject /> */}
      <ProjectView />

    </ThemeProvider>
  </React.StrictMode>,
)