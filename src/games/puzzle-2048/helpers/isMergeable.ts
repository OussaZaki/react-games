import { Grid, Position } from "../model";
import { getNextCellInDirection, isWithinBounds, isEmpty } from "./index";

const isMergeable = (grid: Grid, mergeCell: Position, value: number) => {
  if (!isWithinBounds(mergeCell, grid.length)) {
    return false;
  }

  if (grid[mergeCell.x][mergeCell.y] !== value) {
    return false;
  }

  return true;
};

export default isMergeable;
