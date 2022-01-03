const audio = document.querySelector('audio');
const songList = document.querySelector('.songlist');
const songName = document.querySelector('.vinyl-print');
const crackle = document.querySelector('#crackle')

songList.addEventListener("click", function(e) {

    title = e.target.closest('li').getAttribute('data-name');
    artist = e.target.closest('li').getAttribute('data-artist');
    source = e.target.closest('li').getAttribute('data-src');

    document.querySelector('.title').innerText = title;
    document.querySelector('.artist-name').innerText  = artist;
    audio.src = source; 

    
    songName.style.animationPlayState = "running";
    document.getElementById('play-pause').classList = 'fa fa-pause';
    playVinyl();


}, false);

function playButton(evt){

    if(songName.style.animationPlayState == "running"){
        songName.style.animationPlayState = "paused";
        document.getElementById('play-pause').classList = 'fa fa-play';
        pauseVinyl();
    }
    else{
        songName.style.animationPlayState = "running";
        document.getElementById('play-pause').classList = 'fa fa-pause';
        playVinyl();
    }
}

function playVinyl(){
    crackle.loop = true;
    crackle.play();
    audio.play();
}
function pauseVinyl(){
    crackle.pause();
    audio.pause();
}
