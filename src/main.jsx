import React from 'react'
import ReactDOM from 'react-dom/client'
// Styled-components
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.jsx';
import GlobalStyle from './styles/global.jsx';
//Pages
import Home from './pages/Home/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
