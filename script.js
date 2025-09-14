let infoPopup = document.getElementById('info-popup');
let infoContent = document.getElementById('info-content');
let funFactPopup = document.getElementById('fun-fact-popup');
let funFactContent = document.getElementById('fun-fact-content');
let quizPopup = document.getElementById('quiz-popup');
let quizContent = document.getElementById('quiz-content');

function showInfo(layer) {
    infoPopup.classList.add('show');
    let infoText = '';
    switch (layer) {
        case 'crust':
            infoText = 'The crust is the outermost solid layer of the Earth. It is broken up into several large plates that float on the more fluid mantle below.';
            break;
        case 'mantle':
            infoText = 'The mantle is the thick layer of hot, viscous rock between the Earth\'s crust and core. It is divided into the upper mantle and the lower mantle.';
            break;
        case 'outer-core':
            infoText = 'The outer core is a liquid layer of iron and nickel, about 2,250 kilometers thick,with temperatures ranging from 4,000°C to 6,000°C. It is responsible for generating the Earth\'s magnetic field.';
            break;
        case 'inner-core':
            infoText = 'The inner core is a solid, iron-nickel alloy at the center of the Earth, with a temperature of around 5,000°C to 6,000°C.';
            break;
    }
    infoContent.innerHTML = infoText;
}

function closePopup() {
    infoPopup.classList.remove('show');
}

function showFunFact() {
    funFactPopup.classList.add('show');
    let funFactText = 'Did you know that the Earth\'s core is as hot as the surface of the Sun?';
    funFactContent.innerHTML = funFactText;
}

function closeFunFact() {
    funFactPopup.classList.remove('show');
}

function showQuiz() {
    quizPopup.classList.add('show');
    let quizText = 'What is the largest layer of the Earth?<br><br><button onclick="answerQuiz(\'mantle\')">Mantle</button><button onclick="answerQuiz(\'crust\')">Crust</button><button onclick="answerQuiz(\'outer-core\')">Outer Core</button>';
    quizContent.innerHTML = quizText;
}

function closeQuiz() {
    quizPopup.classList.remove('show');
}

function answerQuiz(answer) {
    if (answer === 'mantle') {
        alert('Correct! The mantle is the largest layer of the Earth.');
    } else {
        alert('Sorry, that\'s incorrect. The mantle is the largest layer of the Earth.');
    }
    closeQuiz();
}