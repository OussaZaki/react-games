import { Grid, Position } from "../model";
import isEmpty from "./isEmpty";

export const getTraversals = (grid: Grid, vector: Position) => {
  const array = Array.from(Array(grid.length).keys()); // [0, 1, 2, 3... size]

  // Always traverse from the farthest cell in the chosen direction
  const xs = (vector.x === 1) ? array.reverse() : array; // if we're moving right we reverse xs
  const ys = (vector.y === 1) ? array.reverse() : array; // if we're moving down we reverse ys

  const traversals: Position[] = [];
  for (const x of xs) {
    for (const y of ys) {
      if (!isEmpty(grid, { x, y })) {
        traversals.push({ x, y });
      }
    }
  }

  return traversals;
};

export default getTraversals;
