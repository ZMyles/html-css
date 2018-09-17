"use strict";

const trivia5 = {
    bindings:{
        questions: "<",
        answer: "&"
      },
        template:`
       <trivia questions="$ctrl.trivia[0].question" answers="$ctrl.answer(userAnswer,$ctrl.trivia[0].correct_answer);"></trivia>

       <a href="#!/trivia2">Test</a>
     `
}

angular
.module("pregame")
.component("trivia5",trivia5);