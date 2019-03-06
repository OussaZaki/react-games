import { Grid, Position } from "../model";

const mergeTile = (grid: Grid, tile: Position, destination: Position) => {
  const _grid = grid;

  _grid[destination.x][destination.y] *= 2;
  _grid[tile.x][tile.y] = 0;

  return _grid;
};

export default mergeTile;
