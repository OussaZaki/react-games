import { isMergeable, initializeGrid } from "../index";

const gridSize = 4;

describe("helpers | ", () => {
  describe("isMergeable | ", () => {
    it("should return false if the destination is on boundaries", () => {
      // Arrange
      //
      //      0   1   2   3
      //    +---------------+
      // 0  |   |   |   |   |
      //    +---------------+
      // 1  |   |   |   |   |
      //    +---------------+
      // 2  |   |   |   |   |
      //    +---------------+
      // 3  |   |   |   |   |
      //    +---------------+
      //      C
      const grid = initializeGrid(gridSize);
      const C = { x: 0, y: 4 };
      const value = 2;

      // Act
      const mergeable = isMergeable(grid, C, value);

      // Assert
      expect(mergeable).toBe(false);
    });

    it("should return false if the destination is occupied with different value", () => {
      // Arrange
      //
      //      0   1   2   3
      //    +---------------+
      // 0  |   |   |   |   |
      //    +---------------+
      // 1  |   |   |   |   |
      //    +---------------+
      // 2  | 2 |   |   |   |
      //    +---------------+
      // 3  | C |   |   |   |
      //    +---------------+
      const grid = initializeGrid(gridSize);
      grid[0][3] = 4;
      const C = { x: 0, y: 3 };
      const value = 2;

      // Act
      const mergeable = isMergeable(grid, C, value);

      // Assert
      expect(mergeable).toBe(false);
    });

    it("should return true if the destination is occupied with same value", () => {
      // Arrange
      //
      //      0   1   2   3
      //    +---------------+
      // 0  |   |   |   |   |
      //    +---------------+
      // 1  |   |   |   |   |
      //    +---------------+
      // 2  | 4 |   |   |   |
      //    +---------------+
      // 3  | C |   |   |   |
      //    +---------------+
      const grid = initializeGrid(gridSize);
      grid[0][3] = 4;
      const C = { x: 0, y: 3 };
      const value = 4;

      // Act
      const mergeable = isMergeable(grid, C, value);

      // Assert
      expect(mergeable).toBe(true);
    });
  });
});
