"use strict"
const trivia = {
    template:`
    <div class="movingBackground">
        <p id="questions">{{ $ctrl.trivia[0].question }}</p>
    
        <form ng-submit="$ctrl.answer(userAnswer,$ctrl.trivia[0].correct_answer);">
            <input class="buttonTrue" type="radio" ng-value="true" name="{{$index}}" ng-model="userAnswer">Fact?
            <input class="buttonFalse" type="radio" ng-value="false" name="{{$index}}" ng-model="userAnswer">False?
            <button class="submit">Submit</button>
        </form>
    </div>
    `,
    //Injected Our "Quiz" services and "$location" to use their properties 
    controller:["Quiz", "$location" ,function(Quiz,$location){
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
                console.log("Trivia 1 You're wrong. you suck");
                Quiz.lose();
            }
            $location.path("/trivia-two");
        };     
    }]
};

angular
.module("pregame")
.component("trivia",trivia);