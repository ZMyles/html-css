"use strict";

const triviaq4 = {
    bindings:{
        questions: "<",
        answer: "&"
      },
        template:`
       <trivia questions="$ctrl.trivia[0].question" answers="$ctrl.answer(userAnswer,$ctrl.trivia[0].correct_answer);"></trivia>

      
     `
}

angular
.module("pregame")
.component("triviaq4",triviaq4);