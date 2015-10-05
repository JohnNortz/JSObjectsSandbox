var expect = require('chai').expect;
var Leaderboard = require('../lib/leaderboard');
var Player = require('../lib/player');

describe("Leaderboard", function() {
  it('can have new scores added', function(){
    var lb = new Leaderboard();
    lb.addScore('John', 10000);
    lb.addScore('Sam', 7830);
    lb.addScore('Brad', 5001);

    lb.toString();

    expect(lb.scores[0].player).to.equal('John');
    expect(lb.scores[0].score).to.equal(10000);
  });

  it('can be resorted by score', function(){
    var lb = new Leaderboard();
    lb.addScore('Sam', 7830);
    lb.addScore('Brad', 5002);
    lb.addScore('John', 10000);

    lb.sortScores();

    expect(lb.scores[0].player).to.equal('John');
    expect(lb.scores[0].score).to.equal(10000);
  });

  it('can be printed in full by toString method', function(){
    var lb = new Leaderboard();
    lb.addScore('Sam', 7830);
    lb.addScore('Brad', 5003);
    lb.addScore('John', 10000);

    lb.sortScores();

    expect(lb.toString()).to.be.a('string');
  });

  it('Should return ordered top 20 list of scores', function(){
    lb = new Leaderboard();
    lb.addScore('BadMann', 70);
    lb.addScore('Worst Player', 3);
    lb.addScore('Mike', 2333);
    lb.addScore('Bill', 730);
    lb.addScore('Fred', 7410);
    lb.addScore('Chel', 2340);
    lb.addScore('Samson', 9820);
    lb.addScore('Slade', 2428);
    lb.addScore('Murphey', 1520);
    lb.addScore('Geroge', 1550);
    lb.addScore('Zack', 1330);
    lb.addScore('Jack', 5110);
    lb.addScore('Mac', 3440);
    lb.addScore('Rex', 5555);
    lb.addScore('Billy', 723);
    lb.addScore('Kyle', 9832);
    lb.addScore('Steven', 4420);
    lb.addScore('James', 6782);
    lb.addScore('Kirk', 8830);
    lb.addScore('Sam', 3830);
    lb.addScore('Brad', 5000);
    lb.addScore('John', 10000);


    expect(lb.top20()).to.be.a('string');
  });

})
