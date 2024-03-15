class BowlingGame {
  rolls = [];
  currentRoll = 0;

  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }
  score() {
    let Score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if(this.rolls[frameIndex] + this.rolls[frameIndex+1] === 10){
        Score += 10 + this.rolls[frameIndex+2];
      }
      else{
        Score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
      }
      frameIndex += 2;
    }
    return Score;
  }
}

export default BowlingGame;
