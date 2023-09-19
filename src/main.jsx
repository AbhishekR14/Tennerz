import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../Stylesheets/index.css'
import Tenzies from './tenzies.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tenzies",
    element: <Tenzies />
  },
  { basename: import.meta.env.DEV ? '/' : '/Tenzies/' }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
