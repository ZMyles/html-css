"use strict";

const trivia3 = {
    bindings:{
        questions: "<",
        answer: "&"
      },
        template:`
       <trivia questions="$ctrl.trivia[0].question" answers="$ctrl.answer(userAnswer,$ctrl.trivia[0].correct_answer);"></trivia>

       <a href="#!/trivia4">Test</a>
     `
}

angular
.module("pregame")
.component("trivia3",trivia3);