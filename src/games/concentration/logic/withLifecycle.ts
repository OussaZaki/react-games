import { lifecycle } from "recompose";

import { getCards } from "../helper";
import { GameProps } from "../model";

export const withLifecycle = lifecycle<GameProps, {}>({
  async componentWillMount() {
    this.props.initGame();
    const cards = await getCards(this.props.gameDifficulty);
    this.props.startNewGame(cards);
  }
});

export default withLifecycle;