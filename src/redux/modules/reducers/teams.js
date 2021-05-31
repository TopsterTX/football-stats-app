import { COMPETITION } from "./leagues";
import { getUrl } from "./baseUrl";

export const TEAMS = "/teams";

const GET_TEAMS = `${TEAMS}_GET_TEAMS`;

const defaultState = {
  teams: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_TEAMS:
      return { ...state, teams: payload };
    default:
      return state;
  }
};

export const getTeams =
  (id = "2001") =>
  async (dispatch) => {
    try {
      await fetch(`${getUrl()}${COMPETITION}${id}${TEAMS}`, {
        headers: { "X-Auth-Token": "4744f7d898194a098e3a3ebfc496e331" },
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: GET_TEAMS, payload: res.teams });
        });
    } catch (e) {
      console.error(e);
    }
  };
