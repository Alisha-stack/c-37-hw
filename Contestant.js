class Contestant {
  constructor(){

    this.index=null;
    this.name=null;
    this.answer=0;
  }

  getCount(){
    var contestantrCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",function(data){
        contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
        contestantCount: count
    });
  }

  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantrIndex).set({
      name:this.name,
      answer:this.answer
      
    });

  }
  static getContestantInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}
