const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}
let totalOfCorrectAnwers = 0;
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //input.question(question + candidateAnswer); 



for (let i = 0; i < questions.length; i++) {

  let answer = input.question(questions[i]);
  candidateAnswers.push(answer);
  console.log(candidateAnswers);
}  
  for (i = 0; i < candidateAnswers.length; i++) {
    console.log(i);
     if(correctAnswers[i] == candidateAnswers[i]){
       console.log(`${candidateAnswers} correct!`);
    //   } else {
      //console.log(`${candidateAnswers} is incorrect!`);
     }
    //console.log(candidateAnswers.length);
  }

  for (let i = 0; i < questions.length; i++) {
    if (correctAnswers[i] == candidateAnswers[i]) {
      console.log(totalOfCorrectAnwers);
    }

  /*if(questions == input.question(questions[i])){
     console.log(i);
    }*/   
}
}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //correctAnswers.push("Sally Ride", true, 40, "Trajectory", 3);
 /*for (i = 0; i < candidateAnswers; i++) {
    console.log(i);*/
 //}

  for (i = 0; i < correctAnswers; i++) {
    console.log(i);
 }

 /*for (let i = 0; i < candidateAnswers; i++) {
  if(candidateAnswers == correctAnswers){
   console.log(i);
   } else {
  //console.log(`${candidateAnswers} is incorrect!`);
  }
}*/ 
 
  /* if(answer == candidateAnswers){
     console.log(`${candidateAnswers} is correct!`);
    } else {
      console.log(`${candidateAnswers} is incorrect!`);
   } */

let grade;  //TODO 3.2 use this variable to calculate the candidates score.

grade = Number(totalOfCorrectAnwers / questions.length) * 100;

if (totalOfCorrectAnwers === 0) {
  console.log(`You have a grade of: ${grade}% You FAILED`);
} else if (totalOfCorrectAnwers == 5) {
  console.log(`You have a grade of: ${grade}% You PASSED!`);
} else if (totalOfCorrectAnwers == 1) {
  console.log(`You have a grade of: ${grade}% You FAILDED`); 
} else if (totalOfCorrectAnwers == 2) {
  console.log(`You have a grade of: ${grade}% You FAILDED!`);
} else if (totalOfCorrectAnwers == 3) {
  console.log(`You have a grade of: ${grade}% You FAILED!`);
} else if (totalOfCorrectAnwers == 4) {
  console.log(`You have a grade of: ${grade}% You PASSED!`);
}
console.log(grade);
//} 

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

runProgram()
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};