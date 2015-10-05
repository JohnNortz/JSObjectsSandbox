var Player = require('../lib/player');

var Leaderboard = (function () {
  this.scores = [(new Player("Admin", 1337))];
});


Leaderboard.prototype.addScore = function(name, score) {
  this.scores.push(new Player(name, score));
  //console.log("added player " + name)
}

Leaderboard.prototype.sortScores = function() {

  array = this.scores;

  for(var i = 1; i <= array.length-1; i++) {
    extract = array[i];
    for(var j = 1; j <= i; j++){
      if (extract.score > array[i - j].score) {
        array[i - j + 1] = array[i - j];
        if ((i-j) == 0) {
          array[i - j] = extract;
          break;
        }
      } else {
        array[i - j + 1] = extract;
        break;
      }
    }
  }
  this.scores = array;
}


Leaderboard.prototype.toString = function() {
  this.sortScores();
  a = '\tLeaderboard\n';
  a += 'Scores Counted: ' + this.scores.length + '\n';
  for(var i = 0; i <= this.scores.length - 1; i++) {
    if (this.scores[i] != null) a += "Player: " + this.scores[i].player + "  Score: " + this.scores[i].score.toString() + '\n';
  }
  console.log(a);
  return a;
}


Leaderboard.prototype.top20 = function() {
  this.sortScores();
  a = 'The Top 20: \n';
  for(var i = 0; i <= 19; i++) {
    if (this.scores[i] != null) a += "-\tPlayer: " + this.scores[i].player + "  Score: " + this.scores[i].score.toString() + '\n';
  }
  console.log(a);
  return a;
}

module.exports = Leaderboard;
