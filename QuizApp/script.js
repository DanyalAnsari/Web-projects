const questions = [
  {
    question: "Which is the largest animal in the world ?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Giraffe", correct: false },
      { text: "Elephent", correct: false },
      { text: "Whale", correct: true },
    ],
  },
  {
    question: "Which is the fastest animal in the world ?",
    answers: [
      { text: "Tortoise", correct: false },
      { text: "Deer", correct: false },
      { text: "Leopard", correct: true },
      { text: "Tiger", correct: false },
    ],
  },
  {
    question: "Which is the largest organ in the human body ?",
    answers: [
      { text: "Skin", correct: true },
      { text: "Stomach", correct: false },
      { text: "Liver", correct: false },
      { text: "Intestine", correct: false },
    ],
  },
  {
    question: "Which is the Largest planet in the solar system ?",
    answers: [
      { text: "Neptune", correct: false },
      { text: "Saturn", correct: false },
      { text: "Uranus", correct: false },
      { text: "Jupiter", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const next = document.getElementById("next-btn");
const answerBtn = document.getElementById("answer-buttons");
let score = 0;
let index = 0;

const startQuiz = () => {
  index=0;
  score=0;
  document.getElementsByClassName("quiz")[0].style.display = "block";
  next.innerHTML = "Next";
  ShowQuestion(index);
  index++;
};

const ShowQuestion = (index) => {
  resetState();
  let currentQuestion = questions[index];
  questionElement.innerHTML = `Question ${index + 1} .${
    currentQuestion.question
  }`;
  currentQuestion.answers.forEach((answer, idx) => {
    answerElementCreation(answer);
  });
};

const answerElementCreation = (answer) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerHTML = answer.text;
  answerBtn.appendChild(button);
  if (answer.correct) {
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", selectAnswer);
};

const resetState = () => {
  next.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  next.style.display = "block";
};

const showScore=()=>{
  resetState();
  questionElement.innerHTML =`You have scored ${score} out of ${questions.length}`
  next.innerHTML='Play Again';
  next.style.display='block';
}

next.addEventListener("click", () =>{
  if(index == 0){
    startQuiz();
  }else if(index < questions.length){
    ShowQuestion(index);
    index++;
  }else{
    showScore();
    index=0;
  }
});
