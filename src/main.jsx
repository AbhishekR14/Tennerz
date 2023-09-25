import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../Stylesheets/index.css'
import Tennerz from './tennerz.jsx'
import LeaderBoard from './leaderboard.jsx'
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
    path: "/tennerz",
    element: <Tennerz />
  },
  {
    path: "/leaderboard",
    element: <LeaderBoard />
  }
],{ basename: import.meta.env.DEV ? '/' : '/tennerz/' });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
