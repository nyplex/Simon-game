/**
 * generateGamePlay
 * ? Generate the Simon's colors depending on the game's level
 * @param {Object} game 
 */
export let generateGamePlay = (game) => {
    game.colors = (game.level === 1 || game.level === 2) ? ["red", "blue", "yellow", "green"] : ["red", "blue", "yellow", "pink", "green"]
    $("#main-game-container").removeClass("hidden")
    let html = ""
    let circleToDisplay = (game.level === 1 || game.level === 2) ? 4 : 5
    for(let i = 0; i < circleToDisplay; i++) {
        let color = game.colors[i]
        let upperColor = color[0].toUpperCase() + color.slice(1)
        let num = i + 1
        html += `<div data-lens="${color}" class="circle simon${upperColor} bg-simon${upperColor} simon-${num}-${circleToDisplay}"></div>`
    }
    $("#simon-colors-container").html(html)
    let time = 5
    let interval = setInterval(() => {
        if(time === 1) {
            clearInterval(interval);
            $("#simon-text").text("")
            game.simonSay()
        }else{
            time -= 1
            $("#simon-text").text(time)
        }
    }, 1000);
}

/**
 * lightsOn
 * ? Light-up the game's colors when the user clicks on them
 * @param {Object} game 
 */
export let colorsInteraction = (game) => {
    $(".circle").addClass("cursor-pointer")
    $("*[data-lens]").on("mousedown, pointerdown", (e) => {
        let music = (game.theme == 4) ? false : game.sounds[$(e.target).data("lens")]
        lightsOn(e.target, $(e.target).data("lens"))
        if(music != false) {
            music.currentTime = 0;
            music.play()
        }
        try {
            $(window).on("mouseup, pointerup", () => {
                lightsOff(e.target, $(e.target).data("lens"))
            })
        } catch (error) {
            alert("Don't move your mouse while clicking on the color")
        }
        
    })
}

/**
 * lightsOn
 * ? Light up a specific color
 * @param {object} event target event
 * @param {string} color 
 */
export let lightsOn = (event, color) => {
    let className = "simon" + color.charAt(0).toUpperCase() + color.slice(1) + "-lightsOn"
        $(event).addClass(className)
}

/**
 * lightsOff
 * ? light off a specific color
 * @param {object} event target event
 * @param {string} color 
 */
export let lightsOff = (event, color) => {
    let className = "simon" + color.charAt(0).toUpperCase() + color.slice(1) + "-lightsOn"
    $(event).removeClass(className)
}


/**
 * rotateColors
 * ? the fonction will rotate randomly the colors in the gameplay 
 * @param {int} sequence 
 * @param {Object} game 
 */
export let rotateColors = (sequence, game) => {
    if(game.level == 2 || game.level == 4 || game.level == 5) {
        if(Number.isInteger((sequence - 1) / 4) && (sequence - 1) / 4 >= 1) {
            let container = $("#simon-colors-container")
            game.rotation += 45
            $(container).css("transform", `rotate(${game.rotation}deg)`)
            return true
        }
    }else{
        return false
    }
}


/**
 * gameOver
 * ? will display the game over modal and append all the data/results
 * @param {Object} game 
 * @returns 
 */
export let gameOver = (game, user, simon) => {
    $("#header-logo").text("")
    $("#desktop-nav, #burger-icon").hide()

    if(game.multiplayers === false) {
        let htmlLastPressed = ""
        if(user != undefined) {
            let userLast = user[user.length - 1]
            let simonLast = simon[user.length - 1]
            htmlLastPressed = `<p class="text-center mb-4 font-bold font-IBM">You pressed ${userLast.toUpperCase()} instead of ${simonLast.toUpperCase()}</p>`
        }
        
        $("#scoreTitle").text("Game Over!")
        $("#scoreText").text("Here's how you got on...")
        let score = (game.playerData[1] <= 1) ? "point" : "points"
        let html = `<div class="flex justify-between p-4 bg-gray-200 w-[90%] mx-auto rounded-lg font-IBM font-xl items-center my-4">
                        <p class="text-gray-500 font-bold">Your Score</p>
                        <p class="text-gray-700 font-bold text-2xl">${game.playerData[1]} ${score}</p>
                    </div>
                    <div class="w-full">
                        ${htmlLastPressed}
                    </div>`
        $("#scoresContainer").html(html)
        $("#score-modal").removeClass("hidden")
        return
    }else{
        let data = game.playerData
        let sorted = []
        let html = ""
        for (var score in data) {
            sorted.push([score, data[score]]);
        }
        sorted.sort(function(a, b) {
            return a[1] - b[1];
        });
        sorted.reverse()
        for(let i = 0; i < sorted.length; i++) {
            let score = (sorted[i][1] <= 1) ? "point" : "points"
             html += `<div class="flex justify-between p-4 bg-gray-200 w-[90%] mx-auto rounded-lg font-IBM font-xl items-center my-4">
                        <p class="text-gray-500 font-bold">${sorted[i][0]}</p>
                        <p class="text-gray-700 font-bold text-2xl">${sorted[i][1]} ${score}</p>
                    </div>`
        }
        $("#scoreTitle").text("Game Over!")
        $("#scoreText").text("Here's how you got on...")
        $("#scoresContainer").html(html)
        $("#score-modal").removeClass("hidden")
        return
    }
}