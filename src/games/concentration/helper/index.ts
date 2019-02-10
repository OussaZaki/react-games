import { find, each, flatMap, shuffle, filter, includes} from "lodash";
import { fetchCards } from "../service";
import { Card } from "../model";

export const getCards = async (level: number) => {
  const cards = await fetchCards();
  const cards_2 = levelCards(cards, level);
  const cards_4 = duplicateCards(cards_2);
  return generateDeck(cards_4);
};

export const levelCards = (cards: Card[], level: number) => {
  switch (level) {
    case 0:
      return cards.slice(0, 6);

    case 1:
      return cards.slice(0, 10);

    default:
      return cards;
  }
};

export const duplicateCards = (cards: Card[]) =>
  flatMap(cards, card => [card, { ...card, id: `${card.id}_1`, isDuplicate: true }]);

export const generateDeck = (cards: Card[]) => shuffle(cards);

export const flippedCard = (cards: Card[]) =>
  find(cards, card => !card.found && card.flipped);

export const matchingCards = (card1: Card, card2: Card) =>
  card1.id.split("_")[0] === card2.id.split("_")[0];

export const setFoundsCards = (cards: Card[], cardsIds: string[]) =>
  each(cards, card => {
    if (includes(cardsIds, card.id)) card.found = true;
  });

export const allFoundCards = (cards: Card[]) => {
  let foundCards = filter(cards, card => card.found);
  if (foundCards.length == cards.length) return true;
};
