import { getUrl } from "./baseUrl";
import { COMPETITION } from "./leagues";

const MATCHES = "/matches";

const GET_MATCHES = `${MATCHES}_GET_MATCHES`;

const defaultState = {
  matches: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_MATCHES:
      return { ...state, matches: payload };
    default:
      return state;
  }
};

export const getMatches = (id) => async (dispatch) => {
  try {
    await fetch(`${getUrl()}${COMPETITION}${id}${MATCHES}`, {
      headers: { "X-Auth-Token": "4744f7d898194a098e3a3ebfc496e331" },
    })
      .then((res) => res.json())
      .then((res) => {
        let result = res.matches;
        result = result.splice(result.length - 50, result.length);
        dispatch({ type: GET_MATCHES, payload: result });
        // dispatch({ type: GET_MATCHES, payload: res.matches })
      });
  } catch (e) {
    console.error(e);
  }
};
