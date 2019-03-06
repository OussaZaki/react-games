import { withHandlers } from "recompose";
import { cloneDeep } from "lodash";

import { GameProps } from "../model";

import { getRandomTiles, isMovesAvailable, isTargetMet } from "../helpers";

import { WIN_TARGET } from "../config";

export const afterMove = (props: GameProps) => () => {
  let _grid = cloneDeep(props.grid);
  if (isTargetMet(_grid, WIN_TARGET)) {
    props.winGame();
  }

  _grid = getRandomTiles(_grid);
  props.setGrid(_grid);

  if (!isMovesAvailable(_grid)) {
    props.finishGame(); // Game over!
  }
};

export const afterMoveHandler = withHandlers({
  afterMove
});

export default afterMoveHandler;
