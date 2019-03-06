import { Grid, Position } from "../model";
import { isWithinBounds, isEmpty } from "./index";

const isObstacle = (grid: Grid, cell: Position) => (
  !isWithinBounds(cell, grid.length) ||
  !isEmpty(grid, cell)
);

export default isObstacle;
