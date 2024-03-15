class BowlingGame {
  rolls = [];
  currentRoll = 0;

  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }
  score() {
    let Score = 0;
    let i = 0;
    for (let frame = 0; frame < 10; frame++) {
      Score += this.rolls[i] + this.rolls[i + 1];
      i += 2;
    }
    return Score;
  }
}

export default BowlingGame;
