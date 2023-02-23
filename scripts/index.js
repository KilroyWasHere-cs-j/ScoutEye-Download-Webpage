function GitHubRedirect(){
    window.location.href = "https://github.com/frc5687/ScoutEye/releases";
}

function showPopup(){
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

// Initialize Variables
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");

// Close Popup Event
closePopup.onclick = function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
};
// Show Overlay and Popup

window.onload = setTimeout(showPopup, 1000);