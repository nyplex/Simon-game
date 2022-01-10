export class Game {
    constructor(theme, players, mode, level) {
        this.theme = theme
        this.players = players
        this.mode = mode
        this.level = level
        this.simonSays = ["green", "yellow", "yellow", "red", "blue", "red"]
        this.colors = []
    }

    simonSay() {
        this.#getColors()
        const newColors = this.colors[Math.floor(Math.random()*this.colors.length)];
        this.simonSays.push(newColors)
        /*for(let i = 0; i < this.simonSays.length; i++) {
            let selector = `*[data-lens="${this.simonSays[i]}"]`
            $(selector).data("lens")
        }*/
        //console.log(this.simonSays);
        this.#lightUpSequence(this.simonSays)
    }

    /**
     * generateGamePlay
     * ? Generate the Simon's colors depending on the game's level
     */
    generateGamePlay() {
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
        this.#lightsOn()
        this.#countDown(5)
        this.simonSay()
    }

    /**
     * lightsOn
     * ? Light-up the game's colors when the user clicks on them
     */
    #lightsOn() {
        $(".circle").addClass("cursor-pointer")
        $("*[data-lens]").on("mousedown, pointerdown", (e) => {
            const data = $(e.target).data("lens")
            switch (data) {
                case "red": 
                    $(e.target).addClass("simonRed-lightsOn")
                    break
                case "blue": 
                    $(e.target).addClass("simonBlue-lightsOn")
                    break
                case "yellow": 
                    $(e.target).addClass("simonYellow-lightsOn")
                    break
                case "pink": 
                    $(e.target).addClass("simonPink-lightsOn")
                    break
                case "green": 
                    $(e.target).addClass("simonGreen-lightsOn")
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
            }else{
                time = time - 1
                $("#simon-text").text(time)
            }
        }, 1000);
    }

    #getColors() {
        if(this.level === 1 || this.level === 2) {
            this.colors.push("red", "blue", "yellow", "green")
        }else{
            this.colors.push("red", "blue", "yellow", "pink", "green")
        }
    }

    #lightUpSequence(sequence) {
        for(let i = 0; i < sequence.length; i ++) {
            setTimeout(() => {
                console.log(sequence[i]);
            }, i * 1000);
        }
    }
}