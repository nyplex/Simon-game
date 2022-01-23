import { generateGamePlay } from "./gamePlay"

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
export let hideSetup = () => {
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
        $("#header-logo").hide()
        $("#burger-icon").hide()
    })
    $("#resume-game").on("click", () => {
        $("#mobile-menu").toggleClass("hidden")
        $("#header-logo").show()
        $("#burger-icon").show()
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
                game.playersNumber = playersNumber
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

        //this function will open the modal to get user's name , on this modal, the button play will launch the two previous functions
        if(game.playersNumber > 1) {
            getUsersName(game)
        }else{
            //Display the game header (navigation)
            $("#main-header").removeClass("hidden")
            //display the mobile's nav
            displayMobileMenu()
            generateGamePlay(game)
        }
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


export let getUsersName = (game) => {
    let html = ""
    for(let i = 0; i < game.playersNumber; i++) {
        html += `<input data-username="${i+1}" type="text" name="" id="" placeholder="player ${i + 1} name" class="p-2 border-2 my-2 border-gray-900 rounded-xl placeholder:text-gray-600 text-gray-600">`
    }
    $("#setupUserNameContainer").html(html)
    $("#username-modal").slideDown()
    $("#runMultiplayer").on("click", () => {
        let playersName = $("*[data-username]")
        for(let i = 0; i < playersName.length; i++) {
            game.players[i] = $(playersName[i]).val()
            game.usernames.push($(playersName[i]).val())
        }
        console.log(game);
        $("#username-modal").slideUp()
        //Display the game header (navigation)
        $("#main-header").removeClass("hidden")
        //display the mobile's nav
        displayMobileMenu()
        generateGamePlay(game)
    })
}
