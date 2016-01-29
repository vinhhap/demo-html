var pos = 0;
var score = 0;
var questions = [
  ['1 + 1 bằng mấy?', '1', '2', '3', '4', '1'],
  ['2 - 2 bằng mấy?', '0', '1', '2', '3', '0'],
  ['100 - 10 bằng mấy?', '10', '40', '90', '80', '2'],
  ['5 * 4 bằng mấy?', '20', '10', '5', '4', '0'],
  ['10 * 10 bằng mấy?', '10', '1', '20', '100', '3']
];
var $ = function(obj) {
  return document.getElementById(obj);
};
var clickPlay = function() {
  document.getElementsByClassName('main')[0].innerHTML = '<div id="quiz"><div id="question-section"></div><div id="choice-section"></div></div>';
  displayQuestion(0);
}
var displayQuestion = function(pos) {
  choice_section = $("choice-section");
  question_section = $("question-section");
  if(pos >= questions.length) {
    document.getElementsByClassName('main')[0].innerHTML = '<div id="quiz-status">';
    quiz_status = $("quiz-status");
    question_section.innerHTML = "";
    choice_section.innerHTML = "";
    quiz_status.innerHTML = '<h2 class="chuc">Bạn đã trả lời đúng ' + score + ' câu</h2>';
  } else {
    choice_section.innerHTML = "";
    question_section.innerHTML = questions[pos][0];
    for(var i = 1; i <= 4; i++) {
      choice_section.innerHTML += "<input type='radio' name='quiz' value='" + i +"'><span class='answer'>" + questions[pos][i] + "</span><br>";
    }
    choice_section.innerHTML += "<input type='submit' name='submit' value='Chốt' onclick='checkAnswer(" + pos + ")'>"; 
  }
};
var checkAnswer = function(pos) {
  answer = "";
  choices = document.getElementsByName('quiz');
  for(var i = 0; i < choices.length; i++) {
    if(choices[i].checked) {
      answer = i;
    }
  }
  if(answer == questions[pos][5]) {
    score++;
  }
  pos++;
  displayQuestion(pos);
};