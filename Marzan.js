

/**1. Ask for the name of the student. done
2. Ask for 5 Enabling Assessment scores. done 
3. Compute the average of 5 enabling assessment. done
4. Ask for 3 Summative scores.done
5. Compute the average of 3 Summative scores. done
6. Ask for the Final Examination score. done
7. Compute the weighted Grade using the formula:
    Grade = (Class participation * 30%) + (Summative Assessment * 30%) + (Final Examination * 40%)
8. Display the name of the student, Class Participation, Summative Grade, final Grade, and corresponding letter grade based on the following grade system:
    - A: 90-100
    - B: 80-89
    - C: 70-79
    - D: 60-69
    - F: below 60 */

    //added a module so i can run it sa terminal 
    var prompt = require('prompt-sync')();
    for (let i = 0; i<= 5;i++)
    {
    const studentName = prompt("What is your name?"); 
console.log(`Hello ${studentName}`); 

var enablingAssessment = [];
var totalScore = 0;
for(let i = 1;  i <= 5; i++  ){ 

var score = parseInt(prompt(`enter score in EnablingAssessments${i} : `)); 
 
 if (score <= 0 || score >= 100) {
  throw Error('Invalid input'); //terminates when error is mproade

  /**add the terminator to summatives  */
}

enablingAssessment.push(score); 
 totalScore += enablingAssessment[i-1];

 

}

var enablingAverage = totalScore/5; 



var summativeAssessment = [];
var totalScore = 0 
for(let i = 1;  i <= 3; i++  ){ 

var score = parseInt(prompt(`enter score in SummativeAssessments${i}: `)); 
if (score <= 0 || score >= 100) {
  throw Error('Invalid input'); //terminates when error is mproade

  /**add the terminator to summatives  */
}
summativeAssessment.push(score); 
totalScore += summativeAssessment[i-1]; 

var summativeAverage = totalScore/3; 
}



var finalExam = [];
for(let i = 1;  i <= 2; i++  ){ 

var score = parseInt(prompt(`enter score in finalExams${i}: `)); 
if (score <= 0 || score >= 100) {
  throw Error('Invalid input'); //terminates when error is mproade

  /**add the terminator to summatives  */
}
finalExam.push(score); 
}


var classParticipation = [];
for(let i = 1;  i <= 1; i++  ){ 

var score = parseInt(prompt(`enter Class participation${i}: `)); 
if (score <= 0 || score >= 100) {
  throw Error('Invalid input'); //terminates when error is mproade

  /**add the terminator to summatives  */
}
classParticipation.push(score); 
}


var totalGrade=0 
var totalGrade = [];
for(let i = 1;  i <= 1; i++  ){ 

  var totalgrade = (classParticipation * 0.3) + (summativeAssessment * 0.3) + (finalExam * 0.4);
  totalGrade.push(score); 
}

// letters
var letterGrade;
for (let i = 0; i<= 5;i++)

if (totalGrade >= 90) {
  letterGrade = "A";
} else if (totalGrade >= 80) {
  letterGrade = "B";
} else if (totalGrade >= 70) {
  letterGrade = "C";
} else if (totalGrade >= 60) {
  letterGrade = "D";
} else {
  letterGrade = "F";
}

    











console.table({
  "Name": studentName,
  "Enabling Assessment Scores": enablingAssessment,
  "Enabling Assessment Average": enablingAverage,
  "Summative Assessment Scores": summativeAssessment,
  "Summative Assessment Average": summativeAverage,
  "Final Exam Scores": finalExam,
  "Class Participation Score": classParticipation,
  "Total Grade": totalGrade,
  "Letter Grade": letterGrade,
});
}
// end of code but finishing details tomorrow
// terminator for below 0 and above 99
// console.table