
function setDark() {
    document.body.classList.remove("light-mode");

    document.getElementById("profile-name").textContent = "Alex David";
}

function setLight() {
    document.body.classList.add("light-mode");

    document.getElementById("profile-name").textContent = "Shreya Singh";
}
