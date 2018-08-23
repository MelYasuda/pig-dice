// business logic

function Player(playerCounter, rollScore, turnScore, totalScore) {
  this.playerCounter = playerCounter;
  this.rollScore = 0;
  this.turnScore = 0;
  this.totalScore = 0;
}

// user interface
$(document).ready(function(){


  var playerCounter = 0;
  var player1 = new Player(playerCounter);
  playerCounter = 1;
  var player2 = new Player(playerCounter);
console.log(player2);

  // set player starting score
  var player1Total = 0;
  var player2Total = 0;

  // create Player objects with player names
  var player1Name = prompt("Please enter player 1 name.");
  var player2Name = prompt("Please enter player 2 name.");

  // disply player score number
  $("#player1-score").append(player1Total);
  $("#player2-score").append(player2Total);

  // start button, display player name input
  $("button#start").click(function(event){
    event.preventDefault();
    $("#player1").text(player1Name);
    $("#player2").text(player2Name);
    $("#player1").toggleClass("active-player");
  });

  // hide/show the instructions
  $(".well").click(function(event){
    $("p, ul").toggle();
  });

  // number randomizer
  $("button#roll").click(function(event){
    randomNumber = Math.floor((Math.random() * 6) + 1);
    // console.log(randomNumber);
    $("#random-number").text(randomNumber);
    $("#track-player1").append("<li>"+randomNumber+"</li>");
    // $("#track-player2").append("<li>"+randomNumber+"</li>");
    player1.rollScore = randomNumber;


    if(player1.rollScore === 1){
      player1.turnScore = 0;
    } else {
      player1.turnScore += randomNumber;
    }
    $("#turn-score-player1").text(player1.turnScore);
    console.log(player1);
  });


  // toggle highlight between each player when hold clicked
  $("#hold").click(function(event){
    $("#player1").toggleClass("active-player");
    $("#player2").toggleClass("active-player");
    player1.totalScore += player1.turnScore;
    player1.turnScore = 0;
    player1.rollScore = 0;
    $("#player1-score").text(player1.totalScore);
    $("#track-player1").text("");
    console.log(player1);


    // if()
  });










});
