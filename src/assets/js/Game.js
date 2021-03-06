import { colorsInteraction, gameOver, lightsOff, lightsOn, rotateColors, timeToRotate } from "./gamePlay"
import { delay, IncreaseSpeed, usersTurn } from "./utilities"

export class Game {
    constructor(theme, players, mode, level, sounds, usernames, playersNumber) {
        
        this.theme = theme
        this.players = players
        this.playersNumber = playersNumber
        this.usernames = usernames
        this.multiplayers = false
        this.mode = mode
        this.level = level
        this.sounds = sounds
        this.sequence = []
        this.colors = []
        this.speed = 500
        this.userSequence = []
        this.playersTurn = 0
        this.playerData = {}
        this.playersColors = {}
        this.rotation = 0
    }

    /**
     * simonSay
     * ? This function will choose a random from this.colors array and this color the sequence and play the sequence
     */
    simonSay() {
        console.log(this.level);
        const newColors = this.colors[Math.floor(Math.random()*this.colors.length)];
        this.sequence.push(newColors)
        this.#playSequence(this.sequence)
    }


    /**
     * userSays
     * ? this function launch a timeOut and after 5sec call gameOVer()
     * ? this function listen for an user's input and add the input to the user's sequence.
     */
    userSays() {
        $("#simon-text").html(usersTurn(this))
        $("*[data-lens]").off()
        $(window).off()
        let timeOut = setTimeout(() => {
            $(window).off()
            $("*[data-lens]").off()
            if(this.mode === 1 || this.mode === 2) {
                this.wrongSequence()
            }
        }, 7000);
        colorsInteraction(this)
        $("*[data-lens]").on("mousedown, pointerdown", (e) => {
            clearTimeout(timeOut)
            let color = $(e.target).data("lens")
            this.userSequence.push(color)
        })
        try {
            $(window).on("mouseup, pointerup", () => {
                this.checkSequence()
            })
        } catch (error) {
            alert("Don't move your mouse while clicking on the color")
        }
        
    }

    /**
     * userAddToSequence
     * ? This function is called only in mode 2, it will add the user's color to the sequence of color
     */
    async userAddToSequence() {
        colorsInteraction(this)
        $("*[data-lens]").on("mousedown, pointerdown", (e) => {
            let color = $(e.target).data("lens")
            this.sequence.push(color)
            this.userSequence = []
        })
        $(window).on("mouseup, pointerup", () => {
            rotateColors(this.sequence.length, this)
            this.userSays()
        })
    }

    /**
     * checkSequence
     * ? Check if last user input match the game's sequence. If true, keep playing, if false exit game. 
     * @return
     */
    async checkSequence() {
        let length = this.userSequence.length - 1
        if(this.userSequence[length] === this.sequence[length]) {
            if(this.userSequence.length === this.sequence.length) {
                $("*[data-lens]").off()
                if(this.mode === 1) {
                    $(".circle").removeClass("cursor-pointer")
                    this.userSequence = []
                    await delay(500)
                    this.simonSay()
                    return
                }else {
                    this.userAddToSequence()
                    if(this.multiplayers === false) {
                        $("#simon-text").html("Add one color")
                    }else{
                        let html = this.players[this.playersTurn - 1] + ", add one color"
                        $("#simon-text").html(html)
                    }
                }
            }  
        }else{
            $("*[data-lens]").off()
            $(".circle").removeClass("cursor-pointer")
            this.wrongSequence(this.userSequence, this.sequence)
            return
        }
    }


    /**
     * wrongSequence
     * ? Play a buzz sound and will call some function depending on the multiplayers being true or false 
     */
    async wrongSequence(user, simon) {
        // play buzz sound
        let music = (this.theme == 4) ? false : this.sounds["buzz"]
        if(music) {
            music.play()
        }
        this.playerData[this.players[this.playersTurn - 1]] = (this.sequence.length <= 0) ? 0 : this.sequence.length - 1
        if(this.players.length > 1) {
            $("#simon-text").text(this.players[this.playersTurn - 1] + " is out")
            await delay(1500)
            this.players.splice(this.playersTurn - 1, 1)
            this.playersTurn -= 1
            this.userSequence = []
            this.userSays()
            return
        }
        gameOver(this, user, simon)
    }


    
    /**
     * playSequence
     * ? This private function will play back the colors sequence with sound FX.
     * @param {array} sequence 
     */
    async #playSequence(sequence) {
        $("#simon-text").text("SIMON SAYS")
        await delay(1000)
        IncreaseSpeed(sequence.length, this)
        for(let i = 0; i < sequence.length; i ++) {
            let target = $(`*[data-lens="${sequence[i]}"]`)
            let music = (this.theme == 4) ? false : this.sounds[sequence[i]]
            if(music != false) {
                music.currentTime = 0;
                music.play()
            }
            lightsOn(target[0], sequence[i])
            await delay(this.speed)
            lightsOff(target[0], sequence[i])
            await delay(this.speed)
        }
        let rotation = rotateColors(sequence.length, this)
        if(rotation == true) {
            await delay(2100)
        }
        this.userSays()
    }
}