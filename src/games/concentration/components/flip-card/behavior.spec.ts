import { newProps } from "./behavior";

describe("FlipCard behavior | ", () => {
  describe("newProps | ", () => {
    describe("className | ", () => {
      it("Should return flipcard only", () => {
        // Arrange
        const props = {
          flipped: false,
          found: false
        };

        // Act
        const newprops = newProps(props as any);

        // Assert
        expect(newprops).toEqual({
          className: "flipcard"
        });
      });

      it("Should contain flipped when flipped prop is true", () => {
        // Arrange
        const props = {
          flipped: true,
          found: false
        };

        // Act
        const newprops = newProps(props as any);

        // Assert
        expect(newprops).toEqual({
          className: "flipcard flipped"
        });
      });

      it("Should contain flipped & found when found prop is true", () => {
        // Arrange
        const props = {
          flipped: true,
          found: true
        };

        // Act
        const newprops = newProps(props as any);

        // Assert
        expect(newprops).toEqual({
          className: "flipcard flipped found"
        });
      });
    });
  });
});
