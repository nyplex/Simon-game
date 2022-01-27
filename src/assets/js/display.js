import { loadSoundFiles } from "."
import { generateGamePlay } from "./gamePlay"

/**
 * displayMenu
 * ? Called from index.js && Display menu and setup interaction when the page is loaded
 * @param {Object} game - Game's object
 */
export let displayMenu = (game) => {
    setupInteraction(game)
    $("#rules-btn, #ready-btn").on("click", () => {
        $("#setup-modal").slideUp(() => {
            $("#rules-modal").slideDown().scrollTop(0)
        })
    })
    $("#ready-btn").on("click", () => {
        $("#rules-modal").slideUp(() => {
            $("#setup-modal").slideDown()
        })
    })
    $("#burger-icon").on("click", () => {
        $("#mobile-menu").toggleClass("hidden")
        $("#header-logo, #burger-icon").hide()
    })
    $("#resume-game").on("click", () => {
        $("#mobile-menu").toggleClass("hidden")
        $("#header-logo, #burger-icon").show()
    })
}


/**
 * setupInteraction
 * ? On the setup modal, when user click on the buttons change BG color and add the value to Game object.
 * @param {object} game - Game's object
 */
let setupInteraction = (game) => {
    $("#setupDataContainer").on("click", (e) => {
        if(e.target.localName != "button") {
            return
        }
        const dataObject = $(e.target).data()
        const dataKeys = Object.keys(dataObject)[0]
        switch(dataKeys) {
            case "theme":
                game.theme = $(e.target).data("theme")
                $("*[data-theme]").removeClass("active-button").addClass("primary-button")
                $(e.target).addClass("active-button")
                if($(e.target).data("theme") === 2) {
                    game.sounds = loadSoundFiles("fx2")
                }else if($(e.target).data("theme") === 3) {
                    game.sounds = loadSoundFiles("fx3")
                }
                break;
            case "players":
                game.playersNumber = $(e.target).data("players")
                game.players = []
                for(let i = 0; i < game.playersNumber; i++){
                    game.players.push(i + 1)
                }
                game.multiplayers = (game.playersNumber > 1) ? true : false
                $("*[data-players]").removeClass("active-button").addClass("primary-button")
                $(e.target).addClass("active-button")
                break;
            case "mode":
                game.mode = $(e.target).data("mode")
                $("*[data-mode]").removeClass("active-button").addClass("primary-button")
                $(e.target).addClass("active-button")
                break;
            case "level": 
                game.level = $(e.target).data("level")
                $("*[data-level]").removeClass()
                let levels = $("*[data-level]")
                for(let i = 0; i < levels.length; i++) {
                    $(levels[i]).addClass("level" + $(levels[i]).data("level"))
                }
                $(e.target).addClass("active-level")
        }
    })

    $("#playButton").on("click", () => {
        $("#setup-modal, #rules-modal").slideUp()
        if(game.playersNumber > 1) {
            getUsersName(game)
        }else{
            $("#main-header").removeClass("hidden")
            generateGamePlay(game)
        }
    })
}


/**
 * getUsersName
 * ? this function only if more than 1 player with take the name of each players and set them in the game object
 * @param {Object} game 
 */
export let getUsersName = (game) => {
    let html = ""
    for(let i = 0; i < game.playersNumber; i++) {
        html += `<input data-username="${i+1}" type="text" name="" id="" placeholder="player ${i + 1} name" class="p-2 border-2 mb-1 mt-2 border-gray-900 rounded-xl placeholder:text-gray-600 text-gray-600"><span data-username="${i+1}" class="text-red-700 mb-2 font-semibold ml-1"></span>`
    }
    $("#setupUserNameContainer").html(html)
    $("#username-modal").slideDown()
    $("#runMultiplayer").on("click", () => {
        let playersName = $("input*[data-username]")
        for(let i = 0; i < playersName.length; i++) {
            let value = $(playersName[i]).val()
            value = value.replace(/\s+/g,'')
            if(value == "" || value.length <= 1 || value.length > 10) {
                $(`span*[data-username="${i+1}"]`).text("You must enter a name between 2 and 10 characters")
                return
            }else{
                $(`span*[data-username="${i+1}"]`).text("")
                game.players[i] = value
                game.usernames.push(value)
            }
            
        }
        $("#username-modal").slideUp()
        $("#main-header").removeClass("hidden")
        generateGamePlay(game)
    })
}
