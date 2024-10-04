import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, HashRouter, createHashRouter } from "react-router-dom"

//Pages
import Home from './pages/Home/index.jsx';
import ProjectView from './pages/ProjectView'
import Login from './pages/Login/index.jsx';
import ManageProject from './pages/ManageProject/index.jsx';
import ProtectedRoute from './services/ProtectedRoute.jsx';

const router = createHashRouter([
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
], { basename: "/" }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);