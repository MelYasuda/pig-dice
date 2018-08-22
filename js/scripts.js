$(document).ready(function(){
  var player1 = 0;
  var player2 = 0;

  $("#player1-score").append(player1);
  $("#player2-score").append(player2);

  $("button#start").click(function(event){
    event.preventDefault();
    var player1Name = prompt("Please enter player 1 name.")
    var player2Name = prompt("Please enter player 2 name.")
    $("#player1").text(player1Name);
    $("#player2").text(player2Name);
  });

  $(".well").click(function(event){
    $("p, ul").toggle();
  });












});
