window.onload = function(){
    document.onclick = function(e){
        if(e.target.id == 'overlay'){
            onClickMenu()
        }
    };
};
function onClickMenu(){
    document.getElementById("menu").classList.toggle("change")
    document.getElementById("menu-ul").classList.toggle("change")
    document.getElementById("menu-bg").classList.toggle("change-bg")
    let overlay = document.getElementById('overlay')
    overlayDisplay = window.getComputedStyle(overlay).display
    if(overlayDisplay == "none"){
        overlay.style.display = "block"
    }else{
        overlay.style.display = "none"
    }
}