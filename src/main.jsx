import React from 'react'
import App from './App.jsx'
import Info from './components/Info.jsx'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Lowres from './components/lowres.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/about",
    element: <Info />
  },{
    path: "/lowres",
    element: <Lowres />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);