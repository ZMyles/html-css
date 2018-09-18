"use strict";

const triviaFive = {
  template:`
      <div div class="movingBackground">
      <p>{{ $ctrl.trivia[4].question }}</p>

      <form ng-submit="$ctrl.answer(userAnswer,$ctrl.trivia[4].correct_answer);">
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
         Quiz.checkStats();
          
      };        
  }]
};

angular
.module("pregame")
.component("triviaFive",triviaFive);