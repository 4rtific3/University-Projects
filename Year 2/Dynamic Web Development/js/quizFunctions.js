// Thomas is 7 years old

/* DISCLAIMER
This is code that I have created from my own understanding and
is by no means efficient or the best method available
This serves to be a learning opportunity for me to understand
code development from the ground up, and the logic flows
~~ is used to denote code sections
?? is used to highlight questions / problems
*/

// ~~ 1: Creating arrays with quiz details
// Additional quiz arrays can be added as necessary
var quizzes = [
	[ // Trivia quiz (quizzes[0][i][i])
		["If Tommy has 10 marbles, and Tom woke up at 8am, how old is Thomas?\nHint: The answer is in quizFunctions.js", "How many types of saxophones are there?", "Which item is not a berry?", "What was Mickey Mouse's original name?", "Who is the reknowned artist who painted the 'Mona Lisa'?", "What does GIF stand for?", "The ___ is/are the powerhouse of the cell.", "What's the chemical formula for table salt?", "___ is a literary device used where a word sounds like what it is describing.", "What did Elon Musk name his son?"],
		["3", "5", "Banana", "Mortimer Mouse", "Leonardo DiCaprio", "Graphics Intermission Front", "nuclei", "NaCl", "Euphemism", "Ash Musk"],
		["7", "6", "Strawberry", "Moriarty Mouse", "Leonardo Bonacci", "Graphical Isolation Folio", "ribosomes", "NaOH", "Onomatopeia", "γ Ꜽ̇ N-52 Musk"],
		["19", "10", "Cucumber", "Morris Mouse", "Leonardo da Vinci", "Graphics Interchange Format", "centrioles", "SaLT", "Alliteration", "λ Œ̃ I-7 Musk"],
		["23", "14", "Tomato", "Mikey Mouse", "Leonardo DiVinci", "Graphical Image Field", "mitochondia", "NaBrO", "Oxymoron", "X Æ A-12 Musk"],
		["b", "d", "b", "a", "c", "c", "d", "a", "b", "d"]
	],
	[ // quizzes[1][i][i]
		["1","11"],
		[],
		[],
		[],
		[],
		[]
	]
]

// ~~ 2: Declaring variables
var i;
var pageTitle, quizNo, qNo=0;
var ansID;
// Stand in array values for for loop
var order = [0, 0, 0, 0, 0, 0];
// Variables for score keeping
var score=0;
// Variables for random question order
var qLeft=10, qIndex;

/* ~~ 3: Creating a start button that begins the quiz
The start() function hides the button and displays the questions */
function start() {
  // Setting display of page elements
  document.getElementById("startButton").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  hideNext();
  hideFinish();
  hideTryAgain();
  hideExit();
  displayConfirm();

  getPageTitle();
  loadQuiz();
  updateQuiz();
  updateQNo();
}

// 3.1: Function to obtain page title
function getPageTitle() {
  pageTitle = document.title;
}

// 3.2: Function to identify correct quiz from quizzes array based on page title
/* How can I choose the quiz such that I don't have to create a new page for each quiz? (They're all identical anyway)
I can put the quiz selection and the quiz itself in the same page and it would solve the problem,
but am I able to do it with the quiz selection and quizzes in separate pages?*/
function loadQuiz() {
	switch(pageTitle) {
		case "Trivia Quiz":
      quizNo = 0;
      break;
	}
}

// 3.3: Function to update html to display new questions and answers
function updateQuiz() {
  qIndex = Math.floor(Math.random() * qLeft);
// 3.3.1: Assigning questions and answers to a single array
  for (i=0; i<order.length; i++) {
    order[i] = quizzes[quizNo][i][qIndex];
  }

// 3.3.2: Replacing questions and answers
  var elUpdate = document.getElementsByClassName("update");
  for (i=0; i<elUpdate.length; i++) {
    elUpdate[i].innerHTML = order[i];
  }

/* ?? Possible to target a div and changing the values of
all its children so that a class does not have to be assigned to each button,
but only the parent?

  var elUpdate = document.body.children;
  for (let i = 0; i < elUpdate.length; i++) {
    elUpdate[i].innerHTML = order[i];
  }
*/
}

function updateQNo() {
  var h2 = document.querySelector("h2");
  var newQNo = qNo+1;
  var newH2 = "Question " + newQNo;
  h2.innerHTML = newH2;
}

