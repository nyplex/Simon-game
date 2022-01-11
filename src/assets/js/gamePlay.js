import { countDown, getColors, getSound } from "./utilities"


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
export let lightsOn = (game) => {
    $(".circle").addClass("cursor-pointer")
    $("*[data-lens]").on("mousedown, pointerdown", (e) => {
        const data = $(e.target).data("lens")
        let music = getSound(data, game)
        let className = "simon" + data.charAt(0).toUpperCase() + data.slice(1) + "-lightsOn"
        $(e.target).addClass(className)
        music.play()
    })
    $("*[data-lens]").on("mouseup, pointerup", (e) => {
        const data = $(e.target).data("lens")
        let className = "simon" + data.charAt(0).toUpperCase() + data.slice(1) + "-lightsOn"
        $(e.target).removeClass(className)
    })  
}