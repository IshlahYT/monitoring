import React from "react";

// Admin Imports
import MainDashboard from "views/admin";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
    showInSidebar: true,
  },
  
  {
    name: "Sign In",
    layout: "/auth",
    path: "login",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
    showInSidebar: false,
  },
];
export default routes;