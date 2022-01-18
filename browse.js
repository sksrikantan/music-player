const grid = document.querySelector('.grid');
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")


grid.addEventListener("click", function(e) {

    var nft = e.target.closest('.nft');
    var price = nft.querySelector('.price').innerText;
    var image = nft.querySelector(".image").src;
    var audio = nft.querySelector(".song").src;
    var title = nft.querySelector(".title").innerText;
    var artist = nft.querySelector(".artist").innerText;
    var description = nft.querySelector(".description").innerText;

    modal.style.display = "block"

    document.getElementsByClassName('modal-price').item(0).innerText = price;
    document.getElementsByClassName('modal-image').item(0).src = image;
    // document.getElementsByClassName('modal-audio').item(0).innerText = audio;
    document.getElementsByClassName('modal-title').item(0).innerText = title;
    document.getElementsByClassName('modal-artist').item(0).innerText = artist;
    document.getElementsByClassName('modal-description').item(0).innerText = description;

    // console.log(modalImage);

}, false);

closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}
