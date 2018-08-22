// business logic

function Player(name, score) {
  this.name = name;
  this.score = [];
}

// user interface
$(document).ready(function(){
  // set player starting score
  var player1Start = 0;
  var player2Start = 0;

  // disply player score number
  $("#player1-score").append(player1Start);
  $("#player2-score").append(player2Start);

  // start button, display player name input
  $("button#start").click(function(event){
    event.preventDefault();
    var player1Name = prompt("Please enter player 1 name.")
    var player2Name = prompt("Please enter player 2 name.")
    $("#player1").text(player1Name);
    $("#player2").text(player2Name);
    $("#player1").toggleClass("active-player");
    var player1 = new Player(player1Name);
    var player2 = new Player(player2Name);
    console.log(player1);
    // console.log(player2);
  });

  // hide/show the instructions
  $(".well").click(function(event){
    $("p, ul").toggle();
  });

  // number randomizer
  $("button#roll").click(function(event){
    randomNumber();
    // console.log(randomNumber);
    $("#random-number").text(randomNumber);
    $("#track-player1").append("<li>"+randomNumber+"</li>");
    // $("#track-player2").append("<li>"+randomNumber+"</li>");
    player1.score.push(randomNumber);
  });

  // generate random number
  var randomNumber = function(){
    Math.floor((Math.random() * 6) + 1);

  }

  // toggle highlight between each player when hold clicked
  $("#hold").click(function(event){
    $("#player1").toggleClass("active-player");
    $("#player2").toggleClass("active-player");


  });










});
