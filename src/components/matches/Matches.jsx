import React from "react";
import { Match } from "../match/Match";

export const Matches = ({ matches }) => {
  return (
    <ul className="matches__list">
      <h2 className="matches__title">Последние 50 матчей</h2>
      {matches.matches.map((el, index) => {
        return (
          <Match
            awayTeamName={el.awayTeam.name}
            homeTeamName={el.homeTeam.name}
            awayTeamScore={el.score.fullTime.awayTeam}
            homeTeamScore={el.score.fullTime.homeTeam}
            winner={el.score.winner}
            key={index}
          />
        );
      })}
    </ul>
  );
};
