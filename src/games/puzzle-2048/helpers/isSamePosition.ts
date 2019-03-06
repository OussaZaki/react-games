import { Position } from "../model";

const isSamePosition = (p1: Position, p2: Position) =>
  p1.x === p2.x && p1.y === p2.y;

export default isSamePosition;
