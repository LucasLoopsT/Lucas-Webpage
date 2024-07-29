import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './pages/Header.jsx'
import Hello from './pages/Hello.jsx'
import Techs from './pages/Techs.jsx'
import Projects from './pages/Projects.jsx'
import './index.css'

ReactDOM.createRoot(document.querySelector('header')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hello/>
    <Techs/>
    <Projects />
  </React.StrictMode>,
)
