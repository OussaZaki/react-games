import { withHandlers } from "recompose";
import { cloneDeep } from "lodash";

import { GameProps, Direction } from "../model";

import {
  getTraversals,
  getFurthestDestination,
  getMoveVector,
  isMergeable,
  isSamePosition,
  moveTile,
  mergeTile,
  getNextCellInDirection
} from "../helpers";

export const onMove = (props: GameProps) => (direction: Direction) => {
  let grid = cloneDeep(props.grid);
  const directionVector = getMoveVector(direction);
  const traversals = getTraversals(grid, directionVector);

  // Traverse the grid and try to move/merge tiles
  let gridChanged = false;
  for (const tile of traversals) {
    const destination = getFurthestDestination(grid, tile, directionVector);
    const forMerge = getNextCellInDirection(destination, directionVector);

    const mergeable = isMergeable(grid, forMerge, grid[tile.x][tile.y]);
    const samePosition = isSamePosition(tile, destination);

    if (samePosition && !mergeable) {
      continue; // blocked tile either by boundary or adjacent tile.
    }

    grid = mergeable
      ? mergeTile(grid, tile, forMerge)
      : moveTile(grid, tile, destination);
    gridChanged = true;
  }

  if (gridChanged) {
    props.setGrid(grid);
    props.afterMove();
  }
};

export const onMoveHandler = withHandlers({
  onMove
});

export default onMoveHandler;
