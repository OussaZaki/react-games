import { Direction } from "../model";
import { GameState } from "../logic/withGameStateHandlers";

type KeyboardMap = {
  [key: number] : Direction;
};

const KEYBOARD_MAP: KeyboardMap = {
  38: Direction.Up,
  39: Direction.Right,
  40: Direction.Down,
  37: Direction.Left
};

/**
 * Prevent calling state hundler function on unsupported keyboard inputs.
 * @param event KeyboardEvent
 * @param callbackMove StateHandler to invoke on user input.
 */
export const keyboardInputHandler = (
  event: KeyboardEvent,
  callbackMove: (d: Direction) => void
) => {
  const direction = KEYBOARD_MAP[event.which];

  if (direction) {
    event.preventDefault();
    callbackMove(direction);
  }
};

export default keyboardInputHandler;
