import BowlingGame from "./bowlingGame.js";

describe("BowlingGame", () => {
  let g;

  beforeEach(function() {
    g = new BowlingGame();
  });

  function rollMany(n, pins) {
    for (let i = 0; i < n; i++)
      g.roll(pins);
  }

  function rollSpare(){
    g.roll(5);
    g.roll(5);
  }

  function rollStrike(){
    g.roll(10);
  }

  it("should return a score of 0 for the 20 rolls", () => {
    rollMany(20, 0);
    expect(g.score()).toEqual(0);
  });

  it("should add the pines of the 20 rolls", () => {
    rollMany(20, 1);
    expect(g.score()).toEqual(20);
  });

  it("should consider the spare bonus", () => {
    rollSpare();
    g.roll(3);
    rollMany(17, 0);
    expect(g.score()).toEqual(16);
  });
  
  it("should consider the strike bonus", () => {
    rollStrike();
    g.roll(3);
    g.roll(4);
    rollMany(16, 0);
    expect(g.score()).toEqual(24);
  });

  it("should return the score of a perfect game", () => {
    rollMany(12, 10);
    expect(g.score()).toEqual(300);
  });
});