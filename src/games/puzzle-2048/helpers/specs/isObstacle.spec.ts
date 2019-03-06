import { fill } from "lodash";

import { Grid } from "../../model";
import { isObstacle } from "../index";


describe("helpers | ", () => {
  describe("isObstacle | ", () => {
    it("should return true if the cell is occupied", () => {
      // Arrange
      const grid: Grid = fill(Array(4), fill(Array(4), 0));
      grid[0][1] = 2;
      const cell = { x: 0, y: 1 };

      // Act
      const obstacle = isObstacle(grid, cell);

      // Assert
      expect(obstacle).toBe(true);
    });

    it("should return true if the cell is a boundary", () => {
      // Arrange
      const grid: Grid = fill(Array(4), fill(Array(4), 0));
      const cell = { x: 4, y: 0 };

      // Act
      const obstacle = isObstacle(grid, cell);

      // Assert
      expect(obstacle).toBe(true);
    });

    it("should return false if the cell is empty and within bounds", () => {
      // Arrange
      const grid: Grid = fill(Array(4), fill(Array(4), 0));
      const cell = { x: 0, y: 0 };

      // Act
      const obstacle = isObstacle(grid, cell);

      // Assert
      expect(obstacle).toBe(false);
    });
  });
});
