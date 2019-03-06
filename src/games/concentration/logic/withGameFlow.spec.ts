import { onCardClick } from "./withGameFlow";

jest.useFakeTimers(); // using setTimeout within onCardClick.
const props = {
  started: false,
  cardOnHold: "",
  cards: [],
  startTimer: jest.fn(),
  toggleHoldCard: jest.fn(),
  toggleFlips: jest.fn(),
  cardsComparison: jest.fn(),
  winGame: jest.fn()
};


describe("withGameFlow | ", () => {
  describe("onCardClick | ", () => {
    it("should startTimer when the game did not start yet", () => {
      // Arrange
      const card = {
        id: "1",
        svg: "apple",
        flipped: false,
        found: false
      };

      // Act
      onCardClick(props as any)(card);

      // Assert
      expect(props.startTimer).toBeCalled();
    });

    it("should not startTimer when the game is already starting", () => {
      // Arrange
      props.startTimer.mockClear();
      props.started = true;
      const card = {
        id: "1",
        svg: "apple",
        flipped: false,
        found: false
      };

      // Act
      onCardClick(props as any)(card);

      // Assert
      expect(props.startTimer).not.toBeCalled();
    });

    it("should return undefined when the clicked card is already found", () => {
      // Arrange
      const card = {
        id: "1",
        svg: "apple",
        found: true,
        flipped: true
      };

      // Act
      const newState = onCardClick(props as any)(card);

      // Assert
      expect(newState).toBeUndefined();
    });

    it("should return undefined when the clicked card is already flipped", () => {
      // Arrange
      const card = {
        id: "1",
        svg: "apple",
        found: false,
        flipped: true
      };

      // Act
      const newState = onCardClick(props as any)(card);

      // Assert
      expect(newState).toBeUndefined();
    });

    it("should flip the card when the clicked card is neither found not flipped", () => {
      // Arrange
      const card = {
        id: "1",
        svg: "apple",
        flipped: false,
        found: false
      };

      // Act
      onCardClick(props as any)(card);

      // Assert
      expect(props.toggleFlips).toBeCalledWith(card.id);
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
      const newState = onCardClick(props as any)(card);

      // Assert
      expect(props.toggleHoldCard).toBeCalled();
      expect(newState).toBeUndefined();
    });

    it("should compare cards if there is a card onHold", () => {
      // Arrange
      props.toggleHoldCard.mockClear();

      props.cardOnHold = "1_1";
      const card = {
        id: "1",
        svg: "apple",
        flipped: false,
        found: false
      };

      // Act
      onCardClick(props as any)(card);

      // Assert
      expect(props.toggleHoldCard).not.toBeCalled();
      expect(setTimeout).toBeCalled();

      jest.runAllTimers();
      expect(props.cardsComparison).toBeCalledWith(props.cardOnHold, card.id);
    });
  });
});
