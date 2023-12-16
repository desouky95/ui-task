import { RouteObject } from "react-router-dom";
import AvailableUnits from "../../pages/AvailableUnits/AvailableUnits";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Docs from "../../pages/Docs/Docs";
import Integrations from "../../pages/Integrations/Integrations";
import Invoices from "../../pages/Invoices/Invoices";
import SocialMedia from "../../pages/SocialMedia/SocialMedia";
import Projects from "../../pages/Projects/Projects";

type Route = {
  name: string;
  path: string;
  displayName: string;
  icon?: string;
  children?: Array<Route>;
  element: JSX.Element;
  primaryNav?: boolean;
};

const mainRoutes: Array<RouteObject & Route> = [
  {
    displayName: "dashboard",
    path: "/",
    name: "dashboard",
    element: <Dashboard />,
    primaryNav: true,
  },
  {
    displayName: "available units",
    path: "/available-units",
    name: "available units",
    element: <AvailableUnits />,
    primaryNav: true,
  },
  {
    displayName: "invoices",
    path: "/invoices",
    name: "invoices",
    element: <Invoices />,
    primaryNav: true,
  },
  {
    displayName: "projects",
    path: "/projects",
    name: "projects",
    element: <Projects />,
    primaryNav: true,
  },
  {
    displayName: "social media",
    path: "/social-media",
    name: "social media",
    element: <SocialMedia />,
    primaryNav: true,
  },
  {
    displayName: "integrations",
    path: "/integrations",
    name: "integrations",
    element: <Integrations />,
    primaryNav: true,
  },
  {
    displayName: "documentation",
    path: "/docs",
    name: "documentation",
    element: <Docs />,
    primaryNav: true,
  },

  {
    displayName: "settings",
    path: "/settings",
    name: "settings",
    element: (() => <>Settings</>)(),
  },
  {
    displayName: "help center",
    path: "/help",
    name: "help center",
    element: (() => <>Help Center</>)(),
  },
];

export default mainRoutes;
