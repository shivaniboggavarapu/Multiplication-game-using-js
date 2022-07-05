var playing=false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("start").onclick=function(){
    if(playing==true){
         location.reload(); //to reload syntax
    }
    else{
        playing=true;
         score=0;
         document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining");
         timeremaining=60;
         document.getElementById("timeremainingvalue").innerHTML=timeremaining;
         hide("gameover");
         document.getElementById("start").innerHTML="Reset Game";
         startcountdown();
         generateQA();
    }
}

for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=function(){
    if(playing==true){
        if(this.innerHTML==correctAnswer){
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            generateQA();
        }
        else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
                hide("wrong");
            },1000);
    }
    }
    
}
}

function startcountdown(){
    action=setInterval(function(){
         timeremaining-=1;
         document.getElementById("timeremainingvalue").innerHTML=timeremaining;
         if(timeremaining==0){
            clearInterval(action);
            show("gameover");
            document.getElementById("gameover").innerHTML="<p> GAME OVER!</p><p>Your score is "+score+"</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("start").innerHTML="Start game";
         }
    },1000);
    
}

function hide(ID){
    document.getElementById(ID).style.display="none";

}

function show(ID){
    document.getElementById(ID).style.display="block";
    
}

function generateQA(){
   var x=1+Math.round(9*Math.random());
   var y=1+Math.round(9*Math.random());
   correctAnswer=x*y;
   document.getElementById("question").innerHTML= x+"x"+y;
   var correctPosition=1+Math.round(3*Math.random());
   document.getElementById("box"+correctPosition).innerHTML=correctAnswer;
   var answers=[correctAnswer];
   for(i=1;i<5;i++){
    if(i != correctPosition){
    var wronganswer;
    do{ 
        wronganswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
     }
     while(answers.indexOf(wronganswer)>-1)
        document.getElementById("box"+i).innerHTML=wronganswer;
        answers.push(wronganswer);
    }
   }
}