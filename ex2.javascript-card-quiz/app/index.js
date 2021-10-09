/*
 * import 구문은 수정하지 말고 사용하세요.
 * import를 처음 보신다면, MDN에서 import, export를 검색해보시기 바랍니다.
 *
 * [주의] quiz.json 파일 내용은 수정하지 마세요.
 */
import data from "./quiz.json";

/*
 * 퀴즈 데이터가 콘솔에 출력됩니다.
 * `data` 변수에 담긴 정보를 이용해서 작업하세요.
 * 아래 콘솔 출력문은 가이드 목적의 코드이니 삭제하셔도 됩니다.
 */

const $startPage = document.querySelector(".start__page");
const $quizPage = document.querySelector(".quiz__page");
const $thanks = document.querySelector(".thanks");
const $question = $quizPage.querySelector(".question");
const $code = $quizPage.querySelector(".code");
const $startButton = document.querySelector(".start");
const $nextButton = document.querySelector(".next");
const $restartButton = document.querySelector(".restart");
const $choices = $quizPage.querySelector(".choices");
const $score = $quizPage.querySelector(".score");
const $currentQuestion = $quizPage.querySelector(".current__question");
const $timer = $quizPage.querySelector(".timer");
const $timeout = $quizPage.querySelector(".timeout");

let countdownId;
let quizIndex = 0;
let score = 0;
let numberOfLeftQuestions = data.length - 1;
let QUIZ;
let timeoutId;


function moveToNextQuestion() {
  clearTimeout(timeoutId);
  quizIndex += 1;
  numberOfLeftQuestions -= 1;
  createQuestion(quizIndex);
  $nextButton.classList.add("hidden");
  $timeout.textContent = "";
}

function moveToQuizPage() {
  $startPage.classList.add("hidden");
  $quizPage.classList.remove("hidden"); 
  createQuestion(0);
}

let $choiceList;

function createQuestion(quizIndex) {
  QUIZ = data[quizIndex];
  let alpahbetValue = 0;
  let choiceId = 0;
  $choices.textContent ="";
  $score.textContent = `Score ${score}`;
  $currentQuestion.textContent = `${quizIndex + 1}/${data.length}`;
  $question.textContent = `Question${quizIndex + 1} ${QUIZ.question}`;
  $code.textContent="";
  
  if (QUIZ.code) {
  $code.textContent = `Code: ${QUIZ.code}`;
  }
  for (let choice of QUIZ.choices) {
    const PROBLEM_INDEX = String.fromCharCode(alpahbetValue + 65);
    alpahbetValue++;
    $choices.innerHTML += `<li class="choice" data-id=${choiceId}><h3 class="problem__index">${PROBLEM_INDEX}</h3><span>${choice}</span></li>` ;
    choiceId++;
  }
  $choiceList = document.querySelectorAll(".choice");
  $choiceList.forEach(element => element.addEventListener("click",checkAnswer));
  $timer.textContent == "";
  timer();
  timeOut();
}

function checkAnswer(event) {
  if (+event.currentTarget.dataset.id === QUIZ.correctAnswer) {
    score++;
    if (numberOfLeftQuestions !== 0) {
    $nextButton.classList.remove("hidden");
    } else {
    $restartButton.classList.remove("hidden");
    saythanks();
    }
    clearInterval(countdownId);
    $choiceList.forEach(element => element.removeEventListener("click",checkAnswer));
    showingCorrectAnswer(QUIZ.correctAnswer);
  } else {
      if (numberOfLeftQuestions !== 0) {
        $nextButton.classList.remove("hidden");
      } else {
          $restartButton.classList.remove("hidden");
          saythanks();
          }
          clearInterval(countdownId);
          $choiceList.forEach(element => element.removeEventListener("click",checkAnswer));
          showingWrongAnswer(+event.currentTarget.dataset.id, QUIZ.correctAnswer);
  }
}

function showingCorrectAnswer(correctAnswer) {
  const $correctAnswer = document.createElement("p");
  $correctAnswer.classList.add("correct-answer");
  const $correctAnswerTextNode = document.createTextNode("O");
  $correctAnswer.appendChild($correctAnswerTextNode);
  $choiceList[correctAnswer].appendChild($correctAnswer);
}

function showingWrongAnswer(wrongAnswer, correctAnswer) {
  const $wrongAnswer = document.createElement("p");
  $wrongAnswer.classList.add("wrong-answer");
  const $wrongAnswerTextNode = document.createTextNode("X");
  $wrongAnswer.appendChild($wrongAnswerTextNode);
  $choiceList[wrongAnswer].appendChild($wrongAnswer);
  showingCorrectAnswer(correctAnswer)
}

function saythanks() {
  const thanksTextNode = document.createTextNode(`Goood job!!! you've got ${score}out of ${data.length}`);
  $thanks.appendChild(thanksTextNode);
  $thanks.classList.add("thanks");
  $container.appendChild($thanks);
}

function restartQuiz() {
  $quizPage.classList.add("hidden");
  $startPage.classList.remove("hidden");
  $restartButton.classList.add("hidden");
  $restartButton.removeEventListener("click",restartQuiz);
  numberOfLeftQuestions = data.length - 1;
  score = 0;
  quizIndex = 0;
  $thanks.textContent = "";
}

function timer() {
  let now = new Date().getTime()
  let nowRealTimeSecondsFixed = Math.floor((now % (1000 * 60))/1000) + 10;
  countdownId = setInterval(function() {
    var nowRealTime = new Date().getTime();
    let nowRealTimeSeconds = Math.floor((nowRealTime % (1000 * 60))/1000);
    $timer.textContent = nowRealTimeSecondsFixed-nowRealTimeSeconds;
    if((nowRealTimeSecondsFixed-nowRealTimeSeconds)==0) {
      clearInterval(countdownId);
    }
  });
}

function timeOut() {
timeoutId = setTimeout(function(){
    showingCorrectAnswer(QUIZ.correctAnswer);
    $timeout.textContent = "time out!!";
    clearInterval(countdownId);
    $choiceList.forEach(element => element.removeEventListener("click",checkAnswer));
    $nextButton.classList.remove("hidden");
  },5000)
}

$startButton.addEventListener("click",moveToQuizPage);
$nextButton.addEventListener("click",moveToNextQuestion);
$restartButton.addEventListener("click",restartQuiz);

