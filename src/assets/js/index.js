import "../css/main.css"
import { displayMenu, hideSetup, displayMobileMenu } from "./display"
import { generateGamePlay } from "./gamePlay"
import { Game } from "./Game"



let loadSoundFiles = (fileName) => {
    const src = "../src/assets/media/sounds/"
    return new Audio(src + fileName + ".wav")
}

const soundObject = {
    blue: loadSoundFiles("blue"),
    red: loadSoundFiles("red"),
    green: loadSoundFiles("green"),
    yellow: loadSoundFiles("yellow"),
    pink: loadSoundFiles("pink"),
    buzz: loadSoundFiles("buzz"),
}

let listenForRestart = (game) => {
    $("*[data-restart]").on("click", () => {
        sessionStorage.setItem("game", JSON.stringify(game))
        location.reload()
    })
}


if(sessionStorage.getItem("game")) {

    let value = JSON.parse(sessionStorage.getItem("game"))
    let game = new Game(value.theme, value.usernames, value.mode, value.level, soundObject, value.usernames, value.playersNumber)
    if(value.playersNumber > 1) {
        game.multiplayers = true
        game.players = []
        for(let i = 0; i < game.usernames.length; i++) {
            game.players.push(game.usernames[i])
        }
    }else{
        game.players = [1]
    }
    sessionStorage.clear()
    hideSetup()
    //Display the game header (navigation)
    $("#main-header").removeClass("hidden")
    //display the mobile's nav
    displayMobileMenu()
    generateGamePlay(game)
    listenForRestart(game)
    
}else{
    const game = new Game(1, [1], 1, 1, soundObject, [], 1)
    displayMenu(game)
    listenForRestart(game)
}