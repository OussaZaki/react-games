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
      // 3  | C |   |   |   |
      //    +---------------+
      const grid = initializeGrid(gridSize);
      grid[0][3] = 2;
      const C = { x: 0, y: 3 };
      const down = { x: 0, y: 1 };

      // Act
      const mergeable = isMergeable(grid, C, down);

      // Assert
      expect(mergeable).toBe(false);
    });
  });
});
