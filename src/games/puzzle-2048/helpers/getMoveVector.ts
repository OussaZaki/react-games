import { Direction, Position } from "../model";

const MAP: Position[] = [
  { x: 0, y: -1 }, // Up = 1
  { x: 1, y: 0 }, // Right
  { x: 0, y: 1 }, // Down
  { x: -1, y: 0 } // Left
];

export const getMoveVector = (direction: Direction) => MAP[direction - 1];

export default getMoveVector;
