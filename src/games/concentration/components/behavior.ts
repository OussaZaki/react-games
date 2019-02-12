import { fetchCards } from "../service";
import { getCards } from "../helper";
import { GameDifficulty } from "../model";

const loadGamefromCache = () => {
  throw "Not Implemented";
};

const newGame = async () => {
  const gameDifficulty = GameDifficulty.beginner;
  const cards = await getCards(gameDifficulty);
  return {
    cards,
    loading: false
  };
};

const incrementTimer = ({ timer }) => {
  return {
    timer: timer + 1
  };
};

const incrementTimerRef = (state) => {
    return setInterval(() => incrementTimer, 1000);
  };

const startGame = () => {
  this.setState({
    ...this.state,
    started: true,
    startingTime: dayjs()
  });

  const intervalRef = 

  this.setState({
    ...this.state,
    intervalRef
  });
};

flipCard = (card: Card) => {
  if (card.found || card.flipped) return;

  if (!this.state.started) {
    this.startGame();
  }

  let cards = cloneDeep(this.state.cards); // Copy the cards set for the new state mutation
  const index = findIndex(this.state.cards, { id: card.id });

  cards[index].flipped = true; // Flip the card in the coppy array
  // Mutate the state
  this.setState({
    ...this.state,
    flips: this.state.flips + 1,
    cards
  });

  // Find if there's a previously flipped card
  const previouslyFlipped = flippedCard(this.state.cards);
  if (!previouslyFlipped) {
    this.setState({
      flipTimer: setTimeout(() => {
        console.log("Game over");
      }, 6000)
    });
  } else {
    this.state.flipTimer && clearTimeout(this.state.flipTimer);
    if (matchingCards(card, previouslyFlipped)) {
      setTimeout(() => {
        cards = setFoundsCards(cards, [card.id, previouslyFlipped.id]);
        this.setState({
          ...this.state,
          cards
        });
      }, 350);
      if (allFoundCards(cards)) {
        console.log("finito");
      }
    } else {
      const previous_flipped = findIndex(this.state.cards, {
        id: previouslyFlipped.id
      });

      setTimeout(() => {
        cards[index].flipped = false;
        cards[previous_flipped].flipped = false;
        this.setState({
          ...this.state,
          cards
        });
      }, 1000);
    }
  }
};
