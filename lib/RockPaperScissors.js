function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
}

Game.prototype.Pairs= {
  rock:["crushes", "scissors", "crushes", "lizard"],
  scissors: ["cuts", "paper", "decapitates", "lizard"],
  paper: ["covers", "rock", "disproves", "Spock"],
  Spock: ["vaporizes", "rock", "smashes", "scissors"],
  lizard: ["posions", "Spock", "eats", "paper"]
}

Game.prototype.isSamePick = function() {
  return this.player1.pick === this.player2.pick; 
}

Game.prototype.determineWinner = function() {
  if(this.isSamePick()) return null;
  if(this.Pairs[this.player1.pick].indexOf(this.player2.pick) !== -1) {
    this.winner = this.player1;
    this.loser = this.player2;
  	return this.player1;
  } else {
    this.winner = this.player2;
    this.loser = this.player1;
  	return this.player2;
  }
}

Game.prototype.message = function() {
  if(this.isSamePick()) return ("It's a draw!");
  var verbIndex = this.Pairs[this.winner.pick].indexOf(this.loser.pick) - 1;
  return (this.winner.pick + " " + this.Pairs[this.winner.pick][verbIndex] + " " + this.loser.pick + "...");
} 

Game.prototype.conclusion = function() {
  if(this.isSamePick()) {
    return("Rematch!");
  }
  else if(this.winner == this.player1) {
    return("You win!");
  }
  else {
    return("You lose!");
  }
}
