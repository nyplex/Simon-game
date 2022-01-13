
export class Players {
    constructor(id) {
        this.id  = id
        this.score = 0
        this.lost = false
        this.winner = false
    }

    /**
     * usersTurn
     * @param {Object} game 
     * @returns {string}
     */
    usersTurn(game) {
        if(game.players.length == 1) {
            return "Your Turn"
        }else{
            if(game.playersTurn + 1 >= game.players.length) {
                let html =  "Player " + game.playersTurn
                game.playersTurn = game.players[0]
                return html
                
            }else{
                let html =  "Player " + game.playersTurn
                game.playersTurn = game.players[game.playersTurn + 1]
                return html
                
            }
        }
    }
}