import "../css/main.css"
import { displayMenu, hideSetup, displayMobileMenu } from "./display"
import { generateGamePlay } from "./gamePlay"
import { Game } from "./Game"



export let loadSoundFiles = (fileName, folder) => {
    const src = `../src/assets/media/sounds/${folder}/`
    return new Audio(src + fileName + ".wav")
}

const soundObject = {
    blue: loadSoundFiles("blue", "fx1"),
    red: loadSoundFiles("red", "fx1"),
    green: loadSoundFiles("green", "fx1"),
    yellow: loadSoundFiles("yellow", "fx1"),
    pink: loadSoundFiles("pink", "fx1"),
    buzz: loadSoundFiles("buzz", "fx1"),
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