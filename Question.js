class Question {
    constructor() {
      this.input = createInput("Name");
      this.inputt = createInput("Answer");
      this.button = createButton('submit');
    
    }
  hide(){
    
    this.button.hide();
    this.input.hide();
    this.inputt.hide();
  }
    display(){
      var title = createElement('h2')
      title.html("My Quiz");
      title.position(130, 0);

      this.question.html("Question:What kind of room has no doors or windows?");
      this.question.position(150,80);
      this.option1.html("1: washroom");
      this.option1.position(150,100);
      this.option2.html("2: mushroom");
      this.option2.position(150,130);

      
      this.input.position(130, 160);
      this.button.position(250, 200);
      this.inputt.position(100, 100);

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.inputt.hide();
        contestant.name = this.input.value();
        contestant.answer = this.inputt.value();
        
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update()
        contestant.updateCount(contestantCount);
        
      
      });
  
    }
  }
  