import { colorsInteraction, gameOver, lightsOff, lightsOn, rotateColors, timeToRotate } from "./gamePlay"
import { delay, getSound, IncreaseSpeed, usersTurn } from "./utilities"

export class Game {
    constructor(theme, players, mode, level, sounds) {
        
        this.theme = theme
        this.players = players
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
    }

    startGame() {
        //call diffrent function depending on the game's mode
        if(this.mode != 3){
            this.simonSay()
        }else{
            this.userChooseColor()
        }
    }

    /**
     * simonSay
     * ? This function will choose a random from this.colors array and this color the sequence and play the sequence
     */
    simonSay() {
        const newColors = this.colors[Math.floor(Math.random()*this.colors.length)];
        this.addToSequence(newColors)  
        this.#playSequence(this.sequence)
    }

    userChooseColor() {
        if(Object.keys(this.playersColors).length === this.players.length) {
            console.log("all colors set, start game");
            return
        }
        $("#simon-text").html(usersTurn(this))
        let playerTurn = this.players[this.playersTurn - 1]
        $("*[data-lens]").on("click", (e) => {
            let color = $(e.target).data("lens")
            this.addChosenColor(color, playerTurn)
        })
    }

    addChosenColor(color, player) {
        this.playersColors[color] = player
        $("*[data-lens]").off()
        this.userChooseColor()
    }

    /**
     * userSays
     * ? this function launch a timeOut and after 5sec call gameOVer()
     * ? this function listen for an user's input and add the input to the user's sequence.
     */
    userSays() {
        $("#simon-text").html(usersTurn(this))
        $("*[data-lens]").off()
        let timeOut = setTimeout(() => {
            //play buzz sound 
            console.log("BUZZZZ");
            $("*[data-lens]").off()
            this.wrongSequence()
        }, 5000);
        colorsInteraction(this)
        $("*[data-lens]").on("click", (e) => {
            clearTimeout(timeOut)
            let color = $(e.target).data("lens")
            this.userSequence.push(color)
            this.checkSequence()
        })
        
    }

    /**
     * addToSequence
     * ? This function add a color to this.sequence
     * @param {string} color 
     */
    addToSequence(color) {
        this.sequence.push(color)
    }

    async userAddToSequence() {
        if(timeToRotate(this.sequence.length, this)) {
            await delay(2100)
        }
        colorsInteraction(this)
        $("*[data-lens]").on("click", (e) => {
            //clearTimeout(timeOut)
            let color = $(e.target).data("lens")
            this.sequence.push(color)
            this.userSequence = []
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
                if(this.mode === 1) {
                    $("*[data-lens]").off()
                    $(".circle").removeClass("cursor-pointer")
                    this.userSequence = []
                    await delay(500)
                    this.simonSay()
                    return
                }else if(this.mode === 2) {
                    $("*[data-lens]").off()
                    this.userAddToSequence()
                    if(this.multiplayers === false) {
                        $("#simon-text").html("Add one color")
                    }else{
                        let html = "Player " + this.players[this.playersTurn - 1] + ", add one color"
                        $("#simon-text").html(html)
                    }
                }
            }  
        }else{
            $("*[data-lens]").off()
            $(".circle").removeClass("cursor-pointer")
            this.wrongSequence()
            return
        }
    }

    /**
     * removePlayer
     * ? Remove a player from this.player array
     * @param {int} index 
     */
    removePlayer(index) {
        this.players.splice(index, 1)
        this.playersTurn -= 1
    }

    /**
     * wrongSequence
     * ? Play a buzz sound and will call some function depending on the multiplayers being true or false 
     */
    async wrongSequence() {
        // play buzz sound
        let music = getSound("buzz", this)
        music.play()
        this.setupPlayersData(this.players[this.playersTurn - 1])
        if(this.players.length > 1) {
            $("#simon-text").text("Player " + this.players[this.playersTurn - 1] + " is out")
            await delay(1500)
            this.removePlayer(this.playersTurn - 1)
            this.userSequence = []
            this.userSays()
            return
        }
        gameOver(this)
    }


    /**
     * setupPlayersData
     * ? add the score of the player to the array this.playersData
     * @param {id} player 
     */
    setupPlayersData(player) {
        let score = this.sequence.length - 1
        if(this.sequence.length <= 0) {
            score = 0
        }
        this.playerData[player] = score
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
            let music = getSound(sequence[i], this)
            if(music != false) {
                music.currentTime = 0;
                music.play()
            }
            lightsOn(target[0], sequence[i])
            await delay(this.speed)
            lightsOff(target[0], sequence[i])
            await delay(this.speed)
        }
        rotateColors(sequence.length, this)
        if(timeToRotate(sequence.length, this)) {
            await delay(2100)
        }
        this.userSays()
    }
}