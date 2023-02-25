const { func } = require("prop-types");

function DesktopDownloadClicked() {
    const responce = confirm("Are you sure you want to download ScoutEye Suite Desktop at this time?")
    if(responce){
        window.location.replace("https://github.com/frc5687/ScoutEye/archive/refs/heads/main.zip");
    }
}

function LinuxDownloadClicked(){
    const responce = confirm("Are you sure you want to download ScoutEye Linux at this time?")
    if(responce){
        window.location.replace("https://github.com/frc5687/ScoutEye/blob/main/Linux/Linux.zip?raw=true");
    }
}

function AndroidDownloadClicked(){
    const responce = confirm("Are you sure you want to download ScoutEye Android at this time?")
    if(responce){
        //https://github.com/frc5687/ScoutEye/blob/main/app-release.apk
        window.location.replace("../app-release.apk");
    }
}

function iOSDownloadClicked(){
    alert("ScoutEye iOS is not yet available for download.")
}

function WebDownloadClicked(){
    alert("ScoutEye Web is not yet available.")
}

function MacOSDownloadClicked(){
    alert("ScoutEye MacOS is not yet available.")
}