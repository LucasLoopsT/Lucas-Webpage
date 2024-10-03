import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

//Pages
import Home from './pages/Home/index.jsx';
import ProjectView from './pages/ProjectView'
import Login from './pages/Login/index.jsx';
import ManageProject from './pages/ManageProject/index.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { ProjectProvider } from './services/ProjectContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/manage",
        element: (
          <ProtectedRoute>
            <ManageProject />
          </ProtectedRoute>
        ),
      },
      {
        path: "/projeto",
        element: <ProjectView />,
      },
    ],
  },
], { basename: "/Lucas-Webpage" } // Definindo o subdiretório
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectProvider>
      <RouterProvider router={router} />
    </ProjectProvider>,
  </React.StrictMode>
);