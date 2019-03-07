import { cloneDeep } from "lodash";
import { Grid, Position, Tile } from "../model";

export const availableCells = (grid: Grid) => {
  const emptyPositions: Position[] = [];
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (!grid[x][y]) {
        emptyPositions.push({ x, y });
      }
    }
  }

  return emptyPositions;
};

export const getRandomValue = () => (Math.random() < 0.8 ? 2048 : 4);

export const getRandomAvailableCell = (availableCells: Position[]) => {
  return availableCells[Math.floor(Math.random() * availableCells.length)];
};

export const createTile = (cells: Position[]): Tile => ({
  value: getRandomValue(),
  position: getRandomAvailableCell(cells)!
});

const getRandomTiles = (grid: Grid, tilesCount = 1) => {
  const _grid = cloneDeep(grid);
  const cells = availableCells(_grid);

  for (let i = 0; i < tilesCount && cells.length; i++) {
    const tile = createTile(cells);
    _grid[tile.position.x][tile.position.y] = tile.value;
  }
  return _grid;
};

export default getRandomTiles;
