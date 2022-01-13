//on single player MODE 1 if user make mistake => game over() => display modal with results 
// on multi player MODE 1 if user make mistake => playerOUt() => continue with remaining players => Simon repeats the last 
sequence and the game goes on. 
// when the last user make mistake => gameover() => display the results

// on single player MODE 2 , when the game start , simon give the first signal => display message for user to start
// the user will repeat the signal and add one => display a message for user to start a new sequence 
//if user make mistake => gameover() display modal with the results



////////////// this.players MUST be an array

mode 1: simon says

single player: 

// simonSays() => choose a random color 
// addTosequence() => add the random color to the "this.sequence"
// playSequence() => play "this.sequence"
// once the sequence is played, userSays() => listen for user's input, when user clicks on a color, add this color to the "this.userSequence".
//checkSequence() => check the "this.userSequence" with the "this.sequence"
    //if "this.userSequence" == "this.sequence" => back to simonSays()
    //else do nothing => program will keep listening for user's input
    //if the user's input and sequence does NOT match => wrongSequence()
// wrongSequence() => gameOver() => display result 

multiplayers: 

//simonSays() => choose a random color
// addTosequence() => add the random color to the "this.sequence"
// playSequence() => play "this.sequence"
// once the sequence is played, display user's turn() => check if user's turn is in the array "this.players"
// userSays() => listen for user's input, when user clicks on a color, add this color to the "this.userSequence"
//checkSequence() => check the "this.userSequence" with the "this.sequence"
    //if "this.userSequence" == "this.sequence" => back to simonSays()
    //else do nothing => program will keep listening for user's input
    //if user's input does NOT match the sequence => wrongSequence()
//wrongSequence() => display user's out => setup the score and data to the user out. => display message to keep playing with the remaining players. => remove the out player from "this.players" array
// back to playSequence()
// when last players lost => didplay result


mode 2: User Add

single player: 

//SimonSays() => choose a random color
// addToSequence() => add the random color to the "this.sequence"
// playSequence() => play "this.sequence"
// once the sequence is played, userSays() => listen for user's input, when user clicks on a color, add this color to the "this.userSequence"
//checkSequence() => check the "this.userSequence" with the "this.sequence"
//checkSequence() => check the "this.userSequence" with the "this.sequence"
    //if "this.userSequence" == "this.sequence" => listen for a new user input() => add this new user's input into the "this.sequence". then back to userSays()
    // if wrong, gameOver() => display results. 