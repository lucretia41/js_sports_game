// variables
const teamOnesButton = document.querySelector("#teamone-shoot-button")
const teamTwosButton = document.querySelector("#teamtwo-shoot-button")
const teamOnenButton = document.querySelector("#teamone-numshots")
const teamTwonButton = document.querySelector("#teamtwo-numshots")
const teamOnerButton = document.querySelector("#teamone-numgoals")
const teamTworButton = document.querySelector("#teamtwo-numgoals")
const restButton = document.querySelector("#reset-button")
const restNum = document.querySelector("#num-resets")
const shotChance = 1;
let shotResult;
function getRandom() {
    return Math.random();
}
//teams
teamOnesButton.addEventListener("click", function () {
    teamOnenButton.innerHTML = Number(teamOnenButton.innerHTML) + 1
    shotResult = getRandom(shotChance);
    console.log(shotResult)
    if (shotResult < .5) {
        teamOnerButton.innerHTML = Number(teamOnerButton.innerHTML) + 1
    }
})

teamTwosButton.addEventListener("click", function () {
    teamTwonButton.innerHTML = Number(teamTwonButton.innerHTML) + 1
    shotResult = getRandom(shotChance);
    console.log(shotResult)
    if (shotResult < .5) {
        teamTworButton.innerHTML = Number(teamTworButton.innerHTML) + 1
    }
})
//reset
restButton.addEventListener("click", function () {
    teamOnenButton.innerHTML = 0
    teamOnerButton.innerHTML = 0
    teamTwonButton.innerHTML = 0
    teamTworButton.innerHTML = 0
    restNum.innerHTML = Number(restNum.innerHTML) + 1
})