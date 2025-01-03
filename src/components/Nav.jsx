import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        ABOUT
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        SKILLS
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        WORK
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        CONTACT
      </NavLink>
    </nav>
  );
};

export default Nav;
