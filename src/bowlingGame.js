class BowlingGame {
  Score = 0;
  roll(pins) {  
    this.Score+=pins;
  }
  score(){
    return this.Score;
  }
}

export default BowlingGame;
