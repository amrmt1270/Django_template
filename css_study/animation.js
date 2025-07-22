let header = document.getElementById('header');
let deg = 0;
function rotateHeader(){
    deg = deg + 6;
    deg = deg % 360;
    if (0 <= deg && deg <= 90){
        header.className = 'face' ;
    }
    else if (90 < deg && deg <= 270){
        header.className = 'back' ;
    }
    else{
        header.className = 'face' ;
    }
    header.style.transform = 'rotateX(' + deg+ 'deg)';
}
setInterval(rotateHeader, 20)