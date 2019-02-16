import { find, each, flatMap, shuffle, includes } from "lodash";
import { fetchCards } from "../service";
import { Card, GameDifficulty } from "../model";

export const getCards = async (level: number) => {
  const cards = await fetchCards();
  const sliced = levelCards(cards, level);
  const duplicated = duplicateCards(sliced);

  return shuffleDeck(duplicated);
};

// TODO: implement pagination on server side.
export const levelCards = (cards: Card[], level: GameDifficulty) => {
  switch (level) {
    case GameDifficulty.beginner:
      return cards.slice(0, 6);

    case GameDifficulty.mediun:
      return cards.slice(0, 10);

    case GameDifficulty.advanced:
      return cards.slice(0, 14);

    default:
      return cards;
  }
};

export const duplicateCards = (cards: Card[]) =>
  flatMap(cards, card => [card, { ...card, id: `${card.id}_1` }]);

export const shuffleDeck = (cards: Card[]) => shuffle(cards);

export const flippedCard = (cards: Card[]) =>
  find(cards, card => !card.found && card.flipped);

export const matchingCards = (card1: Card, card2: Card) =>
  card1.id.split("_")[0] === card2.id.split("_")[0];

export const setFoundsCards = (cards: Card[], cardsIds: string[]) =>
  each(cards, card => {
    if (includes(cardsIds, card.id)) card.found = true;
  });

export const setFlippedCards = (cards: Card[], cardsIds: string[]) =>
  each(cards, card => {
    if (includes(cardsIds, card.id)) card.flipped = true;
  });

export const unsetFlippedCards = (cards: Card[], cardsIds: string[]) =>
  each(cards, card => {
    if (includes(cardsIds, card.id)) card.flipped = false;
  });

export const allFoundCards = (cards: Card[]) => {
  each(cards, card => {
    if (!card.found) return false;
  });

  return true;
};
