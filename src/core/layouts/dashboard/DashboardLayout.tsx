import React from "react";
import { Link, Outlet } from "react-router-dom";
import assets from "../../../assets/assets";
import mainRoutes from "../../routes/routes.config";
import NavLink from "../../../shared/components/NavLink/NavLink";
import useCurrentPath from "../../hooks/useCurrentPath/useCurrentPath";

const DashboardLayout = () => {
  const currentPath = useCurrentPath();
  return (
    <div className="flex min-h-screen">
      {/* <div className=" min-w-[240px] sticky top-0"> */}
      <nav className="flex flex-col border-e-1 h-screen min-w-[240px] sticky top-0 justify-between">
        <div className="flex flex-col gap-4">
          <header className="py-6 flex justify-center pb-2">
            <img src={assets.images.logo} />
          </header>
          {mainRoutes
            .filter((_) => _.primaryNav)
            .map((route) => (
              <NavLink
                key={route.path}
                active={currentPath?.pathname == route.path}
                to={route.path}
              >
                {route.displayName}
              </NavLink>
            ))}
        </div>
        <footer className="flex flex-col py-3 gap-6">
          {mainRoutes
            .filter((_) => !_.primaryNav)
            .map((route) => (
              <NavLink
                key={route.path}
                active={currentPath?.pathname == route.path}
                to={route.path}
              >
                {route.displayName}
              </NavLink>
            ))}
        </footer>
      </nav>
      {/* </div> */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
