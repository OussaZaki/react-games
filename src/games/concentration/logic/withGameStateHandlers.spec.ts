// @ts-nocheck
import {
  loadGamefromCache,
  initGame,
  startNewGame,
  toggleFlips
} from "./withGameStateHandlers";
import * as helpers from "../helper";
import { Card } from "../model";

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
  describe("loadGamefromCache | ", () => {
    it("Should throw Not Implemented exception", () => {
      // Arrange
      const state = {};

      // Act
      const newStateFn = () => loadGamefromCache()();

      // Assert
      expect(newStateFn).toThrow("Not Implemented");
    });
  });

  describe("initGame | ", () => {
    it("Should set loading to true", () => {
      // Arrange
      const expectedState = {
        loading: true
      };

      // Act
      const newState = initGame()();

      // Assert
      expect(newState).toEqual(expectedState);
    });
  });

  describe("startNewGame | ", () => {
    it("Should fetch cards and set loading to false", async () => {
      // Arrange
      const expectedState = {
        cards,
        loading: false
      };

      // Act
      const newState = startNewGame()(cards);

      // Assert
      expect(newState).toEqual(expectedState);
    });
  });

  describe("toggleCards | ", () => {
    it("Should mark one card as flipped", () => {
      const state = {
        loading: false,
        cards,
        startingTime: date,
        started: true,
        gameDifficulty: 1
      };

      // Act
      const newState = toggleFlips(state)(cards[0].id);

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
      };

      // Act
      const newStateFn = () => toggleFlips(state)(card.id);

      // Assert
      expect(newStateFn).toThrow("No card was found");
    });
  });
});
