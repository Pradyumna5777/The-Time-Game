var pbtm=document.querySelector("#pbtm");
function makeBubble() {
  var count = "";

  for (var i = 1; i <= 144; i++) {
    var rn =Math.floor(Math.random()*10);
    count += `<div class="bubble">${rn}</div>`;
    pbtm.innerHTML = count;
  }
  
}
var timer=60;
function runTimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;

        }else{
            clearInterval(timer);
            pbtm.innerHTML="";
            pbtm.innerHTML=`<h1>Game Over</h1>`;
        }
    },1000);
}
runTimer();
makeBubble();

var hitrn;
function getNewHit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
getNewHit();

var score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
var clickednum=Number(details.target.textContent);
if(clickednum === hitrn){
    increaseScore();
    getNewHit();
    makeBubble();
}

})