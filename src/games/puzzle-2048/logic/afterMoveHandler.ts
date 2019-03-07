import { withHandlers } from "recompose";
import { cloneDeep } from "lodash";

import { GameProps } from "../model";

import { getRandomTiles, isMovesAvailable, isTargetMet } from "../helpers";

import { WIN_TARGET } from "../config";

export const afterMove = (props: GameProps) => () => {
  let grid = cloneDeep(props.grid);
  if (isTargetMet(grid, WIN_TARGET)) {
    props.winGame();
  }

  grid = getRandomTiles(grid);
  props.setGrid(grid);

  if (!isMovesAvailable(grid)) {
    props.finishGame(); // Game over!
  }
};

export const afterMoveHandler = withHandlers({
  afterMove
});

export default afterMoveHandler;
