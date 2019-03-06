import { Position } from "../model";

const getNextCellInDirection = (
  cell: Position,
  directionVector: Position
) => ({
  x: cell.x + directionVector.x,
  y: cell.y + directionVector.y
});

export default getNextCellInDirection;
