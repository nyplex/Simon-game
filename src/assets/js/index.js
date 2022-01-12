import "../css/main.css"
import { displayMenu } from "./display"
import { Game } from "./Game"


const blueSound = new Audio("../src/assets/media/sounds/blue.wav")
const redSound = new Audio("../src/assets/media/sounds/red.wav")
const greenSound = new Audio("../src/assets/media/sounds/green.wav")
const yellowSound = new Audio("../src/assets/media/sounds/yellow.wav")
const pinkSound = new Audio("../src/assets/media/sounds/pink.wav")


const game = new Game(1, 1, 1, 1, {
    blue: blueSound,
    red: redSound,
    green: greenSound,
    yellow: yellowSound,
    pink: pinkSound
})

displayMenu(game)

