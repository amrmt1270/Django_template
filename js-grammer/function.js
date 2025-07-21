function get_area_of_Triangle(h,w){
    let area = h * w /2;
    return area;
};

function solve_equation(x){
    let y = 2 * x + 6;
    return y ;
}

var birthTime = new Date(2001, 12, 13, 12, 30)

function updateParagraph(){
    var now = new Date()
    var seconds = (now.getTime() - birthTime.getTime())/1000
    display_area = document.getElementById('birth-time')
    display_area.innerText = 'うまれてから' + seconds + '秒経過';
}

setInterval(updateParagraph, 50);