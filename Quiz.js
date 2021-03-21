class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new contestant ();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant .getCount();
        }
        quiz = new Quiz()
        quiz.display();
      }
    }
  
    play(){
      question.hide();
      textSize(30);
      text("My Quiz", 120, 100)/
      contestant.getContestantInfo();
  
      if(allContestants !== undefined){
        var display_position = 130;
        for(var plr in allContestants){
          var correctAns="2";
          if (correctAns === allcontestants[plr].answer)
            fill("green")
          else
            fill("red");
  
          display_position+=20;
          textSize(15);
          text(allContestants[plr].name + ": " + allContestants[plr].distance, 120,display_position)
        }
      }
  
      
    }
  }