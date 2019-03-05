import cuid from "cuid";
import { Grid, Position, Direction, Tile } from "../model";

const GRID_SIZE = 4;

export const availableCells = (grid: Grid) => {
  const emptyPositions: Position[] = [];
  for (let x = 0; x < GRID_SIZE; x++) {
    for (let y = 0; y < GRID_SIZE; y++) {
      if (grid[x][y] === -1) {
        emptyPositions.push({ x, y });
      }
    }
  }

  return emptyPositions;
};

export const getRandomValue = () => (Math.random() < 0.8 ? 2 : 4);

export const getRandomAvailableCell = (grid: Grid) => {
  const cells = availableCells(grid);

  if (cells.length) {
    return cells[Math.floor(Math.random() * cells.length)];
  }
};

export const getRandomTile = (grid: Grid) => {
  const tile: Tile = {
    id: cuid(),
    value: getRandomValue(),
    position: getRandomAvailableCell(grid)!,
    isNew: true
  };

  return tile;
};

export const getRandomTiles = (grid: Grid, tilesCount = 1) => {
  const randomeTiles = [];
  for (let i = 0; i < tilesCount; i++) {
    randomeTiles.push(getRandomTile(grid));
  }
  return randomeTiles;
};

export const insertTiles = (grid: Grid, ...tiles: Tile[]) => {
  const _grid = grid;
  for (const tile of tiles) {
    _grid[tile.position.x][tile.position.y] = tile.id;
  }

  return _grid;
};

export const removeTiles = (grid: Grid, ...tiles: Tile[]) => {
  const _grid = grid;
  for (const tile of tiles) {
    _grid[tile.position.x][tile.position.y] = -1;
  }

  return _grid;
};

export const tileWithinBounds = (tile: Tile) =>
  tile.position.x >= 0 &&
  tile.position.x < GRID_SIZE &&
  tile.position.y >= 0 &&
  tile.position.y < GRID_SIZE;

export const positionsEqual = (p1: Position, p2: Position) =>
  p1.x === p2.x && p1.y === p2.y;

export const getMoveVector = (direction: Direction) => {
  const MAP = [
    { x: 0, y: -1 }, // Up
    { x: 1, y: 0 }, // Right
    { x: 0, y: 1 }, // Down
    { x: -1, y: 0 } // Left
  ];

  return MAP[direction];
};
