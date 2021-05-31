import React from "react";
import { Team } from "../team/Team";

export const Teams = ({ teams, getTeams }) => {
  return (
    <ul className="teams__list">
      <h2 className="teams__title">Список команд</h2>
      {teams.teams.map((el, index) => {
        return (
          <Team
            id={el.id}
            name={el.name}
            index={index}
            img={el.crestUrl}
            key={index}
          />
        );
      })}
    </ul>
  );
};
