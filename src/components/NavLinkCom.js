import React from "react";
import { Link } from "react-router-dom";

const NavLinkCom = ({ to, children }) => {
  return (
    <Link to={to} className="ease-in-out duration-300  hover:text-[#ED4E53]">
      {children}
    </Link>
  );
};

export default NavLinkCom;
