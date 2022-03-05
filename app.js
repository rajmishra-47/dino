'use strict'

const dd=document.getElementById('dino');
const ca=document.getElementById('cac');



function jump(){

    if(dd.classList !='jump')
    dd.classList.add('jump');

setTimeout(function(){
    dd.classList.remove('jump');
},400);
}
document.addEventListener('keydown',function(event){
    jump();
});


let Alive=setInterval(function(){

    let Dtop=parseInt(window.getComputedStyle(dd).getPropertyValue("top"));
    let cactusleft=parseInt(window.getComputedStyle(ca).getPropertyValue("left"));

    if(cactusleft<50 && cactusleft>0 && Dtop>=140)
    alert("game over");

},10);