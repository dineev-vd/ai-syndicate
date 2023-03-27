import { RouteObject } from "react-router-dom";
import { Dashboard } from "./dasboard/Dashboard";
import { Start } from "./start/Start";
import { Startups } from "./startups/Startups";

interface AdminRouteObject extends RouteObject {
  header?: React.ReactNode | string;
  icon?: React.ReactNode;
  element?: React.ReactNode | string;
  children?: AdminRouteObject[];
}

export const appNavigation: AdminRouteObject[] = [
  {
    path: "/",
    element: <Start />,
    children: [
      {
        path: "dashboard",
        header: "Dashboard",
        icon: <>asd</>,
        element: <Dashboard />,
      },
      {
        path: "startups",
        header: "Startups",
        icon: <>asd</>,
        element: <Startups />,
      },
    ],
  },
];
