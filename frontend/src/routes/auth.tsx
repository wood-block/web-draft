import { RouteObject } from "react-router-dom";
import { lazy } from "react";

const Login = lazy(() => import("../views/auth/Login"));
const Reset = lazy(() => import("../views/auth/Reset"));
const Register = lazy(() => import("../views/auth/Register"));
const Email = lazy(() => import("../views/auth/Email"));
const AuthLayout = lazy(() => import("../views/auth/Layout"));

export const authRouter: RouteObject = {
  path: "",
  element: <AuthLayout />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "reset",
      element: <Reset />,
    },
    {
      path: "email",
      element: <Email />,
    },
  ],
};
