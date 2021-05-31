const defaultState = {
  url: "https://api.football-data.org/v2",
};

export default (state = defaultState, { type, payload } = null) => {
  return state;
};

export const getUrl = () => {
  return defaultState.url;
};
