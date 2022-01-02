const audio = document.querySelector('audio');
const songList = document.querySelector('.songlist');

songList.addEventListener("click", function(e) {
    title = e.target.closest('li').getAttribute('data-name');
    artist = e.target.closest('li').getAttribute('data-artist');
    source = e.target.closest('li').getAttribute('data-src');

    document.querySelector('.title').innerText = title;
    document.querySelector('.artist-name').innerText  = artist;
    audio.src = source; 

}, false);

function turnRecord(evt){
    let songName = document.getElementsByClassName('vinyl-print').item(0);

    if(songName.style.animationPlayState == "running"){
        songName.style.animationPlayState = "paused";
        document.getElementById('play-pause').classList = 'fa fa-play';
        audio.pause();
    }else{
        songName.style.animationPlayState = "running";
        document.getElementById('play-pause').classList = 'fa fa-pause';
        audio.play();
    }
}

// window.addEventListener('DOMContentLoaded', () => {
//     toggleButton()
// });