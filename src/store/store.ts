import { createStore, compose } from 'redux';
import { createBrowserHistory } from 'history'

import rootReducer from './root-reducer';

export const history = createBrowserHistory()

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

function configureStore(initialState?: {}) {
  // compose enhancers
  const enhancer = composeEnhancers();
  // create store
  return createStore(rootReducer(history), initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
