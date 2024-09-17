import React from 'react'
import { Outlet } from 'react-router-dom';

// Styled-components
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.jsx';
import GlobalStyle from './styles/global.jsx';

// Page
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';

//Swiper
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
register();

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Outlet />
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default App;