import BowlingGame from "./bowlingGame.js";

describe("simple score", () => {
  it("should return a score of 0 for the 20 rolls", () => {
    let g = new BowlingGame;
    for(let i = 0; i < 20; i++) {
      g.roll(0);
    }
    expect(g.score()).toEqual(0);
  });
});