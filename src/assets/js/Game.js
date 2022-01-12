import { colorsInteraction, lightsOff, lightsOn } from "./gamePlay"
import { Players } from "./Players"
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
        this.playersTurn = 1
        this.Players = new Players()
    }


    startGame() {
        //call diffrent function depending on the game's mode
        this.simonSay()
    }

    simonSay() {
        const newColors = this.colors[Math.floor(Math.random()*this.colors.length)];
        this.addToSequence(newColors)  
    }


    userSays() {
        $("#simon-text").text(this.Players.usersTurn(this))
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
    async checkSequence() {
        let length = this.userSequence.length - 1
        let colorToCheck = this.sequence[length]
        let lastUserColor = this.userSequence[length]
        if(lastUserColor === colorToCheck) {
            if(this.userSequence.length === this.sequence.length) {
                $("*[data-lens]").off()
                $(".circle").removeClass("cursor-pointer")
                this.userSequence = []
                await delay(500)
                this.simonSay()
                return
            }  
        }else{
            $("*[data-lens]").off()
            $(".circle").removeClass("cursor-pointer")
            this.gameOver()
            return
        }
    }


    gameOver() {
        //open a modal with the score details
        console.log("Sequence length: " + this.sequence.length);
        if(this.players > 1) {
            let player = this.playersTurn - 1
            if(player <= 0) {
                player = this.players
            }
            console.log("Player " + player + " lost!")
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
        if(IncreaseSpeed(sequence.length, this)) {
            if(this.speed >= 300) {
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