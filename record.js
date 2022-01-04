const audio = document.querySelector('audio');
const songList = document.querySelector('.songlist');
const songName = document.querySelector('.vinyl-print');
const crackle = document.querySelector('#crackle');
const hiss = document.querySelector('#hiss');
sessionStorage.player = 'Vinyl';

function openMode(evt, mode){
    var i, content, links;
    content = document.getElementsByClassName("mode-content");
    links = document.getElementsByClassName("mode-nav-buttons");
    
    for (i = 0; i < content.length; i++) {
        content.item(i).style.display = "none";
    }
    for (i = 0; i < links.length; i++) {
        links.item(i).className = links.item(i).className.replace(" active", "");
    }
    sessionStorage.player = mode;
    switchNoise();
    document.getElementById(mode).style.display = "block";
    evt.currentTarget.className += " active";
}

songList.addEventListener("click", function(e) {

    title = e.target.closest('li').getAttribute('data-name');
    artist = e.target.closest('li').getAttribute('data-artist');
    source = e.target.closest('li').getAttribute('data-src');

    document.querySelector('.title').innerText = title;
    document.querySelector('.artist-name').innerText  = artist;
    audio.src = source; 

    
    songName.style.animationPlayState = "running";
    document.getElementById('play-pause').classList = 'fa fa-pause';
    
    playMusic();

}, false);

function playButton(evt){

    if(songName.style.animationPlayState == "running"){
        songName.style.animationPlayState = "paused";
        document.getElementById('play-pause').classList = 'fa fa-play';
        pauseMusic();
    }
    else{
        songName.style.animationPlayState = "running";
        document.getElementById('play-pause').classList = 'fa fa-pause';
        playMusic();
    }
}

function playMusic() {
    if (sessionStorage.player == 'Vinyl') {
        playVinyl();
        } else {
        playCassette();
        }
}

function pauseMusic() {
    if (sessionStorage.player == 'Vinyl') {
        pauseVinyl();
        } else {
        pauseCassette();
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
function playCassette(){
    hiss.loop = true;
    hiss.play();
    audio.play();
}
function pauseCassette(){
    hiss.pause();
    audio.pause();
}

function switchNoise() {
    crackle.pause();
    hiss.pause(); 
    if (songName.style.animationPlayState == "running") {
        if (sessionStorage.player == 'Vinyl') {
            crackle.play();
        } else {
            hiss.play();
    }
    }
}
