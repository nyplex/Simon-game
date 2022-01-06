export let displayMenu = () => {
    displayRules()
    displaySetup()
}

let displayRules = () => {
    $("#rules-btn").on("click", () => {
        $("#setup-modal").slideUp(() => {
            $("#rules-modal").slideDown()
            $("#rules-modal").scrollTop(0)
        })
    })
}

let displaySetup = () => {
    $("#ready-btn").on("click", () => {
        $("#rules-modal").slideUp(() => {
            $("#setup-modal").slideDown()
        })
    })
}
