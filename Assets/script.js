// Global variables
var startBtn = document.querySelector('#start')
var timerEl = document.querySelector('#timer')
var startContainer = document.querySelector('#startBox')
var questionContainer = document.querySelector('#question-box')

var time = 60
var timerId;
// Questions, options, and answers to the quiz.
var questions = [
    {
        title: "1+1",
        choices: ["0","1","2","3"],
        answer: "2"
    },
    {
        title: "2+1",
        choices: ["0","1","2","3"],
        answer: "3"
    },
    {
        title: "What does HTML stand for?",
        choices: ["hide-text-markup-language", "hyper-text-markup-language", "hyper-tab-market-language", "hyper-text-marketing-language"],
        answer: "hyper-text-markup-language"
    },
    {
        title: "What does JS refer to?",
        choices: ["Java Syntax", "Joe Smith", "JavaScript", "Javier Sosa"],
        answer: "JavaScript"
    },
    {
        title: "Which defines CSS?",
        choices: ["central station surveillance", "cascading style sheet", "cascading short style"],
        answer: "cascading style sheet"
    },
    {
        title: "How do we write INDEX.html shorthand?",
        choices: ["! tab", "index tab", "html tab", "there is no shorthand"],
        answer: "! tab"
    }
]

function start() {
    // When the user clicks the start button, then the timers count down from 60.

    timerId = setInterval(function () {
        time--;
        timerEl.textContent = 'Time: ' + time;

        if (time === 0) {
            clearInterval(timerId)
        }
    }, 1000);

    // when the user clicks the start button, the startBox dissappears, and the question-box will appear.
    startContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    displayQuestions();
}


function displayQuestions() {
    // target the h2 and add the question text
    var questionTitleEl = document.querySelector('#title');
    var choicesEl = document.querySelector('#choices');
    var currentQuestionIndex = 0;
    // target the choice div and create the buttons for the answers

    // add an event listener to the buttons that are created that will run a function to check if the anser is correct or wrong
}
startBtn.addEventListener('click', start)