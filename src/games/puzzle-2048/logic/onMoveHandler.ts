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
  mergeTile
} from "../helpers";

export const onMove = (props: GameProps) => (
  direction: Direction
) => {
  let grid = cloneDeep(props.grid);
  const directionVector = getMoveVector(direction);
  const traversals = getTraversals(grid, directionVector);

  // Traverse the grid and try to move/merge tiles
  for (const tile of traversals) {
    const destination = getFurthestDestination(grid, tile, directionVector);

    const mergeable = isMergeable(grid, destination, directionVector);
    const samePosition = isSamePosition(tile, destination);

    if (samePosition && !mergeable) {
      continue; // blocked tile either by boundary or adjacent tile.
    }

    grid = (mergeable) ? mergeTile(grid, tile, destination) : moveTile(grid, tile, destination);
  }

  props.setGrid(grid);
};

export const onMoveHandler = withHandlers({
  onMove
});

export default onMoveHandler;
