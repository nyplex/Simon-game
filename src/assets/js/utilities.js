/**
 * delay
 * 
 * @param {int} time 
 * @returns new Promise
 */
export let delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}


/**
 * getSound
 * @param {string} color 
 * @returns {Object} new Audio 
 */
export let getSound = (color, game) => {
    if(game.theme === 4) {
        return false
    }
    return game.sounds[color]
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
    if(game.level === 2 || game.level === 4) {
        game.speed = 300
        return
    }
    if(Number.isInteger(result) && result >= 1) {
        if(game.speed >= 250 && game.speed <= 500) {
            game.speed -= 100
        }else if(game.speed <= 250 && game.speed >= 100) {
            game.speed = 50
        }else{
            game.speed = 100
        }
    }
    return
}


/**
 * countDown
 * ? Display a countdown before the game starts
 * @param {int} time 
 * @param {Object} game 
 */
export let countDown = (time, game) => {
    let interval = setInterval(() => {
        if(time === 1) {
            clearInterval(interval);
            $("#simon-text").text("")
            game.simonSay()
        }else{
            time = time - 1
            $("#simon-text").text(time)
        }
    }, 100);
}


/**
 * usersTurn
 * @param {Object} game 
 * @returns {string}
*/
export let usersTurn = (game) => {
    if(game.multiplayers === false) {
        if(game.mode === 1) {
            game.playersTurn = 1
            return "Your Turn"
        }else if (game.mode === 2) {
            game.playersTurn = 1
            return "Repeat the sequence"
        }
        
    }else{
        if(game.playersTurn >= game.players.length) {
            game.playersTurn = 0
        }
        if(game.mode === 1) {
            let html = game.players[game.playersTurn] + ",<br> it's your turn"
            game.playersTurn += 1
            return html
        }else if(game.mode === 2) {
            let html =  game.players[game.playersTurn] + ", repeat the sequence"
            game.playersTurn += 1
            return html
        }
        
    }
}