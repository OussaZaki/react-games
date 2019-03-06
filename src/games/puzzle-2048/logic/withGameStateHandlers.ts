import { withStateHandlers } from "recompose";
import { fill } from "lodash";

import { getRandomTiles } from "../helpers";
import { Grid } from "../model";

export type GameState = {
  score: number;
  gameOver: boolean;
  gameWon: boolean;
  grid: Grid;
};

export type StateHandlers = {
  initGame: () => Partial<GameState>;
  setGrid: (grid: Grid) => Partial<GameState>;
  winGame: () => Partial<GameState>;
  finishGame: () => Partial<GameState>;
};

const initialState: GameState = {
  score: 0,
  gameOver: false,
  gameWon: false,
  grid: fill(Array(4), fill(Array(4), 0))
};

export const loadGamefromCache = () => () => {
  throw Error("Not Implemented");
};

export const initGame = (state: GameState) => () => ({
  grid: getRandomTiles(state.grid, 3)
});

export const setGrid = () => (grid: Grid) => ({
  grid
});

export const winGame = () => () => ({
  gameWon: true
});

export const finishGame = () => () => ({
  gameOver: true
});

export const withGameStateHandlers =
  withStateHandlers<GameState, StateHandlers>(initialState, {
    initGame,
    setGrid,
    winGame,
    finishGame
  });

export default withGameStateHandlers;
