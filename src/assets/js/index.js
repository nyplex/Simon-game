import "../css/main.css"
import { displayMenu, hideSetup, displayMobileMenu } from "./display"
import { generateGamePlay } from "./gamePlay"
import { Game } from "./Game"


const blueSound = new Audio("../src/assets/media/sounds/blue.wav")
const redSound = new Audio("../src/assets/media/sounds/red.wav")
const greenSound = new Audio("../src/assets/media/sounds/green.wav")
const yellowSound = new Audio("../src/assets/media/sounds/yellow.wav")
const pinkSound = new Audio("../src/assets/media/sounds/pink.wav")
const buzzSound = new Audio("../src/assets/media/sounds/buzz.wav")



let listenForRestart = (game) => {
    $("*[data-restart]").on("click", () => {
        sessionStorage.setItem("game", JSON.stringify(game))
        location.reload()
    })
}


if(sessionStorage.getItem("game")) {

    let value = JSON.parse(sessionStorage.getItem("game"))
    
    let game = new Game(value.theme, value.players, value.mode, value.level, {
        blue: blueSound,
        red: redSound,
        green: greenSound,
        yellow: yellowSound,
        pink: pinkSound,
        buzz: buzzSound
    })
    if(value.playersNumber > 1) {
        game.multiplayers = true
        game.players = []
        for(let i = 0; i < value.playersNumber; i++){
            game.players.push(i + 1)
        }
    }
    console.log(game)
    sessionStorage.clear()
    hideSetup()
    //Display the game header (navigation)
    $("#main-header").removeClass("hidden")
    //display the mobile's nav
    displayMobileMenu()
    generateGamePlay(game)
    listenForRestart(game)
    
}else{
    const game = new Game(1, [1], 1, 1, {
        blue: blueSound,
        red: redSound,
        green: greenSound,
        yellow: yellowSound,
        pink: pinkSound,
        buzz: buzzSound
    })
    displayMenu(game)
    listenForRestart(game)
}