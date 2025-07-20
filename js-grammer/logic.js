var age = 16 ;
var yobi = '火曜日';
var result = null ;
if (age <= 15){
    result = 800;
}
else if (age >= 16 && yobi =='火曜日'){
    result = 1000;
}
else{
    result = 1800 ;
}
document.write('あなたの映画の料金は'+result+ '円です。')