let questions = [
    {
        "question": "Welches ist die Hauptstadt von Ungarn?",
        "answer_1": "Kiew",
        "answer_2": "Bukarest",
        "answer_3": "Minsk",
        "answer_4": "Budapest",
        "right_answer": 4

    },
    {
        "question": "Wer schoss das Siegtor im Finale der Fussball WM 2010?",
        "answer_1": "Arjen Robben",
        "answer_2": "David Villa",
        "answer_3": "Andres Iniesta",
        "answer_4": "Xabi Alonso",
        "right_answer": 3

    },
    {
        "question": "Wie viele Grand-Slam-Titel konnte Novak Djokovic schon gewinnen? <br> (Stand: 12.07.2021)",
        "answer_1": "14",
        "answer_2": "20",
        "answer_3": "23",
        "answer_4": "17",
        "right_answer": 2
    },
    {
        "question": "Wie oft gewann Arnold Schwarznegger den Titel des IFBB Mr. Olympia?",
        "answer_1": "4 mal",
        "answer_2": "7 mal",
        "answer_3": "5 mal",
        "answer_4": "6 mal",
        "right_answer": 2
    },
    {
        "question": "Was ist ein bekanntes mexikanisches Alkoholgetränk?",
        "answer_1": "Tequilla",
        "answer_2": "Rum",
        "answer_3": "Vodka",
        "answer_4": "Gin",
        "right_answer": 1
    }

];

let currentQuestion = 0;
let rightQuestion = 0;
let audio_success = new Audio('audio/success.mp3');
let audio_wrong = new Audio('audio/wrong.mp3');
let audio_win = new Audio('audio/win.mp3');



function init() {
    document.getElementById("all-questions").innerHTML = questions.length;

    showQuestion();

}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        showendscreen();
    } else {

        let percent = currentQuestion / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width:${percent}%`;

        let question = questions[currentQuestion];
        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

//endscreen
function showendscreen() {
    document.getElementById("endScreen").style = '';
    document.getElementById("questionbody").style = 'display: none';
    document.getElementById("bar-of-progress").style = 'display: none';
    document.getElementById("finish-questions").innerHTML = questions.length;
    document.getElementById("right-answers").innerHTML = rightQuestion;
    document.getElementById("header-image").src = 'img/trophy.jpg'
    audio_win.play();
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestion++;
        audio_success.play();

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audio_wrong.play();

    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-image').src = 'img/quiz.jpg';
    document.getElementById("questionbody").style = '';
    document.getElementById("endScreen").style = 'display: none';
    document.getElementById("bar-of-progress").style = '';

    currentQuestion = 0;
    rightQuestion = 0;
    init();



}