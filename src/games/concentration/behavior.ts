import { getCards } from "./helper";
import { GameDifficulty, Card } from "./model";
import dayjs from "dayjs";

const loadGamefromCache = () => {
  throw "Not Implemented";
};

const newGame = async () => {
  // TODO: get game diffuclty or pass it as an argument.
  const gameDifficulty = GameDifficulty.beginner;
  const cards = await getCards(gameDifficulty);
  return {
    cards,
    loading: false
  };
};

const incrementTimer = state => {
  return {
    ...state,
    timer: state.timer + 1
  };
};

const incrementTimerRef = state => {
  return setInterval(() => incrementTimer, 1000);
};

const startGame = state => {
  const intervalRef = setInterval(state => incrementTimerRef(state), 1000);

  return {
    ...state,
    started: true,
    intervalRef
  };
};

const flipCard = (card: Card) => {
  if (card.found || card.flipped) return;

  
  
};
