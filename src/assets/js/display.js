import { startGame } from "./startGame"

export let displayMenu = (game) => {
    displayRules()
    displaySetup(game)
}

let displayRules = () => {
    $("#blur-bg").removeClass("hidden")
    $("#rules-btn").on("click", () => {
        $("#setup-modal").slideUp(() => {
            $("#rules-modal").slideDown()
            $("#rules-modal").scrollTop(0)
        })
    })
}

let displaySetup = (game) => {
    $("#blur-bg").removeClass("hidden")
    setupInteraction(game)
    $("#ready-btn").on("click", () => {
        $("#rules-modal").slideUp(() => {
            $("#setup-modal").slideDown()
        })
    })
}

let hideSetup = () => {
    $("#setup-modal").slideUp()
    $("#rules-modal").slideUp()
    $("#blur-bg").addClass("hidden")
}

export let displayMobileMenu = () => {
    $("#burger-icon").on("click", () => {
        $("#mobile-menu").toggleClass("hidden")
    })
    $("#resume-game").on("click", () => {
        $("#mobile-menu").toggleClass("hidden")
    })
}


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
                game.players = $(e.target).data("players")
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
        hideSetup()
        game.generateGamePlay()
    })
}
