import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

type NavLinkProps = React.ComponentProps<typeof Link> & { active?: boolean };
const NavLink = ({ children, active = false, ...props }: NavLinkProps) => {
  const css = classNames(
    "capitalize font-medium ps-6 py-3 cursor-pointer",
    { "border-e-4 border-primary-500 bg-primary-100": active }
  );
  return (
    <Link {...props} className={css}>
      {children}
    </Link>
  );
};

export default NavLink;
