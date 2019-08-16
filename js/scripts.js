//Back End
var questionState = 1;
var choices = new Array(5);

var panelClicked = function(panelName){
  choices[questionState - 1] = panelName.includes("1");
}
//Front End
var displayNext = function(){
  $(".state" + questionState).toggle();
  questionState++;
  $(".state" + questionState).fadeToggle();
}
var showResults = function(){
  $(".panel").css("display", "none");
  $(".modal").modal();
}

$(document).ready(function(){
  $(".panel").click(function(){
    var panelName = this.className;
    panelClicked(panelName);
    if(questionState === 5){
      calculateResults();
      showResults();
    }
    displayNext();
  });
});
