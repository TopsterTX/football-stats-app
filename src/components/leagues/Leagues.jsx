import React from "react";
import { League } from "../league/League";

export const Leagues = ({ leagues, getTeams, getMatches }) => {
  return (
    <ul className="list-group">
      <h5 className="leagues__title">Список лиг</h5>
      {leagues.leagues.map((el) => {
        return (
          <League
            name={el.name}
            id={el.id}
            getTeams={getTeams}
            getMatches={getMatches}
            key={el.id}
            className="league"
          />
        );
      })}
    </ul>
  );
};
