class BowlingGame {
  rolls = [];
  currentRoll = 0;

  roll(pins) {  
    this.rolls[this.currentRoll++] = pins;
  }
  score(){
    let Score = 0;
    for(let i=0; i< this.rolls.length; i++){
      Score += this.rolls[i];
    }
    return Score;
  }
}

export default BowlingGame;
