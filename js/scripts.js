// business logic

function Player(playerCounter, rollScore, turnScore, totalScore) {
  this.playerCounter = playerCounter;
  this.rollScore = 0;
  this.turnScore = 0;
  this.totalScore = 0;
}

Player.prototype.win = function() {
  if(this.totalScore >= 10) {
    alert(this.playerCounter + "won!");
    $("#player1-score").text("");
    $("#player2-score").text("");
    $("#turn-score-player1").text("");
    $("#turn-score-player2").text("");
  }
}


// user interface
$(document).ready(function(){

  var playerCounter = 0;
  var player1 = new Player(playerCounter);
  playerCounter = 1;
  var player2 = new Player(playerCounter);
console.log(player2);
  var playerTurn = 0;

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
    // $("#track-player2").append("<li>"+randomNumber+"</li>");
    if(playerTurn === 0) {
      player1.rollScore = randomNumber;
      $("#track-player1").append("<li>"+randomNumber+"</li>");
      if(player1.rollScore === 1){
        player1.turnScore = 0;
        $("#track-player1").text("");
        playerTurn = 1;
      } else {
        player1.turnScore += randomNumber;
      }
      $("#turn-score-player1").text(player1.turnScore);
      console.log(player1);
    } else if (playerTurn === 1) {
        player2.rollScore = randomNumber;
        $("#track-player2").append("<li>"+randomNumber+"</li>");
        if(player2.rollScore === 1){
          player2.turnScore = 0;
          $("#track-player2").text("");
          playerTurn = 0;
        } else {
          player2.turnScore += randomNumber;
        }
        $("#turn-score-player2").text(player2.turnScore);
        console.log(player2);
      }
    });



  // toggle highlight between each player when hold clicked
  $("#hold").click(function(event){
    $("#player1").toggleClass("active-player");
    $("#player2").toggleClass("active-player");

    // function turnCounter(whoseturn) {
    //   if (whoseturn === 0) {
    //     player1.totalScore += player1.turnScore;
    //     player1.turnScore = 0;
    //     player1.rollScore = 0;
    //     $("#player1-score").text(player1.totalScore);
    //     $("#track-player1").text("");
    //     console.log(player1);
    //   } else if (whoseturn === 1) {
    //     player2.totalScore += player2.turnScore;
    //     player2.turnScore = 0;
    //     player2.rollScore = 0;
    //     console.log(player2)
    //   }
    // }

    if (playerTurn === 0) {
      player1.totalScore += player1.turnScore;
      player1.turnScore = 0;
      player1.rollScore = 0;
      $("#player1-score").text(player1.totalScore);
      $("#track-player1").text("");

      playerTurn = 1;
    } else if (playerTurn === 1) {
      player2.totalScore += player2.turnScore;
      player2.turnScore = 0;
      player2.rollScore = 0;
      $("#player2-score").text(player2.totalScore);
      $("#track-player2").text("");
      playerTurn = 0;

    }

    player1.win();
    player2.win();
    // player2.win();
    // player1.totalScore += player1.turnScore;
    // player1.turnScore = 0;
    // player1.rollScore = 0;
    // $("#player1-score").text(player1.totalScore);
    // $("#track-player1").text("");
    // console.log(player1);


    // if()
  });










});
