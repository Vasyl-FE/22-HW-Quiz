const data = [
    {
        id: 1,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "A flutter is a group of:",
        answers: [
            { answer: "bees", isCorrect: false },
            { answer: "penguins", isCorrect: false },
            { answer: "butterflies", isCorrect: true },
            { answer: "camels", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            { answer: "bats", isCorrect: false },
            { answer: "vultures", isCorrect: true },
            { answer: "ants", isCorrect: false },
        ],
    },
];

let questionIndex = 0;
let selectedAnswer = null;
let correctCount = 0;
let wrongCount = 0;

const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submitBtn = document.querySelector(".submit")
const playAgainBtn = document.querySelector(".play")
const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const correctAnswers = document.querySelector(".correct")
const wrongAnswers = document.querySelector(".wrong")
const scoreAnswers = document.querySelector(".score")

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach(element => {
        element.addEventListener("click", (event) => {
            selectedAnswer = event.target.value;
        })
    })
}

const showQuestion = (index) => {
    if (index === data.length) {
        showResult();
    } else {
        question.textContent = data[index].question;
        answersContainer.innerHTML = data[index].answers.map((item, index) => `<div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for=${index}>${item.answer}</label>
      </div>`).join("")
        selectAnswer()
    }
}

const onSubmit = () => {
    submitBtn.addEventListener("click", (event) => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            questionIndex++
            showQuestion(questionIndex)
        } else {
            alert("Select an answer!")
        }
    })
}

const showResult = () => {
    gameScreen.style.display = "none"
    resultScreen.style.display = "block"
    correctAnswers.textContent = `Correct Answers: ${correctCount}`;
    wrongAnswers.textContent = `Wrong Answers: ${wrongCount}`;
    scoreAnswers.textContent = `Score: ${(correctCount - wrongCount) * 10}`;
}

const resetResult = () => {
    questionIndex = 0;
    correctCount = 0;
    wrongCount = 0;
}

playAgainBtn.addEventListener("click", () => {
    gameScreen.style.display = "block"
    resultScreen.style.display = "none"
    resetResult();
    showQuestion(questionIndex);
})

onSubmit()
showQuestion(questionIndex)