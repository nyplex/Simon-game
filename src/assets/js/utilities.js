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
 * @returns {boolean} 
 */
export let IncreaseSpeed = (sequence) => {
    let result = (sequence - 1) / 4 
    if(Number.isInteger(result)) {
        return true
    }else{
        return false
    }
}