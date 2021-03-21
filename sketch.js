var canvas;
var gameState = 0;
var contestantCount;
var answer=0;
var allContestants;
var database;
var question;
var contestant;
var  quiz;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount===4){
quiz.update(1);
  }
  if(gameState===1){
    clear();
   quiz.play();
  }
}
