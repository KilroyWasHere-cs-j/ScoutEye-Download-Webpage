function DesktopDownloadClicked() {
    const responce = confirm("Are you sure you want to download ScoutEye Suite Desktop at this time?")
    if(responce){
        window.location.replace("https://github.com/frc5687/ScoutEye/archive/refs/heads/main.zip");
    }
}

function AndroidDownloadClicked(){
    const responce = confirm("Are you sure you want to download ScoutEye Android at this time?")
    if(responce){
        //https://github.com/frc5687/ScoutEye/blob/main/app-release.apk
        window.location.replace("https://github.com/frc5687/ScoutEye/blob/main/app-release.apk");
    }
}