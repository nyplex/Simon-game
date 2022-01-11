import { lightsOn } from "./gamePlay"
import { countDown, delay, getColors, getSequenceNumber, getSound, IncreaseSpeed } from "./utilities"

export class Game {
    constructor(theme, players, mode, level) {
        this.theme = theme
        this.players = players
        this.mode = mode
        this.level = level
        this.sequence = []
        this.colors = []
        this.speed = 500
        this.userSequence = []
    }

    /**
     * startGame
     * ? This function start the game
     */
    startGame() {
        this.simonSay()
    }

    /**
     * addToSequence
     * ? This function take a color as parameter and will add this color to the sequence. It will then play the sequence. 
     * @param {string} color 
     */
    addToSequence(color) {
        this.sequence.push(color)
        this.#playSequence(this.sequence)
    }

    /**
     * simonSay
     * ? This function randomly choose a new color to add to the sequence
     */
    simonSay() {
        const newColors = this.colors[Math.floor(Math.random()*this.colors.length)];
        this.addToSequence(newColors)  
    }

    userSays() {
        $("#simon-text").text("Your Turn")
        lightsOn(this)
        $("*[data-lens]").on("click", (e) => {
            let color = $(e.target).data("lens")
            this.userSequence.push(color)
            this.checkSequence()
        })
    }

    checkSequence() {
        let length = this.userSequence.length - 1
        let colorToCheck = this.sequence[length]
        let lastUserColor = this.userSequence[length]
        if(lastUserColor === colorToCheck) {
            if(this.userSequence.length === this.sequence.length) {
                $("*[data-lens]").off()
                $(".circle").removeClass("cursor-pointer")
                this.userSequence = []
                this.simonSay()
                return
            }  
        }else{
            $("*[data-lens]").off()
            $(".circle").removeClass("cursor-pointer")
            $("#simon-text").text("GAME OVER")
            return
        }
    }

    
    /**
     * playSequence
     * ? This private function will play back the colors sequence with sound FX.
     * @param {array} sequence 
     */
    async #playSequence(sequence) {
        $("#simon-text").text("SIMON SAYS")
        await delay(1000)
        if(IncreaseSpeed(sequence.length)) {
            if(this.speed <= 300) {
                this.speed -= 100
            }
        }
        for(let i = 0; i < sequence.length; i ++) {
            let className = sequence[i].charAt(0).toUpperCase() + sequence[i].slice(1)
            let music = getSound(sequence[i], this)
            if(music != false) {
                music.play()
            }
            $(`*[data-lens="${sequence[i]}"]`).addClass("simon" + className + "-lightsOn")
            await delay(this.speed)

            $(`*[data-lens="${sequence[i]}"]`).removeClass("simon" + className + "-lightsOn")
            await delay(this.speed)
        }
        this.userSays()
    }
}