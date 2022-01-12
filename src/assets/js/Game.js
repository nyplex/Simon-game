import { colorsInteraction, lightsOff, lightsOn } from "./gamePlay"
import { delay, getSound, IncreaseSpeed } from "./utilities"

export class Game {
    constructor(theme, players, mode, level, sounds) {
        this.theme = theme
        this.players = players
        this.mode = mode
        this.level = level
        this.sounds = sounds
        this.sequence = []
        this.colors = []
        this.speed = 500
        this.userSequence = []
    }


    startGame() {
        this.simonSay()
    }

    simonSay() {
        const newColors = this.colors[Math.floor(Math.random()*this.colors.length)];
        this.addToSequence(newColors)  
    }

    userSays() {
        $("#simon-text").text("Your Turn")
        colorsInteraction(this)
        $("*[data-lens]").on("click", (e) => {
            let color = $(e.target).data("lens")
            this.userSequence.push(color)
            this.checkSequence()
        })
    }

    addToSequence(color) {
        this.sequence.push(color)
        this.#playSequence(this.sequence)
    }


    /**
     * checkSequence
     * ? Check if last user input match the game's sequence. If true, keep playing, if false exit game. 
     * @return
     */
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
            let target = $(`*[data-lens="${sequence[i]}"]`)
            let music = getSound(sequence[i], this)
            if(music != false) {
                music.play()
            }
            lightsOn(target[0], sequence[i])
            await delay(this.speed)
            lightsOff(target[0], sequence[i])
            await delay(this.speed)
        }
        this.userSays()
    }
}