//Back End
var questionState = 0;
var choices = new Array(5);

var panelClicked = function(panelName){
  choices[questionState] = panelName.includes("1");
  questionState++;
}
//Front End
$(document).ready(function(){
  $(".panel").click(function(){
    var panelName = this.className;
    panelClicked(panelName);

    alert(questionState);
  });
});
