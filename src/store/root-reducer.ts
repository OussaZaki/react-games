import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { StateType } from 'typesafe-actions';
import { History } from 'history';

// import { xReducer } from '../game/x';

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
  // x: xReducer,
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
