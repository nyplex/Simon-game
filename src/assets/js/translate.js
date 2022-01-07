const setupTitleFR = "Bienvenue"
const setupTitleEN = "Welcome"

const welcomeTextFR = "Jamais joue avant? Vous ne vous rappeler comment jouer? Prenez quelques instants pour lire les regles"
const welcomeTextEN = "First-time player ? Don’t remember how to play? Take a few minutes to read the rules."

const rulesBtnTextFR = "REGLES"
const rulesBtnTextEN = "RULES"

const themeTextFR = "Theme:"
const themeTextEN = "Select a Theme:"

const playerTextFR = "Joueurs:"
const playerTextEN = "Select players:"

const modeTextFR = "Mode de jeu:"
const modeTextEN = "Select Mode:"

const levelTextFR = "Niveau:"
const levelTextEN = "Select Level:"

const mode1TextFR = "Mode 1 <span>(1 a 4 joueurs)</span>"
const mode1TextEN = "Mode 1 <span>(1 or more players)</span>"

const mode2TextFR = "Mode 2 <span>(1 a 4 joueurs)</span>"
const mode2TextEN = "Mode 2 <span>(1 or more players)</span>"

const mode3TextFR = "Mode 3 <span>(2 a 4 joueurs)</span>"
const mode3TextEN = "Mode 3 <span>(2 or more players)</span>"

const singlePlayerTextFR = "1 joueur"
const singlePlayerTextEN = "Single Player"

const TwoOrMorePlayersFR = "2 a 4 joueurs"
const TwoOrMorePlayersEN = "2 or more players"

const fourPlayersFR = "4 joueurs"
const fourPlayersEN = "4 players"

const threePlayersFR = "3 joueurs"
const threePlayersEN = "3 players"

const twoPlayersFR = "2 joueurs"
const twoPlayersEN = "2 players"

const mode1SingleRulesEN = `
<li>
When the game starts, Simon will give you the first signal. Repeat the signal by pressing the same color.
</li>
<li>
When the game starts, Simon will give you the first signal. Repeat the signal by pressing the same color.
</li>
<li>
Simon will duplicate these first two signals and add one.
</li>
<li>
Continue playing as long as you can repeat each sequence of signals correctly. After the 5th, 9th, 13th etc signals in a sequence, Simon will automatically increase the level of difficulty.
</li>
<li>
If you fail to repeat a sequence exactly, or if you take more than 5 seconds (10 seconds from level 4) to repeat a signal, Simon responds with "BUZZZZ" sound. This means you've lost and the sequence of signal ends.
</li>
`

const mode1SingleRulesFR = `
<li>
When the game starts, Simon will give you the first signal. Repeat the signal by pressing the same color.
Au debut du jeu, Simon vous donnera le premier signal lumineux. Repetez le signal en appuyant sur la meme couleur.
</li>
<li>
Simon will duplicate the first signal and add one. Repeat these two signals by pressing the same colors, in order.
Simon repetera le premier signal et en ajoutera un nouveau. Repetez ces deux signaux en pressant les deux memes couleurs, dans l'ordre.
</li>
<li>
Simon will duplicate these first two signals and add one.
Simon repetera ces deux premiers signaux et en ajoutera un autre.
</li>
<li>
Continue playing as long as you can repeat each sequence of signals correctly. After the 5th, 9th, 13th etc signals in a sequence, Simon will automatically increase the level of difficulty.
Continuez ensuite le jeu tant ce que vous pouvez repeter chaque sequence de signaux correctement. Apres le 5eme, 9eme, 13eme, etc signal dans une sequence, Simon augmentera automatiquement le niveau de difficulte.
</li>
<li>
If you fail to repeat a sequence exactly, or if you take more than 5 seconds (10 seconds from level 4) to repeat a signal, Simon responds with "BUZZZZ" sound. This means you've lost and the sequence of signal ends.
Si vous ne parvenez pas a repter une sequence de maniere identique, ou si vous prenez plus de 5 secondes (10 secondes a partir du niveau 4) a copier un signal, Simon repondra avec le son BUZZZZ. Cela signifie que vous avez perdu et c'est la fin de la partie.
</li>
`

const model1multiRulesEN = `
<li>
Decide who goes first
</li>
<li>
Play as described above excpet players take turns repeating Simon's signal
</li>
`
const model1multiRulesFR = `
<li>
Decide who goes first
Decidez qui commence
</li>
<li>
Play as described above excpet players take turns repeating Simon's signal
Jouez commme explique ci-dessus, a la difference que les joueurs repetent les signaux de Simon chacun a leur tour.
</li>
`

export let translate = () => {
    $('*[data-flag]').on("click", (e) => {
        if($(e.target).data("flag") === "fr") {
            $("#setupTitle").text(setupTitleFR)
            $("#welcomeText").text(welcomeTextFR)
            $("#rulesBtnText").text(rulesBtnTextFR)
            $("#themeText").text(themeTextFR)
            $("#playersText").text(playerTextFR)
            $("#modeText").text(modeTextFR)
            $("#levelText").text(levelTextFR)
            $('*[data-rulesPlayers="1"]').text(singlePlayerTextFR)
            $('*[data-rulesPlayers="2+"]').text(TwoOrMorePlayersFR)
            $('*[data-rulesPlayers="4"]').text(fourPlayersFR)
            $('*[data-rulesPlayers="3"]').text(threePlayersFR)
            $('*[data-rulesPlayers="2"]').text(twoPlayersFR)
            $("#mode1Text").html(mode1TextFR)
            $("#mode2Text").html(mode2TextFR)
            $("#mode3Text").html(mode3TextFR)
            ("#mode1SingleRules").html(mode1SingleRulesFR)
            $("#mode1MultiRules").html(model1multiRulesFR)
        }else{
            $("#setupTitle").text(setupTitleEN)
            $("#welcomeText").text(welcomeTextEN)
            $("#rulesBtnText").text(rulesBtnTextEN)
            $("#themeText").text(themeTextEN)
            $("#playersText").text(playerTextEN)
            $("#modeText").text(modeTextEN)
            $("#levelText").text(levelTextEN)
            $('*[data-rulesPlayers="1"]').text(singlePlayerTextEN)
            $('*[data-rulesPlayers="2+"]').text(TwoOrMorePlayersEN)
            $('*[data-rulesPlayers="4"]').text(fourPlayersEN)
            $('*[data-rulesPlayers="3"]').text(threePlayersEN)
            $('*[data-rulesPlayers="2"]').text(twoPlayersEN)
            $("#mode1Text").html(mode1TextEN)
            $("#mode2Text").html(mode2TextEN)
            $("#mode3Text").html(mode3TextEN)
        }
    })
}