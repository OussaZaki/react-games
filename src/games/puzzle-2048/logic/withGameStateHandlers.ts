import { withStateHandlers, StateHandler } from "recompose";
import { fill } from "lodash";

import { getRandomTiles, insertTiles } from "../helpers";
import { Tile, Grid } from "../model";

export type GameState = {
  score: number;
  tiles: Tile[];
  gameOver: boolean;
  gameWon: boolean;
  grid: Grid;
};

export type StateHandlers = {
  initGame: () => StateHandler<GameState>;
};

const initialState: GameState = {
  tiles: [],
  score: 0,
  gameOver: false,
  gameWon: false,
  grid: fill(Array(4), fill(Array(4), -1))
};


export const loadGamefromCache = () => () => {
  throw Error("Not Implemented");
};

export const initGame = (state: GameState) => () => {
  const tiles = getRandomTiles(state.grid, 3);

  return {
    tiles,
    grid: insertTiles(state.grid, ...tiles)
  };
};

export const withGameStateHandlers = withStateHandlers(initialState, {
  initGame
});

export default withGameStateHandlers;
