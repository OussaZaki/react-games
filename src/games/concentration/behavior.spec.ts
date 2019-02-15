import {
  loadGamefromCache,
  initGame,
  startNewGame,
  firstClick,
  flipCards,
  unflipCards,
  onCardClick
} from "./behavior";
import * as helpers from "./helper";
import { Card } from "./model";

const cards = [
  {
    id: "1",
    svg: "apple",
    flipped: false,
    found: false
  },
  {
    id: "1_1",
    svg: "apple",
    flipped: false,
    found: false
  }
];
const date = Date.now();

describe("Concentration game behavior | ", () => {
  beforeAll(() => {});

  describe("loadGamefromCache | ", () => {
    it("Should throw Not Implemented exception", () => {
      // Arrange
      const state = {};

      // Act
      const newStateFn = () => loadGamefromCache(state)();

      // Assert
      expect(newStateFn).toThrow("Not Implemented");
    });
  });

  describe("initGame | ", () => {
    it("Should set loading to true", () => {
      // Arrange
      const state = {
        other: "a",
        loading: false
      };

      const expectedState = {
        other: "a",
        loading: true
      };

      // Act
      const newState = initGame(state)();

      // Assert
      expect(newState).toEqual(expectedState);
    });
  });

  describe("startNewGame | ", () => {
    it("Should fetch cards and set loading to false", async () => {
      // Arrange
      jest.spyOn(helpers, "getCards").mockResolvedValue(cards);

      const state = {
        otherState: "a",
        cards: [],
        loading: false
      };

      const expectedState = {
        otherState: "a",
        cards,
        loading: false
      };

      // Act
      const newState = startNewGame(state)();

      // Assert
      expect(newState).resolves.toEqual(expectedState);
    });
  });

  describe("firstClick | ", () => {
    it("Should save the time and mark the game as started", () => {
      // Arrange
      jest.spyOn(Date, "now").mockReturnValue(date);

      const state = {
        otherState: "a",
        cards,
        started: false
      };

      const expectedState = {
        otherState: "a",
        cards,
        started: true,
        startingTime: date
      };

      // Act
      const newState = firstClick(state)();

      // Assert
      expect(newState).toEqual(expectedState);
    });
  });

  describe("flipCards | ", () => {
    it("Should mark one card as flipped", () => {
      const state = {
        otherState: "a",
        cards
      };

      // Act
      const newState = flipCards(state)([cards[0]]);

      // Assert
      expect(newState.cards[0].flipped).toBe(true);
    });

    it("Should throw error if the card is not found", () => {
      const state = {
        otherState: "a",
        cards
      };

      const card = {
        id: "9",
        svg: "hello",
        flipped: false,
        found: false
      }

      // Act
      const newStateFn = () => flipCards(state)([card]);

      // Assert
      expect(newStateFn).toThrow("No card was found");
    });
  });

  describe("unflipCards | ", () => {
    it("Should mark the card as flipped", () => {
      const state = {
        otherState: "a",
        cards
      };

      // Act
      const newState = unflipCards(state)([cards[0]]);

      // Assert
      expect(newState.cards[0].flipped).toBe(false);
    });

    it("Should throw error if the card is not found", () => {
      const state = {
        otherState: "a",
        cards
      };

      const card = {
        id: "9",
        svg: "hello",
        flipped: false,
        found: false
      }

      // Act
      const newStateFn = () => unflipCards(state)([card]);

      // Assert
      expect(newStateFn).toThrow("No card was found");
    });
  });

  describe("onCardClick | ", () => {
    it("Should not update state if the card is flipped", () => {
      // Arrange
      const card: Card = {
        id: "0",
        svg: "apple",
        found: false,
        flipped: true
      }

      const state = {
        otherState: "a",
        cards,
        started: false
      };

      // Act
      const newState = onCardClick(state)(card);

      // Assert
      expect(newState).toEqual(state);
    });

    it("Should not update state if the card is found", () => {
      // Arrange
      const card: Card = {
        id: "0",
        svg: "apple",
        found: true,
        flipped: true
      }

      const state = {
        otherState: "a",
        cards,
        started: false
      };

      // Act
      const newState = onCardClick(state)(card);

      // Assert
      expect(newState).toEqual(state);
    });

    it("Should throw Not Implemented exception otherwise", () => {
      // Arrange
      const card: Card = {
        id: "0",
        svg: "apple",
        found: false,
        flipped: false
      }

      const state = {
        otherState: "a",
        cards,
        started: false
      };

      // Act
      const newStateFn = () => onCardClick(state)(card);

      // Assert
      expect(newStateFn).toThrow("Not Implemented");
    });
  });
});
