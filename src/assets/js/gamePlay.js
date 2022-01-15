import { countDown, delay, getColors, getSound } from "./utilities"


/**
 * generateGamePlay
 * ? Generate the Simon's colors depending on the game's level
 * @param {Object} game 
 */
export let generateGamePlay = (game) => {
    getColors(game)
    $("#main-game-container").removeClass("hidden")
    let html = ""
    if(game.level === 3 || game.level === 4 || game.level === 5) {
        html += `<div data-lens="red" class="circle simonRed bg-simonRed simon-1-5"></div> 
                <div data-lens="blue" class="circle simonBlue bg-simonBlue simon-2-5"></div> 
                <div data-lens="yellow" class="circle simonYellow bg-simonYellow simon-3-5"></div> 
                <div data-lens="pink" class="circle simonPink bg-simonPink simon-4-5"> </div> 
                <div data-lens="green" class="circle simonGreen bg-simonGreen simon-5-5"></div>`
    }else {
        html += `<div data-lens="red" class="circle simonRed bg-simonRed simon-1-4"></div> 
                <div data-lens="blue" class="circle simonBlue bg-simonBlue simon-2-4"></div> 
                <div data-lens="yellow" class="circle simonYellow bg-simonYellow simon-3-4"></div>  
                <div data-lens="green" class="circle simonGreen bg-simonGreen simon-4-4"></div>`
    }
    $("#simon-colors-container").html(html)
    countDown(5, game)
}

/**
 * lightsOn
 * ? Light-up the game's colors when the user clicks on them
 * @param {Object} game 
 */
export let colorsInteraction = (game) => {
    $(".circle").addClass("cursor-pointer")
    $("*[data-lens]").on("mousedown, pointerdown", (e) => {
        const data = $(e.target).data("lens")
        let music = getSound(data, game)
        lightsOn(e.target, data)
        if(music != false) {
            music.currentTime = 0;
            music.play()
        }
        
    })
    $("*[data-lens]").on("mouseup, pointerup", (e) => {
        const data = $(e.target).data("lens")
        lightsOff(e.target, data)
    })  
}

/**
 * lightsOn
 * ? Light up a specific color
 * @param {object} event target event
 * @param {string} color 
 */
export let lightsOn = (event, color) => {
    let className = "simon" + color.charAt(0).toUpperCase() + color.slice(1) + "-lightsOn"
        $(event).addClass(className)
}

/**
 * lightsOff
 * ? light off a specific color
 * @param {object} event target event
 * @param {string} color 
 */
export let lightsOff = (event, color) => {
    let className = "simon" + color.charAt(0).toUpperCase() + color.slice(1) + "-lightsOn"
    $(event).removeClass(className)
}


export let rotateColors = (sequence, game) => {
    if(timeToRotate(sequence, game)) {
        let container = $("#simon-colors-container")
        let rotation = Math.random() * (1000 - 360) + 360;
        $(container).css("transform", `rotate(${rotation}deg)`)
    }
    
}


export let timeToRotate = (sequence, game) => {
    let result = (sequence - 1) / 4
    if(game.level === 1 || game.level === 3) {
        return false
    } 
    if(Number.isInteger(result) && result >= 1) {
        return true
    }
    return false
}


export let gameOver = (game) => {
    if(game.multiplayers === false) {
        $("#scoreTitle").text("Game Over!")
        $("#scoreText").text("Here's how you got on...")
        let score = (game.playerData[1] <= 1) ? "color" : "colors"
        let html = `<div class="flex justify-between p-4 bg-gray-200 w-[90%] mx-auto rounded-lg font-IBM font-xl items-center my-4">
                        <p class="text-gray-500 font-bold">Sequence's length</p>
                        <p class="text-gray-700 font-bold text-2xl">${game.playerData[1]} ${score}</p>
                    </div>`
        $("#scoresContainer").html(html)
        $("#score-modal").removeClass("hidden")
        return
    }else{
        let data = game.playerData
        let sorted = []
        for (var score in data) {
            sorted.push([score, data[score]]);
        }
        sorted.sort(function(a, b) {
            return a[1] - b[1];
        });
        let html
        for(let i = 0; i < sorted.length; i++) {
            let score = (sorted[i][1] <= 1) ? "color" : "colors"
             html += `<div class="flex justify-between p-4 bg-gray-200 w-[90%] mx-auto rounded-lg font-IBM font-xl items-center my-4">
                        <p class="text-gray-500 font-bold">Sequence's length</p>
                        <p class="text-gray-700 font-bold text-2xl">${sorted[i][1]} ${score}</p>
                    </div>`
        }
        $("#scoresContainer").html(html)
        $("#score-modal").removeClass("hidden")
        return
    }
}