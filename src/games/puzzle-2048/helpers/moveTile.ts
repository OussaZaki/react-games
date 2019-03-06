import { Grid, Position } from "../model";

const moveTile = (grid: Grid, tile: Position, destination: Position) => {
  const _grid = grid;
  _grid[destination.x][destination.y] = grid[tile.x][tile.y];
  _grid[tile.x][tile.y] = 0;

  return _grid;
};

export default moveTile;
