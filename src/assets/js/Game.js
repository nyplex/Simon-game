export class Game {
    constructor(theme, players, mode, level) {
        this.theme = theme
        this.players = players
        this.mode = mode
        this.level = level
    }

    generateGamePlay() {
        this.#displayHeader()

        if(this.level === 3 || this.level === 4 || this.level === 5) {
            console.log("genrate 5 colors");
        }else {
            console.log("generate 4 colors");
        }
    }

    #displayHeader() {
        $("#main-header").removeClass("hidden")
        this.#displayRules()
    }

    #displayRules() {
        $("#rules-button-dk, #rules-button-mb").on("click", () => {
            $("#main-header").addClass("hidden")
            $("#blur-bg").removeClass("hidden")
            $("#rules-modal").slideDown()
        })
    }
}