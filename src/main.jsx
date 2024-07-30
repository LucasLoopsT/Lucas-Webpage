import React from 'react'
import ReactDOM from 'react-dom/client'
// Styled-components
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.jsx';
import GlobalStyle from './styles/global.jsx';
//Pages
import Header from './pages/Header/index.jsx'
import Hello from './pages/Hello/index.jsx'
import Techs from './pages/Techs/index.jsx'
import Projects from './pages/Projects/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hello />
      <Techs />
      <Projects />
    </ThemeProvider>
  </React.StrictMode>,
)
