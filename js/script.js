window.onload= function(){

    var kolkoKwadrat = document.getElementsByClassName("kolko-kwadrat")[0];
    var squareInvisibleOverlay = document.getElementsByClassName("squareInvisibleOverlay")[0];
    squareInvisibleOverlay.addEventListener("click",function(){
    kolkoKwadrat.classList.toggle("kolko-kwadrat-rotate");
    });

};

