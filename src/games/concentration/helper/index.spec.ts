import { duplicateCards, firstCardClick } from "./index";
import { Card } from "../model";

const date = Date.now();
const cards: Card[] = [
  {
    id: "1",
    svg: "apple",
    flipped: false,
    found: false
  },
  {
    id: "2",
    svg: "orenji",
    flipped: false,
    found: false
  },
  {
    id: "3",
    svg: "pineapple",
    flipped: false,
    found: false
  }
];

describe("Memory helper | ", () => {
  describe("duplicateCards | ", () => {
    it("Should duplicate all cards and mark them duplicated", () => {
      const duplicatedCards = duplicateCards(cards);

      expect(duplicatedCards.length).toBe(6);
      for (let i = 0; i < cards.length; i++) {
        expect(duplicatedCards[2 * i]).toEqual(cards[i]);
        expect(duplicatedCards[2 * i + 1]).toEqual({
          ...cards[i],
          id: cards[i].id + "_1"
        });
      }
    });

    it("Should return an empty array if passed an empty one", () => {
      const duplicatedCards = duplicateCards([]);

      expect(duplicatedCards).toEqual([]);
    });

    it("Should return an empty array if passed undefined", () => {
      const duplicatedCards = duplicateCards([]);

      expect(duplicatedCards).toEqual([]);
    });
  });

  describe("firstClick | ", () => {
    it("Should save the time and mark the game as started", () => {
      // Arrange
      jest.spyOn(Date, "now").mockReturnValue(date);

      const expectedState = {
        started: true,
        startingTime: date
      };

      // Act
      const newState = firstCardClick();

      // Assert
      expect(newState).toEqual(expectedState);
    });
  });
});
