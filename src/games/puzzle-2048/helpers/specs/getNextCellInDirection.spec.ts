import { getNextCellInDirection } from "../index";

// Grid
//      0   1   2   3
//    +---------------+
// 0  |   |   |   |   |
//    +---------------+
// 1  | * < X |   |   |
//    +---------------+
// 2  |   |   |   |   |
//    +---------------+
// 3  |   |   |   |   |
//    +---------------+

describe("helpers | ", () => {
  describe("getNextCellInDirection | ", () => {
    it("should return the next cell in the given direction", () => {
      // Arrange
      const left = { x: -1, y: 0 };
      const cell = { x: 1, y: 1 };
      const expectedDestination = { x: 0, y: 1 };

      // Act
      const destination = getNextCellInDirection(cell, left);

      // Assert
      expect(destination).toEqual(expectedDestination);
    });

    it("should return the next cell even if it's outside the boundary", () => {
      // Arrange
      const down = { x: 0, y: 1 };
      const cell = { x: 3, y: 3 };
      const expectedDestination = { x: 3, y: 4 };

      // Act
      const destination = getNextCellInDirection(cell, down);

      // Assert
      expect(destination).toEqual(expectedDestination);
    });
  });
});
