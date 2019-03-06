import { Grid, Position } from "../model";

const isEmpty = (grid: Grid, cell: Position) => !grid[cell.x][cell.y];

export default isEmpty;
