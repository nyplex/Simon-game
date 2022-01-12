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
    let music = new Audio("../src/assets/media/sounds/" + color + ".wav")
    return music
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
        return false
    } 
    if(Number.isInteger(result)) {
        return true
    }else{
        return false
    }
}

/**
 * getColors
 * ? Depending on the game's level, this function generate the colors to play with and store them in the object
 * @param {Object} game 
 */
export let getColors = (game) => {
    if(game.level === 1 || game.level === 2) {
        game.colors.push("red", "blue", "yellow", "green")
    }else{
        game.colors.push("red", "blue", "yellow", "pink", "green")
    }
}

/**
 * countDown
 * ? Display a countdown before the game starts
 * @param {int} time 
 * @param {Object} game 
 */
export let countDown = (time, game) => {
    let interval = setInterval(() => {
        if(time === 0) {
            clearInterval(interval);
            $("#simon-text").text("")
            game.startGame()
        }else{
            time = time - 1
            $("#simon-text").text(time)
        }
    }, 100);
}