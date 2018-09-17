"use strict";
function Quiz($http){
    const vm= this;
    vm.triviaSearch =() =>{
            return $http({
                method:"GET",
                url://`https://opentdb.com/api.php?amount=10&token=298716bbf3a497b5693f0ceb7c63bef4bffcca8475364d1f2536e7b5c0ff2db8`        })
                `https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=boolean`})
                .then((response) => {
                vm.results = response.data.results;
                return vm.results;
            })    
    };
}
    angular
    .module("pregame")
    .service("Quiz", Quiz);