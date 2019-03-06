import { getFurthestDestination, initializeGrid } from "../index";

// Use this Grid to represent the arrangement
//
//      0   1   2   3
//    +---------------+
// 0  |   |   |   |   |
//    +---------------+
// 1  |   |   |   |   |
//    +---------------+
// 3  |   |   |   |   |
//    +---------------+
// 4  |   |   |   |   |
//    +---------------+
//
// See examples below:

const gridSize = 4;

describe("helpers | ", () => {
  describe("getFurthestDestination | ", () => {
    it("should return same position if we are in the boundary", () => {
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
      const expectedDestination = C;

      // Act
      const destination = getFurthestDestination(grid, C, down);

      // Assert
      expect(destination).toEqual(expectedDestination);
    });

    it("should return same position if there's a tile right next", () => {
      // Arrange
      //
      //      0   1   2   3
      //    +---------------+
      // 0  |   |   | C | 4 |
      //    +---------------+
      // 1  |   |   |   |   |
      //    +---------------+
      // 2  |   |   |   |   |
      //    +---------------+
      // 3  |   |   |   |   |
      //    +---------------+
      const grid = initializeGrid(gridSize);
      grid[3][0] = 4;
      grid[2][0] = 2;
      const C = { x: 2, y: 0 };
      const right = { x: 1, y: 0 };
      const expectedDestination = C;

      // Act
      const destination = getFurthestDestination(grid, C, right);

      // Assert
      expect(destination).toEqual(expectedDestination);
    });

    it("should return furthest position to the boundary", () => {
      // Arrange
      //
      //      0   1   2   3
      //    +---------------+
      // 0  | C |   |   |   |
      //    +---------------+
      // 1  |   |   |   |   |
      //    +---------------+
      // 2  |   |   |   |   |
      //    +---------------+
      // 3  |   |   |   |   |
      //    +---------------+
      const grid = initializeGrid(gridSize);
      grid[0][0] = 2;
      const C = { x: 0, y: 0 };
      const right = { x: 1, y: 0 };
      const expectedDestination = { x: 3, y: 0 };

      // Act
      const destination = getFurthestDestination(grid, C, right);

      // Assert
      expect(destination).toEqual(expectedDestination);
    });

    it("should return furthest position to the first non empty cell", () => {
      // Arrange
      //
      //      0   1   2   3
      //    +---------------+
      // 0  | 4 |   |   |   |
      //    +---------------+
      // 1  |   |   |   |   |
      //    +---------------+
      // 2  |   |   |   |   |
      //    +---------------+
      // 3  | C |   |   |   |
      //    +---------------+
      const grid = initializeGrid(gridSize);
      grid[0][0] = 4;
      grid[0][3] = 2;
      const C = { x: 0, y: 3 };
      const up = { x: 0, y: -1 };
      const expectedDestination = { x: 0, y: 1 };

      // Act
      const destination = getFurthestDestination(grid, C, up);

      // Assert
      expect(destination).toEqual(expectedDestination);
    });
  });
});
