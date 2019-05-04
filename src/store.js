import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers/index";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;
