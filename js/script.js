window.onload= function(){

    var kolkoKwadrat = document.getElementsByClassName("kolko-kwadrat")[0];
    var hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
    var squareInvisibleOverlay = document.getElementsByClassName("squareInvisibleOverKolko-kwadrat")[0];
    squareInvisibleOverlay.addEventListener("click",function(){
    kolkoKwadrat.classList.toggle("kolko-kwadrat-rotate");
    });
    hamburgerMenu.addEventListener("click",function(){
        hamburgerMenu.style.display="block";
    });
    
};

