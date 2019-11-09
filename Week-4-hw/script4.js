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

var position = 0,
    test, Qnumber, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
    [],
    [],
    [],
    [],
    []
];