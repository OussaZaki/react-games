import { lifecycle } from "recompose";

import { GameProps } from "../model";

export const withLifecycle = lifecycle<GameProps, {}>({
  async componentWillMount() {
    this.props.initGame();
  }
});

export default withLifecycle;
