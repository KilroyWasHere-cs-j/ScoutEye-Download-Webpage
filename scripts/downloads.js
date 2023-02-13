function DesktopDownloadClicked() {
    const responce = confirm("Are you sure you want to download ScoutEye Suite Desktop at this time?")
    if(responce){
        window.location.replace("https://github.com/frc5687/ScoutEye/archive/refs/tags/v.1.9.5.zip");
    }
}

function AndroidDownloadClicked(){
    const responce = confirm("Are you sure you want to download ScoutEye Android at this time?")
    if(responce){
        alert("ScoutEye Android is currently still underdevelopment, thus not available for download.")
    }
}