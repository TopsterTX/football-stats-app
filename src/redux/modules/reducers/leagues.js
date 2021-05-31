import { getUrl } from "./baseUrl";

export const COMPETITION = "/competitions/";

const GET_LEAGUES = `${COMPETITION}_GET_LEAGUES`;

const defaultState = {
  leagues: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_LEAGUES:
      return { ...state, leagues: payload };
    default:
      return state;
  }
};

export const getLeagues = () => async (dispatch) => {
  try {
    await fetch(`${getUrl()}${COMPETITION}?plan=TIER_ONE`, {
      headers: { "X-Auth-Token": "4744f7d898194a098e3a3ebfc496e331" },
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch({ type: GET_LEAGUES, payload: res.competitions })
      );
  } catch (e) {
    console.error(e);
  }
};
