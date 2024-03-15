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
      if(this.isStrike(frameIndex)){
        Score += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      }
      else if (this.isSpare(frameIndex)) {
        Score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      }
      else {
        Score += this.sumOfPinsInFrame(frameIndex);
        frameIndex += 2;
      }
    }
    return Score;
  }

  sumOfPinsInFrame(frameIndex){
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
  }

  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }

  spareBonus(frameIndex){
    return this.rolls[frameIndex + 2];
  }

  isStrike(frameIndex) {
    return this.rolls[frameIndex] === 10;
  }

  strikeBonus(frameIndex){
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }
}

export default BowlingGame;
