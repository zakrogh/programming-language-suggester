//Back End
var questionState = 1;
var choices = new Array(5);

var panelClicked = function(panelName){
  choices[questionState - 1] = panelName.includes("1");
}
/*choices:
* 0 = Do you like creating objects?
* 1 = Do you like strict rules?
* 2 = favorite ice cream flavor - gets ignored
* 3 = should white space matter - always returns Python if yes
* 4 = do you like confusing stuff - always returns C if yes, takes priority over Python
*/
var calculateResults = function(){
  if(choices[4]){
    return "C";
  }
  else if (choices[3]) {
    return "Python";
  }
  else if(choices[0]){
    if(choices[1]){
      return "CSharp";
    }else{
      return "Javascript";
    }
  }
  else{
    if(choices[1]){
      return "Scheme";
    }
    else{
      return "Erlang";
    }
  }

}
//Front End
var displayNext = function(){
  $(".state" + questionState).toggle();
  questionState++;
  $(".state" + questionState).fadeToggle();
}
var showResults = function(results){
  $(".panel, .well").css("display", "none");
  $(".language" + results).toggle();
  $(".modal").modal();
}

$(document).ready(function(){
  $(".panel").click(function(){
    var panelName = this.className;
    panelClicked(panelName);
    if(questionState === 5){
      var results = calculateResults();
      showResults(results);
    }
    displayNext();
  });
});
