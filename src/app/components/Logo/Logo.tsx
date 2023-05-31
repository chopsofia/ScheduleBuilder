import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as LogoS } from "../../../assets/logo.svg";


const Logo = () => {
  return (
    <div className="flex">
      <NavLink to={`/`}>
          {/* <div className="text-2xl font-bold">timetable</div> */}
          <LogoS className="h-40"/>
      </NavLink>
    </div>
  );
};

export default Logo;
