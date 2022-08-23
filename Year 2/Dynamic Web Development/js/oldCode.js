// Shortened to for loop in 3.3.2

elQ = document.getElementById("question");
newMathQ = mathQ[i];
elQ.innerHTML = newMathQ;

elA = document.getElementById("a");
newA = mathA[i];
elA.innerHTML = newA;

elB = document.getElementById("b");
newB = mathB[i];
elB.innerHTML = newB;

elC = document.getElementById("c");
newC = mathC[i];
elC.innerHTML = newC;

elD = document.getElementById("d");
newD = mathD[i];
elD.innerHTML = newD;

/* Tried using onload() to preload the arrays
but the browser could not access the arrays through onload()
even when they were loaded and called by alert()
Updated to run when start() was called in 3
Created a nested array to store various quiz arrays
such that all arrays could be accesed from a single website */
function quizSelection() {
  var pageTitle = document.title;
  if (pageTitle == "Math Quiz") {
    var mathQ = ["2+2=", "4+17="];
    var mathA = ["3", "a"];
    var mathB = ["4", "b"];
    var mathC = ["0", "c"];
    var mathD = ["22", "d"];
    var mathCorrect = ["b", "c"];
    alert(mathA[0]);
  }
}

function toggleWrong() {
  var elWrong = document.getElementById(quizzes[quizNo][5][qNo]);
  if (elWrong.classList.contains("wrong")) {
    elWrong.classList.remove("wrong");
    elWrong.classList.add("correct");
  }
    else {
      elWrong.classList.remove("correct");
      elWrong.classList.add("wrong");
    }
}