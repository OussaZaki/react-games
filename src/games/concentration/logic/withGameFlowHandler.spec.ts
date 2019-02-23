describe("onCardClick | ", () => {
    it("Should call first click if the game hasn't started yet", () => {
      // Arrange
      const startTimerMock = jest.spyOn(helpers, "startTimer");
      const card: Card = {
        id: "0",
        svg: "apple",
        found: false,
        flipped: false
      };

      const state = {
        loading: false,
        cards,
        startingTime: 0,
        started: false,
        gameDifficulty: 0
      };

      // Act
      const newState = onCardClick(state)(card);

      // Assert
      expect(startTimerMock).toBeCalled();
    });

    it("Should not update state if the card is flipped", () => {
      // Arrange
      const card: Card = {
        id: "0",
        svg: "apple",
        found: false,
        flipped: true
      };

      const state = {
        loading: false,
        cards,
        startingTime: 0,
        started: true,
        gameDifficulty: 0
      };

      // Act
      const newState = onCardClick(state)(card);

      // Assert
      expect(newState).toBeUndefined();
    });

    it("Should not update state if the card is found", () => {
      // Arrange
      const card: Card = {
        id: "0",
        svg: "apple",
        found: true,
        flipped: true
      };

      const state = {
        loading: false,
        cards,
        startingTime: 0,
        started: true,
        gameDifficulty: 0
      };

      // Act
      const newState = onCardClick(state)(card);

      // Assert
      expect(newState).toBeUndefined();
    });

    it("Should throw Not Implemented exception otherwise", () => {
      // Arrange
      const card: Card = {
        id: "0",
        svg: "apple",
        found: false,
        flipped: false
      };

      const state = {
        loading: false,
        cards,
        startingTime: 0,
        started: true,
        gameDifficulty: 0
      };

      // Act
      const newStateFn = () => onCardClick(state)(card);

      // Assert
      expect(newStateFn).toThrow("Not Implemented");
    });
  });