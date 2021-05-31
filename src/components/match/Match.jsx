import React from "react";

export const Match = (
  { awayTeamName, homeTeamName, awayTeamScore, homeTeamScore, winner },
  index
) => {
  return (
    <li className="matches__item" key={index}>
      <section
        className={
          winner === "HOME_TEAM"
            ? "matches__team --winner"
            : winner === "DRAW"
            ? "matches__team --draw"
            : "matches__team --looser"
        }
        id="home"
      >
        <span className="matches__team-name">{homeTeamName}</span>
        <span className="matches__team-score">{homeTeamScore}</span>
      </section>
      <span className="versus">VS</span>
      <section
        className={
          winner === "AWAY_TEAM"
            ? "matches__team --winner"
            : winner === "DRAW"
            ? "matches__team --draw"
            : "matches__team --looser"
        }
        id="away"
      >
        <span className="matches__team-score">{awayTeamScore}</span>
        <span className="matches__team-name">{awayTeamName}</span>
      </section>
    </li>
  );
};
