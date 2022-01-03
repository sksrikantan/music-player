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
    document.getElementById(mode).style.display = "block";
    evt.currentTarget.className += " active";
}