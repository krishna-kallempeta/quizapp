let quizData = [
    {
        questions: "What is the capital of France?",
        a: "London",
        b: "Paris",
        c: "Berlin",
        d: "Rome",
        correct: "b"
    },
    {
        questions: "Who wrote 'Romeo and Juliet'?",
        a: "William Shakespeare",
        b: "Charles Dickens",
        c: "Jane Austen",
        d: "Mark Twain",
        correct: "a"
    },
    {
        questions: "What is the chemical symbol for water?",
        a: "H2O",
        b: "CO2",
        c: "O2",
        d: "NaCl",
        correct: "a"
    },
    {
        questions: "Which planet is known as the Red Planet?",
        a: "Mars",
        b: "Jupiter",
        c: "Saturn",
        d: "Venus",
        correct: "a"
    },
    {
        questions: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Leonardo da Vinci",
        c: "Pablo Picasso",
        d: "Michelangelo",
        correct: "b"
    }
];



let app = document.getElementById('app');
let result = document.getElementById('.result')
let qstnumber = document.getElementById('qstnumber');
let marks = document.getElementById('marks')
let quiz = document.getElementById('quiz');
let options = document.querySelectorAll('.answer');
let opdata = document.querySelectorAll('.op');
let btn = document.getElementById('btn');
let submitbtn = document.getElementById('submitbtn');
let qst = document.getElementById('questionid');
let a = document.getElementById('a_text');
let b = document.getElementById('b_text');
let c = document.getElementById('c_text');
let d = document.getElementById('d_text');
let information = document.getElementById('information')
let total = document.getElementById('total');
let corrects = document.getElementById('marks');
let wrong = document.getElementById('wrong');
let previousBtn1 = document.getElementById('previousBtn');


let currentQuestion = 1;
let score = 0;

function qS(){
    qstnumber.innerText=currentQuestion;
    qstnumber.style.fontSize='30px'
}



loadQuestion();
function loadQuestion() {
      qS();
    if (currentQuestion <= quizData.length) {
        qst.innerText = quizData[currentQuestion].questions;
        a.innerText = quizData[currentQuestion].a;
        b.innerText = quizData[currentQuestion].b;
        c.innerText = quizData[currentQuestion].c;
        d.innerText = quizData[currentQuestion].d;
        deSelector();
        
    } else {
        // Quiz ended, do something here
        alert('Quiz ended. Your score: ' + score);
        marks.innerText=score;
        
    }
}

btn.addEventListener('click', () => {
    let ans = selected();
    if (ans) {
        if (ans === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        loadQuestion();
    } else {
        alert('Please select an option');
    }
});

function selected() {
    let ans = null;
    options.forEach((up) => {
        if (up.checked) {
            ans = up.id;
        }
    });
    return ans;
}
function deSelector(){
    options.forEach((unchek)=>{

        unchek.checked=false;
    })
}

let resultbox = document.getElementById('resultBox');
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click',()=>{

    resultbox.classList.remove('none')
    

})




