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
        "question": "Wie viele Grand-Slam-Titel konnte Novak Djokovic schon gewinnen?",
        "answer_1": "14",
        "answer_2": "19",
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



function init() {
    document.getElementById("all-questions").innerHTML = questions.length;

    showQuestion();

}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    
    }
}