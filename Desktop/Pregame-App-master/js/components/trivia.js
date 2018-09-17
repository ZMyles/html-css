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

        <a href="#!/trivia2">Test</a>
    </form>
    

    </div>
`,

controller:["Quiz", function(Quiz){
const vm=this;
        vm.trivia;
        vm.questions=()=>{
            Quiz.triviaSearch().then((response)=>{
            vm.trivia = Quiz.results;
            console.log(vm.trivia)
            });
        }
        vm.questions();

    vm.answer=(userAnswer, correctAnswer)=> {
        let correct = correctAnswer;
        if (userAnswer + '' == correctAnswer) {
            console.log("Correct");
        } else {
            console.log("You're wrong. you suck");
        }
        console.log(userAnswer);
        console.log(correctAnswer);        
    } 
     
}
]
};

angular
.module("pregame")
.component("trivia",trivia);