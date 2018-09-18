"use strict";

const triviaThree = {
        template:`
        <div div class="movingBackground">
        <p>{{ $ctrl.trivia[2].question }}</p>
    
        <form ng-submit="$ctrl.answer(userAnswer,$ctrl.trivia[2].correct_answer);">
            <input type="radio" ng-value="true" name="{{$index}}" ng-model="userAnswer">True
            <input type="radio" ng-value="false" name="{{$index}}" ng-model="userAnswer">False
            <button>Submit</button>
        </form>
    </div>
     `,
     controller:["Quiz", "$location", function(Quiz, $location){
        const vm=this;
        vm.questions=()=>{
            Quiz.triviaSearch().then((response)=>{
                vm.trivia = Quiz.results;
                console.log(vm.trivia)
            });
        };
        vm.questions();

        vm.answer=(userAnswer, correctAnswer)=> {
            console.log(userAnswer);
            console.log(correctAnswer);
            if (userAnswer + '' === correctAnswer.toLowerCase()) {
                console.log("Correct");
                Quiz.win();
            } else {
                console.log("Trivia 3 You're wrong. you suck");
                Quiz.lose();
            }
            $location.path("/trivia-four");
        };        
    }]
}

angular
.module("pregame")
.component("triviaThree",triviaThree);