// ~~ 4: Checking answer
/* Matching ID function taken from
https://www.howtocodeschool.com/2021/03/get-id-of-clicked-element-using-javascript.html */
function getAnsID(btn) {
  ansID = btn.id;
}

function checkAns() {
  if (ansID == order[5]) {
    score++;
  }
    else if (ansID == null) {
      alert("Please choose an answer.")
    }

  answerFeedback();
  toggleAnsButtons();
  hideConfirm();
  if (qNo < 9) {
    displayNext();
  }
    else {
      displayFinish();
    }
  
  qLeft --;
  for (i=0; i<6; i++) {
	  quizzes[0][i].splice(qIndex, 1);
  }
}

// 4.1: Function that shows if answer chosen is correct or wrong
function answerFeedback() {
	var elAns = document.getElementById(ansID);
	if (ansID == quizzes[quizNo][5][qIndex]) {
		elAns.classList.add("correct");
	}
		else {
			elAns.classList.add("wrong");
		}
}

// 4.2: Functions to toggle display of navButtons
function displayNext() {
  document.getElementById("next").style.display = "block";
}

function hideNext() {
  document.getElementById("next").style.display = "none";
}

function displayFinish() {
  document.getElementById("finish").style.display = "block";
}

function hideFinish() {
  document.getElementById("finish").style.display = "none";
}

function displayConfirm() {
  document.getElementById("confirm").style.display = "block";
}

function hideConfirm() {
  document.getElementById("confirm").style.display = "none";
}

function showScores() {
  document.getElementById("scores").style.display = "block";
}

function showTryAgain() {
  document.getElementById("tryAgain").style.display = "block";
}

function hideTryAgain() {
  document.getElementById("tryAgain").style.display = "none";
}

function showExit() {
  document.getElementById("exit").style.display = "block";
}

function hideExit() {
  document.getElementById("exit").style.display = "none";
}

// ~~ 5: Function to toggle disabled attribute of answer buttons
function toggleAnsButtons() {
  var elAnsButton = document.getElementsByClassName("ansButton");
  if (elAnsButton[0].disabled == false) {
    elAnsButton[0].disabled = true;
    elAnsButton[1].disabled = true;
    elAnsButton[2].disabled = true;
    elAnsButton[3].disabled = true;
    /* ?? Why does this not work?
    for (i = 0; i < elAnsButton.length; i++); {
      elAnsButton[i].disabled = true;
    }
    */
  }
    else {
      elAnsButton[0].disabled = false;
      elAnsButton[1].disabled = false;
      elAnsButton[2].disabled = false;
      elAnsButton[3].disabled = false;
    }
}

// ~~ 6: Function for next button to load next Q&A
function nextQuestion() {
  removeFeedback();
  qNo ++;
  ansID = null;
  toggleAnsButtons();
  updateQuiz();
  updateQNo();
  hideNext();
  displayConfirm();
}

// 6.1: Function to clear the class given by answerFeedback()
function removeFeedback() {
	var elAns = document.getElementById(ansID);
	if (elAns.classList.contains("correct")) {
		elAns.classList.remove("correct");
	}
		else {
			elAns.classList.remove("wrong");
		}
}

// ~~ 7: Function to finish quiz
function finishQuiz() {
  printScore();
}

// 7.1: Function to show the scores on screen
function printScore() {
  var scoreTotal = document.querySelector("h3");
  var finalScore = "Score: " + score + "/10";
  scoreTotal.innerHTML = finalScore;
  printScoreText();
  showScores();
  document.getElementById("quiz").style.display = "none";
  document.getElementById("finish").style.display = "none";
  showTryAgain();
  showExit();
}

// 7.2: Switch statement function to display text according to the user's score
function printScoreText(){
  var elScoreText = document.getElementById("scoreText");
  switch(true) {
    case score==10:
      elScoreText.innerHTML = "Perfect score! You're a genius!";
      break;
    case score>=7:
      elScoreText.innerHTML = "You're pretty good at this!"
      break;
    case score>=5:
      elScoreText.innerHTML = "Not too bad, you almost got this!"
      break;
    case score<=4:
      elScoreText.innerHTML = "Try again! You might learn something new!"
      break;
  }
}

// ~~ 8: Function for exiting quiz
function exitQuiz() {
  alert("Thank you for playing!");
}