import api from "../mock/index.json";
import { Card } from "../model.js";

const _fetchCards = () => {
  return api.cards.map(
    card =>
      ({
        id: card.id.toString(),
        svg: card.svg,
        flipped: false,
        found: false
      } as Card)
  );
};

export function fetchCards(): Promise<Card[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(_fetchCards());
    }, 500);
  });
}
