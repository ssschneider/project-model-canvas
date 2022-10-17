var teamName = window.prompt("Qual é o nome da sua equipe?");

var pitch = window.prompt("Qual é o pitch da sua equipe?");

window.alert("Ótimo! Pode começar a planejar o seu projeto!");

const teamNamePlace = document.getElementById("team-name");
const pitchDisplay = document.getElementById("pitch");

function insertTeamName() {
	teamNamePlace.innerHTML = teamName;
}

function displayPitch() {
	pitchDisplay.innerHTML = pitch;
}

insertTeamName(teamName);
displayPitch(pitch);
