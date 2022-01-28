/**
 * delay
 * @param {int} time 
 * @returns new Promise
 */
export let delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}


/**
 * IncreaseSpeed
 * ? This function return true if the game must increase the speed
 * @param {int} sequence 
 * @param {Object} game
 * @returns {boolean} 
 */
export let IncreaseSpeed = (sequence, game) => {
    let result = (sequence - 1) / 4
    game.speed = (game.level == 2 || game.level == 4) ? 300 : 500
    if(Number.isInteger(result) && result >= 1 && game.level != 2 && game.level != 4) {
        if(game.speed >= 250 && game.speed <= 500) game.speed -= 100
        else if(game.speed <= 250 && game.speed >= 100) game.speed -= 50
        else game.speed = 100
    }
}


/**
 * usersTurn
 * @param {Object} game 
 * @returns {string}
*/
export let usersTurn = (game) => {
    if(game.multiplayers === false) {
        game.playersTurn = 1
        return (game.mode == 1) ? "Your Turn" : "Repeat the sequence"
    }else{
        if(game.playersTurn >= game.players.length) game.playersTurn = 0
        let html = game.players[game.playersTurn]
        game.playersTurn += 1
        return html += (game.mode == 1) ? ",<br> it's your turn" : ", repeat the sequence"
    }
}