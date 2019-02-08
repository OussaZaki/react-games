
import { RouterAction, LocationChangeAction } from 'react-router-redux';

type ReactRouterAction = RouterAction | LocationChangeAction;

// combine action types here 
// export type RootAction = ReactRouterAction | GameAction...
export type RootAction = ReactRouterAction;
