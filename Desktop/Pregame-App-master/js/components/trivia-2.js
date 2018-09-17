"use strict";

const trivia2 = {
  bindings:{
    questions: "<",
    answer: "&"
  },
    template:`
   <trivia questions="$ctrl.trivia[0].question" answers="$ctrl.answer(userAnswer,$ctrl.trivia[0].correct_answer);"></trivia>

   <a href="#!/trivia3">Test</a>
 `,
 
controller:["Quiz", "$location",function($location){
    const vm=this;
            vm.total = 0;
        
        vm.answer=(userAnswer, correctAnswer)=> {
            let correct = correctAnswer;
            console.log(userAnswer);
            console.log(correctAnswer);
            if (userAnswer + '' === correctAnswer.toLowerCase()) {
                console.log("Correct");
                vm.total ++
                console.log(vm.total);
                $location.path("/trivia3")
            } else {
                console.log("You're wrong. you suck");
                $location.path("/trivia3");
            }
               
        }     
    }]
}

angular
.module("pregame")
.component("trivia2",trivia2);