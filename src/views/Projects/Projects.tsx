import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.TabsContainer}>
        <NavLink
          to="ressources"
          className={({ isActive }) =>
            isActive ? classes.ActiveNavLink : classes.NavLink
          }
        >
          Ressources
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? classes.ActiveNavLink : classes.NavLink
          }
        >
          Projects
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Projects;
