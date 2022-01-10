const audio = document.querySelector('audio');
const songList = document.querySelector('.songlist');
const songName = document.querySelector('.vinyl-print');
// const container = document.getElementsByName("container");
//have animation such that gear play state is set from here
const gear = document.querySelectorAll(".gear");
const crackle = document.querySelector('#crackle');
const hiss = document.querySelector('#hiss');
const muffle = document.querySelector ('#muffle');
sessionStorage.player = 'Vinyl';
const playbtns = document.getElementsByName("play-pause");
const bgcolors = {"Vinyl": "#F3F6F8", "Cassette": "#F8F4F3", "Radio": "#F8F7F3", "CD": "#F3F6F8"};

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

    document.getElementsByClassName("container").item(0).style.background = bgcolors[mode];
    document.getElementsByClassName("topnav").item(0).style.background = bgcolors[mode];
    document.getElementsByClassName("navbar").item(0).style.background = bgcolors[mode];
}

songList.addEventListener("click", function(e) {

    var title = e.target.closest('li').getAttribute('data-name');
    var artist = e.target.closest('li').getAttribute('data-artist');
    var source = e.target.closest('li').getAttribute('data-src');

    let titles = document.querySelectorAll('.title')
    titles.forEach(function(match) {
        match.innerText = title;
      });

    let artists = document.querySelectorAll('.artist-name')
    artists.forEach(function(match) {
        match.innerText = artist;
      });

    audio.src = source; 

    
    songName.style.animationPlayState = "running";
    for(var i = 0; i < gear.length; i++){
        gear.item(i).style.animationPlayState = "running";
    }
    // document.getElementById('play-pause').classList = 'fa fa-pause';
    
    for(var i = 0; i < playbtns.length; i++){
        playbtns.item(i).classList = 'fa fa-pause';
    }

    playMusic();

}, false);

function playButton(evt){

    if(songName.style.animationPlayState == "running"){
        songName.style.animationPlayState = "paused";
        for(var i = 0; i < gear.length; i++){
            gear.item(i).style.animationPlayState = "paused";
        }
        // document.getElementById('play-pause').classList = 'fa fa-play';
        for(var i = 0; i < playbtns.length; i++){
            playbtns.item(i).classList = 'fa fa-play';
        }
        pauseMusic();
    }
    else{
        songName.style.animationPlayState = "running";
        for(var i = 0; i < gear.length; i++){
            gear.item(i).style.animationPlayState = "running";
        }
        // document.getElementById('play-pause').classList = 'fa fa-pause';
        for(var i = 0; i < playbtns.length; i++){
            playbtns.item(i).classList = 'fa fa-pause';
        }
        playMusic();
    }
}

function playMusic() {
    if (sessionStorage.player == 'Vinyl') {
        playVinyl();
        } 
    if (sessionStorage.player == 'Cassette') {
        playCassette();
        } 
    if (sessionStorage.player == 'Radio') {
        playRadio();
        } 
    else {
        playCD();
    }
}

function pauseMusic() {
    if (sessionStorage.player == 'Vinyl') {
        pauseVinyl();
        } 
    if (sessionStorage.player == 'Cassette') {
        pauseCassette();
        } 
    if (sessionStorage.player == 'Radio') {
        pauseRadio();
        } 
    else {
        pauseCD();
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
function playRadio(){
    muffle.loop = true;
    muffle.play();
    audio.play();
}
function pauseRadio(){
    muffle.pause();
    audio.pause();
}
function playCD(){
    audio.play();
}
function pauseCD(){
    audio.pause();
}

function switchNoise() {
    crackle.pause();
    hiss.pause();
    muffle.pause(); 
    if (songName.style.animationPlayState == "running") {
        if (sessionStorage.player == 'Vinyl') {
            crackle.play();
        }
        if (sessionStorage.player == 'Cassette') {
            hiss.play();
        }
        if (sessionStorage.player == 'Radio') {
            muffle.play();
        }
    }
}
