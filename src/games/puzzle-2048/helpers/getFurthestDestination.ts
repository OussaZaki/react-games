import { Grid, Position } from "../model";
import { isObstacle, getNextCellInDirection } from "./index";

const getFurthestDestination = (
  grid: Grid,
  tile: Position,
  directionVector: Position
): Position => {
  const destination = getNextCellInDirection(tile, directionVector);
  if (isObstacle(grid, destination)) {
    // console.log(`${destination.x} ${destination.y} Sup yo`);
    return tile;
  }
  return getFurthestDestination(grid, destination, directionVector);
};

export default getFurthestDestination;
