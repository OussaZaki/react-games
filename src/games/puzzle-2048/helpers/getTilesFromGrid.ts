import { Grid, Tile } from "../model";
import { isEmpty } from ".";

const getTilesFromGrid = (grid: Grid): Tile[] => {
  const tiles = [];
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      const position = { x, y };
      if (!isEmpty(grid, position)) {
        tiles.push({
          id: `${x}_${y}`,
          value: grid[x][y],
          position
        });
      }
    }
  }

  return tiles;
};

export default getTilesFromGrid;
