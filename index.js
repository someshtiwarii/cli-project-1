var readlineSync = require("readline-sync");

var score = 0;


var highScores = [
  {
    name: "Somesh",
    score: 3,
  },

  {
    name: "Elon",
    score: 2,
  },
]

var questions = [{
  question: "Where does he lives? ",
  answer: "Allahabad"
}, {
  question: "His favorite superhero would be? ",
  answer: "Superman"
},
{
  question: "Where does he study? ",
  answer: "HBTU"
},
{
  question: "What's his favourite motorsport? ",
  answer: "MotoGP"
},
{
  question: "What does he wants to be ? ",
  answer: "web developer"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Somesh?");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
