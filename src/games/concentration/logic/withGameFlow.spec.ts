import { onCardClick } from "./withGameFlow";

const props = {
  started: false,
  cardOnHold: undefined,
  startTimer: jest.fn(),
  toggleHoldCard: jest.fn(),
  toggleFlips: jest.fn(),
  cardsComparison: jest.fn()
} as any;

describe("withGameFlow | ", () => {
  describe("onCardClick | ", () => {
    it("should return undefined when the clicked card is already flipped", () => {
      // Arrange
      const card = {
        id: "1",
        svg: "apple",
        flipped: true,
        found: false
      };

      // Act
      const newState = onCardClick(props)(card);

      // Assert
      expect(newState).toBeUndefined();
    });

    it("should return undefined when the clicked card is already found", () => {
      // Arrange
      const card = {
        id: "1",
        svg: "apple",
        flipped: true,
        found: true
      };

      // Act
      const newState = onCardClick(props)(card);

      // Assert
      expect(newState).toBeUndefined();
    });

    it("should not startTimer when the game is already starting", () => {
      // Arrange
      props.started = true;
      const card = {
        id: "1",
        svg: "apple",
        flipped: false,
        found: false
      };

      // Act
      onCardClick(props)(card);

      // Assert
      expect(props.startTimer).not.toBeCalled();
    });

    it("should startTimer when the game did not start yet", () => {
      // Arrange
      props.started = false;
      const card = {
        id: "1",
        svg: "apple",
        flipped: false,
        found: false
      };

      // Act
      onCardClick(props)(card);

      // Assert
      expect(props.startTimer).toBeCalled();
    });

    it("should put the first card onHold for comparison", () => {
      // Arrange
      props.started = false;
      const card = {
        id: "1",
        svg: "apple",
        flipped: false,
        found: false
      };

      // Act
      onCardClick(props)(card);

      // Assert
      expect(props.toggleHoldCard).toBeCalled();
      // TODO: this is redendant in this step since we have to flip the card anyway
      expect(props.toggleFlips).toBeCalled();
    });
  });
});
