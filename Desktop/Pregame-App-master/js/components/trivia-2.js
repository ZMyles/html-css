"use strict";

const trivia2 = {
  bindings:{
    questions: "<",
    answer: "&"
  },
    template:`
   <trivia questions="$ctrl.trivia[0].question" answers="$ctrl.answer(userAnswer,$ctrl.trivia[0].correct_answer);"></trivia>

   <a href="#!/trivia3">Test</a>
 `
}

angular
.module("pregame")
.component("trivia2",trivia2);