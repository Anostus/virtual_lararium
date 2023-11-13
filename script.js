// script.js
function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function togglePlay() {
    var musicPlayer = document.getElementById('music-player');
    if (musicPlayer.src.includes('autoplay=1')) {
        musicPlayer.src = musicPlayer.src.replace('autoplay=1', 'autoplay=0');
    } else {
        musicPlayer.src = musicPlayer.src.replace('autoplay=0', 'autoplay=1');
    }
}
