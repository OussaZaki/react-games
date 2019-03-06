import { Position } from "../model";

const isWithinBounds = (position: Position, boundary: number) =>
  position.x >= 0 &&
  position.x < boundary &&
  position.y >= 0 &&
  position.y < boundary;

export default isWithinBounds;
