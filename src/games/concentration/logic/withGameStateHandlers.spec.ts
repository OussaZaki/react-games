import {
  loadGamefromCache,
  initGame,
  startNewGame,
  startTimer
} from "./withGameStateHandlers";
import { Card } from "../model";

const cards: Card[] = [
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
jest.spyOn(Date, "now").mockImplementation(() => date);

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

  describe("startTimer | ", () => {
    it("Should mark one card as flipped", () => {
      const state = {
        started: true,
        startingTime: date
      };

      // Act
      const newState = startTimer()();

      // Assert
      expect(newState).toEqual(state);
    });
  });
});
