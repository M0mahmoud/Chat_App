import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
