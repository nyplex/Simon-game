import { delay, getSequenceNumber, getSound, IncreaseSpeed } from "./utilities"

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
        this.#lightsOn()
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
     * generateGamePlay
     * ? Generate the Simon's colors depending on the game's level
     */
    generateGamePlay() {
        this.#getColors()
        $("#main-game-container").removeClass("hidden")
        let html = ""
        if(this.level === 3 || this.level === 4 || this.level === 5) {
            html += `<div data-lens="red" class="circle simonRed bg-simonRed simon-1-5"></div> 
                    <div data-lens="blue" class="circle simonBlue bg-simonBlue simon-2-5"></div> 
                    <div data-lens="yellow" class="circle simonYellow bg-simonYellow simon-3-5"></div> 
                    <div data-lens="pink" class="circle simonPink bg-simonPink simon-4-5"> </div> 
                    <div data-lens="green" class="circle simonGreen bg-simonGreen simon-5-5"></div>`
        }else {
            html += `<div data-lens="red" class="circle simonRed bg-simonRed simon-1-4"></div> 
                    <div data-lens="blue" class="circle simonBlue bg-simonBlue simon-2-4"></div> 
                    <div data-lens="yellow" class="circle simonYellow bg-simonYellow simon-3-4"></div>  
                    <div data-lens="green" class="circle simonGreen bg-simonGreen simon-4-4"></div>`
        }

        $("#simon-colors-container").html(html)
        let countdown = this.#countDown(5)
    }

    /**
     * lightsOn
     * ? Light-up the game's colors when the user clicks on them
     */
    #lightsOn() {
        $(".circle").addClass("cursor-pointer")
        $("*[data-lens]").on("mousedown, pointerdown", (e) => {
            const data = $(e.target).data("lens")
            let music = getSound(data, this)
            switch (data) {
                case "red": 
                    $(e.target).addClass("simonRed-lightsOn")
                    music.play()
                    break
                case "blue": 
                    $(e.target).addClass("simonBlue-lightsOn")
                    music.play()
                    break
                case "yellow": 
                    $(e.target).addClass("simonYellow-lightsOn")
                    music.play()
                    break
                case "pink": 
                    $(e.target).addClass("simonPink-lightsOn")
                    music.play()
                    break
                case "green": 
                    $(e.target).addClass("simonGreen-lightsOn")
                    music.play()
                    break
                default:
                    return
            }
        })
        $("*[data-lens]").on("mouseup, pointerup", (e) => {
            const data = $(e.target).data("lens")
            
            switch (data) {
                case "red": 
                    $(e.target).removeClass("simonRed-lightsOn")
                    break
                case "blue": 
                    $(e.target).removeClass("simonBlue-lightsOn")
                    break
                case "yellow": 
                    $(e.target).removeClass("simonYellow-lightsOn")
                    break
                case "pink": 
                    $(e.target).removeClass("simonPink-lightsOn")
                    break
                case "green": 
                    $(e.target).removeClass("simonGreen-lightsOn")
                    break
                default:
                    return
            }
        })    
    }

    /**
     * countDown
     * ? Display a countdown before the game starts
     * @param {int} time 
     */
    #countDown(time) {
        let interval = setInterval(() => {
            if(time === 0) {
                clearInterval(interval);
                $("#simon-text").text("")
                this.startGame()
            }else{
                time = time - 1
                $("#simon-text").text(time)
            }
        }, 1000);
    }

    /**
     * getColors
     * ? Depending on the game's level, this function generate the colors to play with and store them in the object.
     */
    #getColors() {
        if(this.level === 1 || this.level === 2) {
            this.colors.push("red", "blue", "yellow", "green")
        }else{
            this.colors.push("red", "blue", "yellow", "pink", "green")
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