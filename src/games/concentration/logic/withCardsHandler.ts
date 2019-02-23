import { withHandlers } from "recompose";

import { matchingCards } from "../helper";
import { GameProps } from "../model";

export const cardsComparison = (props: GameProps) => (
  cardOnHold: string,
  currentCard: string
) => {
  if (matchingCards(cardOnHold, currentCard)) {
    props.setFounds(cardOnHold, currentCard);
  } else {
    props.toggleFlips(cardOnHold, currentCard);
  }

  props.toggleHoldCard();
};

export const withCardsHandler = withHandlers({
  cardsComparison
});

export default withCardsHandler;