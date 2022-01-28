import "../css/main.css"
import { displayMenu, displayMobileMenu } from "./display"
import { generateGamePlay } from "./gamePlay"
import { Game } from "./Game"


/**
 * loadSoundFiles
 * ? this function will load the files once the user has configured the game
 * 
 * @param {string} fileName 
 * @param {string} folder 
 * @returns {Object} Audio
 */
export let loadSoundFiles = (folder) => {
    const src = `../src/assets/media/sounds/${folder}/`
    const obj = {}
    const sounds = ["blue", "red", "green", "yellow", "pink", "buzz"]
    for(let i = 0; i < sounds.length; i++) {
        obj[sounds[i]] = new Audio(src + sounds[i] + ".wav")
    }
    return obj
}


/**
 * listenForRestart
 * ? This function store the game object in the storage session and then reload the page
 * @param {Object} game 
 */
let listenForRestart = (game) => {
    $("*[data-restart]").on("click", () => {
        sessionStorage.setItem("game", JSON.stringify(game))
        location.reload()
    })
}


if(sessionStorage.getItem("game")) {
    let value = JSON.parse(sessionStorage.getItem("game"))
    let game = new Game(value.theme, value.usernames, value.mode, value.level, loadSoundFiles("fx1"), value.usernames, value.playersNumber)
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
    $("#setup-modal, #rules-modal").slideUp()
    $("#main-header").removeClass("hidden")
    generateGamePlay(game)
    listenForRestart(game)
    
}else{
    const game = new Game(1, [1], 1, 1, loadSoundFiles("fx1"), [], 1)
    displayMenu(game)
    listenForRestart(game)
}