import { lifecycle } from "recompose";

import { GameProps } from "../model";
import { keyboardInputHandler } from "../helpers/keyboardInputHandler";

export const withLifecycle = lifecycle<GameProps, {}>({
  componentWillMount() {
    this.props.initGame();

    document.addEventListener("keydown", (event: KeyboardEvent) =>
      keyboardInputHandler(event, this.props.onMove)
    );
  },

  // TODO: reference check memory leak.
  componentWillUnmount() {
    document.removeEventListener("keydown", (event: KeyboardEvent) =>
      keyboardInputHandler(event, this.props.onMove)
    );
  }
});

export default withLifecycle;
