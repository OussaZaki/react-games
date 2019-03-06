import { fill } from "lodash";


import { isEmpty } from "../index";
import { Grid } from "../../model";

const grid: Grid = fill(Array(4), fill(Array(4), 0));

describe("helpers | ", () => {
  describe("isEmpty | ", () => {
    it("should return true if the cell is empty", () => {
      // Arrange
      const cell = { x: 0, y: 0 };

      // Act
      const empty = isEmpty(grid, cell);

      // Assert
      expect(empty).toBe(true);
    });

    it("should return false if the cell is not empty", () => {
      // Arrange
      grid[0][0] = 2;
      const cell = { x: 0, y: 0 };

      // Act
      const empty = isEmpty(grid, cell);

      // Assert
      expect(empty).toBe(false);
    });
  });
});
