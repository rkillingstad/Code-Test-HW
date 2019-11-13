//psuedocode
//need header with title
//need a start quiz button when first opened
//need to set variables (so need id's and class names to reference)
//need a question, followed by 4 possible answers 
//each answer needs a button next to it that can be clicked and changes when clicked
//need a submit button--changes with hover 
//when the submit button is pressed you are taken to next question
//each question only has a certain amount of time to answer
//after time remaining, will go to next question (if answered or not)
//make the questions an array(??)
//do setTimeOut to give a specific amount of time
//eventListener for submit eg. submitEL.addEventListener("click", function(event){...})
//need to prevent default
//get value of what the user put, so as to see if its correct-setting a variable to the submission with .value
//need a timer in header/footer that shows remaining time in interval

var Qnumber = document.getElementById("Qnumber");
var test = document.getElementById("test");
var submitButton = document.getElementById("submit");
var results = document.getElementById("scores");
var title = 0;
var output = [];
var startButton = document.getElementById("start");



//start button to begin test
//clicking starts timer and sends to first question

startButton.onClick = function setUpQuiz() {


};






var position = 0,
    test, Qnumber, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [{
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "....",
        choices: ["a", "b", "c", "d"],
        answer: "b"

    }
];

function setUpQuiz() {}



function displayResults() {}


setUpQuiz();



submitButton.addEventListener("click", function(event) {
    event.preventDefault();

});