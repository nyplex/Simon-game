const setupEN = `<div id="setupContent" class="mx-auto mt-8 font-IBM text-text">
<h1 id="setupTitle" class="text-4xl font-extrabold text-center  mb-4">Welcome</h1>
<p id="welcomeText" class="text-center text-xl font-semibold mobile:max-w-[85%] mx-auto">
    First-time player ? Don’t remember how to play? Take a few minutes to read the rules.
</p>
<button id="rules-btn" class="bg-secondaryVariant p-2 block mx-auto mt-4 mb-6 font-IBM font-bold text-lg text-white rounded-lg hover:bg-secondary hover:text-text"><i class="fas fa-gavel mr-2"></i><span id="rulesBtnText">RULES</span></button>
<hr class="mobile:w-[50%] mb-10 mx-auto border-2 border-text rounded-full bg-text">
<div class="setup-section-container">
    <h2 id="themeText" class="text-2xl font-extrabold text-left mb-4 mobile:mb-0 mr-2">Select Theme:</h2>
    <div class="btn-container">
        <button class="active-button"><i class="fas fa-volume-down mr-2"></i>FX1</button>
        <button class="primary-button"><i class="fas fa-volume-down mr-2"></i>FX2</button>
        <button class="primary-button"><i class="fas fa-volume-down mr-2"></i>FX3</button>
    </div>
</div>
<div class="setup-section-container">
    <h2 id="playersText" class="text-2xl font-extrabold text-left mb-4 mobile:mb-0 mr-4">Select Players:</h2>
    <div class="btn-container">
        <button class="active-button"><i class="fas fa-user mr-2"></i>1 Player</button>
        <button class="primary-button"><i class="fas fa-users mr-2"></i>2 Players</button>
        <button class="primary-button"><i class="fas fa-users mr-2"></i>3 Players</button>
        <button class="primary-button"><i class="fas fa-users mr-2"></i>4 Players</button>
    </div>
</div>
<div class="setup-section-container">
    <h2 id="modeText" class="text-2xl font-extrabold text-left mb-4 mobile:mb-0 mr-2">Select Mode:</h2>
    <div class="btn-container">
        <button class="active-button">Mode 1</button>
        <button class="primary-button">Mode 2</button>
        <button class="primary-button">Mode 3</button>
    </div>
</div>
<div class="setup-section-container">
    <h2 id="levelText" class="text-2xl font-extrabold text-left mb-4 mobile:mb-0 mr-2">Select Level:</h2>
    <div class="btn-container">
        <button class="bg-secondaryVariant hover:bg-secondary hover:text-text mobile:p-1 mobile:text-sm text-lg level-button">AUTO</button>
        <button class="bg-primary level-button">1</button>
        <button class="hover:bg-yellow-500 hover:text-text bg-yellow-600 level-button">2</button>
        <button class="hover:bg-orange-500 hover:text-text bg-orange-600 level-button">3</button>
        <button class="hover:bg-red-500 hover:text-text bg-red-600 level-button">4</button>
    </div>
</div>
<button class="m-auto bg-pink-500 block mt-10 px-2 py-2 rounded-lg font-OPS text-white text-2xl hover:bg-pink-700 shadow-sm shadow-pink-700"><h1 class="rotate-[-3deg]">PLAY SIMON</h1></button>
</div>`

const setupFR = `<div id="setupContent" class="mx-auto mt-8 font-IBM text-text">
<h1 id="setupTitle" class="text-4xl font-extrabold text-center  mb-4">Bienvenue</h1>
<p id="welcomeText" class="text-center text-xl font-semibold mobile:max-w-[85%] mx-auto">
    Jamais joue auparavant? Vous ne vous rappelez plus des regles? Prennez quelques instants pour les lire.
</p>
<button id="rules-btn" class="bg-secondaryVariant p-2 block mx-auto mt-4 mb-6 font-IBM font-bold text-lg text-white rounded-lg hover:bg-secondary hover:text-text"><i class="fas fa-gavel mr-2"></i><span id="rulesBtnText">REGLES</span></button>
<hr class="mobile:w-[50%] mb-10 mx-auto border-2 border-text rounded-full bg-text">
<div class="setup-section-container">
    <h2 id="themeText" class="text-2xl font-extrabold text-left mb-4 mobile:mb-0 mr-2">Choisir Theme:</h2>
    <div class="btn-container">
        <button class="active-button"><i class="fas fa-volume-down mr-2"></i>FX1</button>
        <button class="primary-button"><i class="fas fa-volume-down mr-2"></i>FX2</button>
        <button class="primary-button"><i class="fas fa-volume-down mr-2"></i>FX3</button>
    </div>
</div>
<div class="setup-section-container">
    <h2 id="playersText" class="text-2xl font-extrabold text-left mb-4 mobile:mb-0 mr-4">Nb. Joueurs:</h2>
    <div class="btn-container">
        <button class="active-button"><i class="fas fa-user mr-2"></i>1 Joueur</button>
        <button class="primary-button"><i class="fas fa-users mr-2"></i>2 Joueurs</button>
        <button class="primary-button"><i class="fas fa-users mr-2"></i>3 Joueurs</button>
        <button class="primary-button"><i class="fas fa-users mr-2"></i>4 Joueurs</button>
    </div>
</div>
<div class="setup-section-container">
    <h2 id="modeText" class="text-2xl font-extrabold text-left mb-4 mobile:mb-0 mr-2">Choisir Mode:</h2>
    <div class="btn-container">
        <button class="active-button">Mode 1</button>
        <button class="primary-button">Mode 2</button>
        <button class="primary-button">Mode 3</button>
    </div>
</div>
<div class="setup-section-container">
    <h2 id="levelText" class="text-2xl font-extrabold text-left mb-4 mobile:mb-0 mr-2">Choisir Niveau:</h2>
    <div class="btn-container">
        <button class="bg-secondaryVariant hover:bg-secondary hover:text-text mobile:p-1 mobile:text-sm text-lg level-button">AUTO</button>
        <button class="bg-primary level-button">1</button>
        <button class="hover:bg-yellow-500 hover:text-text bg-yellow-600 level-button">2</button>
        <button class="hover:bg-orange-500 hover:text-text bg-orange-600 level-button">3</button>
        <button class="hover:bg-red-500 hover:text-text bg-red-600 level-button">4</button>
    </div>
</div>
<button class="m-auto bg-pink-500 block mt-10 px-2 py-2 rounded-lg font-OPS text-white text-2xl hover:bg-pink-700 shadow-sm shadow-pink-700"><h1 class="rotate-[-3deg]">JOUER</h1></button>
</div>`

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
            $("#setupContent").replaceWith(setupFR)
        }else{
            $("#setupContent").replaceWith(setupEN)
        }
    })
}