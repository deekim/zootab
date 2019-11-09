function openSettings() {
   document.getElementById("settings").classList.toggle("settings-open");
}

document.getElementById("settings-button").addEventListener('click', openSettings)

function saveName() {
    localStorage.setItem('receivedName', userName);
}

var userName = localStorage.getItem('receivedName');

if (userName == null) {
   userName = "friend";
}

