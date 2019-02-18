import { createStore } from "redux";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";

export const history = createBrowserHistory();


function configureStore(initialState?: {}) {
  // configure middlewares
  // const middlewares = [createEpicMiddleware(rootEpic)];
  // compose enhancers
  // const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const enhancer = composeWithDevTools();

  // create store
  return createStore(rootReducer(history), initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
