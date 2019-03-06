import { isWithinBounds } from "../index";

const gridSize = 4;

describe("helpers | ", () => {
  describe("isWithinBounds | ", () => {
    it("should return true for top left corner", () => {
      // Arrange
      const cell = { x: 0, y: 0 };

      // Act
      const withinBounds = isWithinBounds(cell, gridSize);

      // Assert
      expect(withinBounds).toBe(true);
    });

    it("should return true for top right corner ", () => {
      // Arrange
      const cell = { x: 3, y: 0 };

      // Act
      const withinBounds = isWithinBounds(cell, gridSize);

      // Assert
      expect(withinBounds).toBe(true);
    });

    it("should return true for bottom left corner ", () => {
      // Arrange
      const cell = { x: 0, y: 3 };

      // Act
      const withinBounds = isWithinBounds(cell, gridSize);

      // Assert
      expect(withinBounds).toBe(true);
    });

    it("should return true for bottom right corner ", () => {
      // Arrange
      const cell = { x: 3, y: 3 };

      // Act
      const withinBounds = isWithinBounds(cell, gridSize);

      // Assert
      expect(withinBounds).toBe(true);
    });

    it("should return false beyond x left boundary", () => {
      // Arrange
      const cell = { x: -1, y: 0 };

      // Act
      const withinBounds = isWithinBounds(cell, gridSize);

      // Assert
      expect(withinBounds).toBe(false);
    });

    it("should return false beyond x right boundary", () => {
      // Arrange
      const cell = { x: 4, y: 0 };

      // Act
      const withinBounds = isWithinBounds(cell, gridSize);

      // Assert
      expect(withinBounds).toBe(false);
    });

    it("should return false beyond y top boundary", () => {
      // Arrange
      const cell = { x: 0, y: -1 };

      // Act
      const withinBounds = isWithinBounds(cell, gridSize);

      // Assert
      expect(withinBounds).toBe(false);
    });

    it("should return false beyond y bottom boundary", () => {
      // Arrange
      const cell = { x: 0, y: 4 };

      // Act
      const withinBounds = isWithinBounds(cell, gridSize);

      // Assert
      expect(withinBounds).toBe(false);
    });
  });
});
