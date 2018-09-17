"use strict";

const trivia4 = {
    bindings:{
        questions: "<",
        answer: "&"
      },
        template:`
       <trivia questions="$ctrl.trivia[0].question" answers="$ctrl.answer(userAnswer,$ctrl.trivia[0].correct_answer);"></trivia>

       <a href="#!/trivia5">Test</a>
     `
}

angular
.module("pregame")
.component("trivia4",trivia4);