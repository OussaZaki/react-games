import { withHandlers } from "recompose";

import { GameProps, Card } from "../model";

export const onCardClick = (props: GameProps) => (card: Card) => {
  if (!props.started) {
    props.startTimer();
  }

  if (card.found || card.flipped) {
    return;
  }
  props.toggleFlips(card.id);

  // Handle the first flipped card.
  const { cardOnHold } = props;
  if (!cardOnHold) {
    props.toggleHoldCard(card.id);
    return;
  }

  // Handle second card flip and Delay comparison for a good UX
  setTimeout(() => {
    props.cardsComparison(cardOnHold, card.id);
  }, 1000);
};

export const withGameFlow = withHandlers({
  onCardClick
});

export default withGameFlow;