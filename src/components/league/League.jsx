import React from "react";
import { NavLink } from "react-router-dom";

export const League = ({ name, id, getTeams, getMatches }) => {
  return (
    <li className="leagues-item">
      <NavLink
        to={`${id}`}
        key={id}
        onClick={() => {
          getTeams(id);
          getMatches(id);
          const leagues = document.getElementById("leagues__block");
          const menu = document.getElementById("menu");
          menu.classList.toggle("active");
          leagues.classList.toggle("active");
        }}
        className="leagues__link"
      >
        {name}
      </NavLink>
    </li>
  );
};
