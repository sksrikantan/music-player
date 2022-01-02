function turnRecord(evt){
    let songName = document.getElementsByClassName('vinyl-print').item(0);
    
    if(songName.style.animationPlayState == "running"){
        songName.style.animationPlayState = "paused";
    }else{
        songName.style.animationPlayState = "running";
    }
}
// function turnRecord(evt){
//     let songName = document.getElementsByClassName('container').item(0);
    
//     songName.classList.toggle("play");
// }
