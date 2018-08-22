$(document).ready(function(){
  // set player starting score
  var player1 = 0;
  var player2 = 0;

  // disply player score number
  $("#player1-score").append(player1);
  $("#player2-score").append(player2);

  // start button, display player name input
  $("button#start").click(function(event){
    event.preventDefault();
    var player1Name = prompt("Please enter player 1 name.")
    var player2Name = prompt("Please enter player 2 name.")
    $("#player1").text(player1Name);
    $("#player2").text(player2Name);
  });

  // hide/show the instructions
  $(".well").click(function(event){
    $("p, ul").toggle();
  });

  // number randomizer
  $("button#roll").click(function(event){
    var randomNumber = Math.floor((Math.random() * 6) + 1);
    console.log(randomNumber);
    $("#random-number").text(randomNumber);
  });












});
