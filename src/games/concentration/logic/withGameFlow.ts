import { withHandlers } from "recompose";

import { GameProps, Card } from "../model";

export const onCardClick = (props: GameProps) => (card: Card) => {
  if (card.found || card.flipped) {
    return;
  }

  if (!props.started) {
    props.startTimer();
  }

  // Handle the first flipped card.
  if (!props.cardOnHold) {
    props.toggleHoldCard(card.id);
    props.toggleFlips(card.id);
    return;
  }

  props.toggleFlips(card.id);
  setTimeout(() => {
    props.cardsComparison(props.cardOnHold!, card.id);
  }, 1000);
};

export const withGameFlow = withHandlers({
  onCardClick
});

export default withGameFlow;