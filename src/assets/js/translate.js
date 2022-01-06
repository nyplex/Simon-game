const setupTitleFR = "Bienvenue"
const setupTitleEN = "Welcome"

const welcomeTextFR = "Jamais joue avant? Vous ne vous rappeler comment jouer? Prenez quelques instants pour lire les regles"
const welcomeTextEN = "First-time player ? Don’t remember how to play? Take a few minutes to read the rules."

const rulesBtnTextFR = "REGLES"
const rulesBtnTextEN = "RULES"

export let translate = () => {
    $('*[data-flag]').on("click", (e) => {
        if($(e.target).data("flag") === "fr") {
            $("#setupTitle").text(setupTitleFR)
            $("#welcomeText").text(welcomeTextFR)
            $("#rulesBtnText").text(rulesBtnTextFR)
        }else{
            $("#setupTitle").text(setupTitleEN)
            $("#welcomeText").text(welcomeTextEN)
            $("#rulesBtnText").text(rulesBtnTextEN)
        }
    })
}