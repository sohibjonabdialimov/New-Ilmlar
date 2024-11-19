import React from "react";
import DesktopLayout from "../layout/DesktopLayout";
import AuthLayout from "../layout/AuthLayout";


const LoginPage = React.lazy(() => import("../views/LoginPage"));
const HomePage = React.lazy(() => import("../views/home/HomePage"));




export const RoutesConfig = [{
    title: "",
    path: "/",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: HomePage,
  },


  {
    title: "login",
    path: "/login",
    Layout: AuthLayout,
    roles: [],
    subOptions: [],
    Component: LoginPage,
  },
];