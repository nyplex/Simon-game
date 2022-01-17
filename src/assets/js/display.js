import { event } from "jquery"
import { gameOver, generateGamePlay } from "./gamePlay"

/**
 * displayMenu
 * ? Called from index.js && Display menu and setup interaction when the page is loaded
 * @param {Object} game - Game's object
 */
export let displayMenu = (game) => {
    displayRules()
    displaySetup(game)
}

/**
 * displayRules
 * ? Called from displeyMenu() && Hide setup modal and display rule's modal 
 */
let displayRules = () => {
    $("#rules-btn").on("click", () => {
        $("#setup-modal").slideUp(() => {
            $("#rules-modal").slideDown()
            $("#rules-modal").scrollTop(0)
        })
    })
}

/**
 * displaySetup
 * ? call from displayMenu() && hide rule's modal and display setup modal
 * ? callback setupInteraction
 * @param {object} game - Game's object
 */
let displaySetup = (game) => {
    setupInteraction(game)
    $("#ready-btn").on("click", () => {
        $("#rules-modal").slideUp(() => {
            $("#setup-modal").slideDown()
        })
    })
}

/**
 * hideSetup
 * ? Hide setup modal
 */
let hideSetup = () => {
    $("#setup-modal").slideUp()
    $("#rules-modal").slideUp()
}

/**
 * displayMobileMenu
 * ? Display and hide the mobile menu when user clicks on burger icon
 */
export let displayMobileMenu = () => {
    $("#burger-icon").on("click", () => {
        $("#mobile-menu").toggleClass("hidden")
    })
    $("#resume-game").on("click", () => {
        $("#mobile-menu").toggleClass("hidden")
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
                $("*[data-theme]").removeClass("active-button")
                $("*[data-theme]").addClass("primary-button")
                $(e.target).addClass("active-button")
                break;
            case "players":
                let playersNumber = $(e.target).data("players")
                let playersArray = []
                for(let i = 0; i < playersNumber; i++){
                    playersArray.push(i + 1)
                }
                game.players = playersArray
                if(playersNumber > 1) {
                    game.multiplayers = true
                }
                $("*[data-players]").removeClass("active-button")
                $("*[data-players]").addClass("primary-button")
                $(e.target).addClass("active-button")
                break;
            case "mode":
                game.mode = $(e.target).data("mode")
                $("*[data-mode]").removeClass("active-button")
                $("*[data-mode]").addClass("primary-button")
                $(e.target).addClass("active-button")
                break;
            case "level": 
                game.level = $(e.target).data("level")
                $("*[data-level]").removeClass()
                let levels = $("*[data-level]")
                for(let i = 0; i < levels.length; i++) {
                    switch($(levels[i]).data("level")) {
                        case 1:
                            $(levels[i]).addClass("level1")
                            break;
                        case 2: 
                            $(levels[i]).addClass("level2")
                            break;
                        case 3: 
                            $(levels[i]).addClass("level3")
                            break;
                        case 4: 
                            $(levels[i]).addClass("level4")
                            break;
                        case 5: 
                            $(levels[i]).addClass("level5")
                            break;
                    }
                }
                $(e.target).addClass("active-level")
        }
    })

    $("#playButton").on("click", () => {
        //Hide setup modal
        hideSetup()

        //Display the game header (navigation)
        $("#main-header").removeClass("hidden")
        
        //display the mobile's nav
        displayMobileMenu()
        generateGamePlay(game)
    })
}


/**
 * setupNewGame
 * ? When user click on "Setup new game" button.
 */
export let setupNewGame = () => {
    $("#new-game-score-btn").on("click", () => {
        location.reload();
    })
}

export let gameOverMode3 = (game) => {
    for(let i = 0; i < game.player.length; i++) {
        while(seq === true) {
            gameOver(this)
            let calc = Math.floor(PI * Math.random(0, 1000)) / game.rotate
            if(Number.isInteger(calc)) {
                seq = false
                return calc
            }else{
                return
            }
        }
        for(let j = 0; j < calc; j++) {
            if(rotate) {
                delete Object.keys["p"]
            }else{
                let isIn = Object.keys["i"]
                Array.include(isIn)
                for(let k = 0; k < isIn; k++) {
                    class Player {
                        constructor(score, id) {
                            this.score = score 
                            this.id = id
                        }
                    }
                    let player = new Player(0, Array.isIn)
                    let players = [player]
                    //for each player add up total score 
                    players.forEach(players => {
                        let t = addUp(player.score)
                        if(!Number.isInteger(t)) {
                            return false
                        }
                        Array[player.score[Object.keys["p"]]].addUp((e) => {e.Process(new Player(Object.score), Array[id])})
                        return true
                    });
                }
            }
        }
    }
}