"use strict"
const trivia ={
    bindings: `&`,
    template:`

    <div>
    <p>{{ $ctrl.trivia[0].question }}</p>
    
    <form ng-submit="$ctrl.answer(userAnswer,$ctrl.trivia[0].correct_answer);">
        <input type="radio" ng-value="true" name="{{$index}}" ng-model="userAnswer">True
        <input type="radio" ng-value="false" name="{{$index}}" ng-model="userAnswer">False
        <button>Submit</button>

        
    </form>
    

    </div>
`,

controller:["Quiz", "$location" ,function(Quiz,$location){
const vm=this;
        vm.total = 0;
        vm.trivia;
        vm.questions=()=>{
            Quiz.triviaSearch().then((response)=>{
            vm.trivia = Quiz.results;
            console.log(vm.trivia)
            });
        }
        vm.questions();

    vm.answer=(userAnswer, correctAnswer)=> {
        
        console.log(userAnswer);
        console.log(correctAnswer);
        if (userAnswer + '' === correctAnswer.toLowerCase()) {
            console.log("Correct");
            vm.total ++
            console.log(vm.total);
            $location.path("/triviaq2")
        } else {
            console.log("You're wrong. you suck");
            $location.path("/triviaq2");
        }
           
    }     
}
]
};

angular
.module("pregame")
.component("trivia",trivia);