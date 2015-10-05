LEADERBOARDs, Javascript edition

# leaderboard.js

  leaderboard.js defines a leaderboard object that contains an array 'scores' which will contain player obejcts with names and scores.


  #leaderboard methods:

    leaderboard can be added to by calling leaderboard.addScore(player_name, player_score)
    this will create a new player object and insert it into the leaderboard.

    the above method adds the new player to the end which is most likely not where you want it to be placed. leaderboard includes and insertion sort method called like "leaderboard.sortScores" which will reorganize the list by score from highest to lowest


    the board object has two print methods, 'toString' and 'top20.' 'toString' returns a string that shows the entire leaderboard while 'top20' gives a list of only the top 20 players

    both of these methods automatically call sortScores before printing the leaderboard.
