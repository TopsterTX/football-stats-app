import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { getLeagues as getLeaguesAction } from "./redux/modules/reducers/leagues";
import { getTeams as getTeamsAction } from "./redux/modules/reducers/teams";
import { getMatches as getMatchesAction } from "./redux/modules/reducers/matches";
import { Teams } from "./components/teams/Teams";
import { Leagues } from "./components/leagues/Leagues";
import { Loader } from "./components/loader/Loader";
import { Header } from "./components/header/Header";
import { Matches } from "./components/matches/Matches";
import "./App.scss";

function App({ leagues, getLeagues, getTeams, teams, matches, getMatches }) {
  useEffect(() => {
    getLeagues();
    getTeams("2001");
    getMatches("2001");
  }, []);
  return (
    <Router>
      <main className="main">
        <Header />
        <div className="wrapper">
          <section className="leagues__block" id="leagues__block">
            {leagues.leagues.length ? (
              <Leagues
                leagues={leagues}
                getTeams={getTeams}
                getMatches={getMatches}
              />
            ) : (
              <Loader className="loader__leagues" />
            )}
          </section>
          <section className="teams__block">
            {teams.teams.length ? <Teams teams={teams} /> : <Loader />}
            {matches.matches.length ? (
              <Matches matches={matches} />
            ) : (
              <Loader />
            )}
          </section>
        </div>
      </main>
    </Router>
  );
}

export default connect(
  ({ leagues, teams, matches }) => ({ leagues, teams, matches }),
  {
    getTeams: getTeamsAction,
    getLeagues: getLeaguesAction,
    getMatches: getMatchesAction,
  }
)(App);
