"use strict";

const triviaq2 = {
  bindings:{
    questions: "<",
    answer: "&"
  },
    template:`
   <trivia questions="$ctrl.trivia[0].question" answers="$ctrl.answer(userAnswer,$ctrl.trivia[0].correct_answer);"></trivia>

  
 `,
 
controller:[ "$location",function($location){
    const vm=this;
        vm.total = 0;
        vm.answer=(userAnswer, correctAnswer)=> {
           
            console.log(userAnswer);
            console.log(correctAnswer);
            if (userAnswer + '' === correctAnswer.toLowerCase()) {
                console.log("Correct");
                vm.total ++
                console.log(vm.total);
                $location.path("/triviaq3");
            } else {
                console.log("You're wrong. you suck");
                $location.path("/triviaq3");
            }    
        }     
    }]
}

angular
.module("pregame")
.component("triviaq2",triviaq2);