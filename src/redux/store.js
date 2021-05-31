import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./modules/reducers/rootReducer";

// export const BASE_URL = 'https://api.football-data.org/v2'

export const configureStore = (
  reducers = {},
  middlewares = [],
  defaultValue = {}
) => {
  return createStore(
    combineReducers({
      ...rootReducer,
      ...reducers,
    }),
    defaultValue,
    compose(
      applyMiddleware(logger, thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};
