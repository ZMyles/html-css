"use strict";

const trivia3 = {
    bindings:{
        questions: "<",
        answer: "&"
      },
        template:`
       <trivia questions="$ctrl.trivia[0].question" answers="$ctrl.answer(userAnswer,$ctrl.trivia[0].correct_answer);"></trivia>

       <a href="#!/trivia4">Test</a>
     `,
      
controller:["$location",function($location){
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
.component("trivia3",trivia3);