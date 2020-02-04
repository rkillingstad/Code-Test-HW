//psuedocode
//each answer needs a button next to it that can be clicked and changes when clicked
//when the submit button is pressed you are taken to next question
//each question only has a certain amount of time to answer
//after time remaining, will go to next question (if answered or not)
//do setTimeOut to give a specific amount of time
//need to prevent default
//get value of what the user put, so as to see if its correct-setting a variable to the submission with .value
//need a timer in header/footer that shows remaining time in interval

var Qnumber = document.getElementById("Qnumber");
var test = document.getElementById("test");
var submitButton = document.getElementById("submit");
var results = document.getElementById("scores");
const startButton = document.getElementById("start");
var display = document.querySelector(".main");
var chA = document.querySelector("#chA");
var chB = document.querySelector("#chB");
var chC = document.querySelector("#chC");
var chD = document.querySelector("#chD");
var qTitle = document.querySelector("#question");
var timer = document.querySelector("#timer");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
var count = 0;

$(document).ready(function() {

    $(".main").hide();

    $("#start").on("click", function() {
        $("#start").hide();
        $(".main").show();
        quizStart();
    });

    console.log("#start");

    $("#submit").on("click", function() {
        event.preventDefault();
        count++;
        console.log(count);
        validateAnswer();
        nextQuestion();
    })
});

var questions = [{
        qTitle: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: 2
    },
    {
        qTitle: "The condition in an if / else statement is enclosed within ____.",
        choices: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
        answer: 2
    },

    {
        qTitle: "Which Software Company Developed JavaScript?",
        choices: ["Oracle", "Sun Microsystmes", "Netscape", "Mozilla"],
        answer: 3

    }
];
console.log(questions);

var position = 0,
    test, Qnumber, question, choice, choices, chA, chB, chC, chD, correct = 0;
var lastQuestion = questions.length - 1;
var currentQuestion = 0;
let score = 0;

Qnumber.textContent = "Question " + (currentQuestion + 1) + " of " + questions.length + ":";
console.log(Qnumber);

function quizStart() {
    setUpQuiz();
};

function setUpQuiz() {
    var Q = questions[currentQuestion];
    qTitle.innerHTML = Q.qTitle;
    chA.innerHTML = Q.choices[0];
    chB.innerHTML = Q.choices[1];
    chC.innerHTML = Q.choices[2];
    chD.innerHTML = Q.choices[3];
    console.log("Current Q" + currentQuestion);
};

function nextQuestion() {
    if (count < questions.length) {
        var Q = questions[count];
        qTitle.innerHTML = Q.qTitle;
        chA.innerHTML = Q.choices[0];
        chB.innerHTML = Q.choices[1];
        chC.innerHTML = Q.choices[2];
        chD.innerHTML = Q.choices[3];

        console.log("Current Q" + currentQuestion);

        Qnumber.textContent = "Question " + (count + 1) + " of " + questions.length + ":";
        console.log(Qnumber);
    } else {
        console.log("end of quiz!");
        displayResults();
    }
};

function validateAnswer() {
    var radioValue = $('input[name=choices]:checked').val();
    console.log("Selected value: " + radioValue);
    var correctAnswer = questions[count - 1].answer;
    console.log("Correct answer: " + correctAnswer);

    if (radioValue == correctAnswer) {
        score++;
        console.log("Score: " + score);
        alert("That's Correct!");
    } else {
        console.log("wrong answer");
        alert("Wrong answer!");
    }

    scoreDiv.textContent = "Your Score is " + score + " out of " + questions.length + ".";
};

var qTime = 60;
startButton.onclick = function qTimer() {
    qTime--;
    if (qTime > 0) {
        setTimeout(qTimer, 1000);
        document.getElementById("timer").innerHTML = qTime + " seconds remaining";
    } else {
        console.log("Time's up!");
        alert("Time's up!");
        displayResults();
    }
    console.log(qTime);
};

function displayResults() {
    $("#timer").hide();
    $("#submit").hide();
    $("#choices").hide();
    $("#question").hide();
    Qnumber.textContent = "Final Score: ";
    scoreDiv.textContent = "Your final Score is " + score + " out of " + questions.length + ".";

};