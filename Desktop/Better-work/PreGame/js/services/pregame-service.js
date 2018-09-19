"use strict";
function Quiz($http, $location){
    const vm= this;
    vm.wins = 0;
    vm.losses = 0;
    vm.triviaSearch =() =>{
        return $http({
            method:"GET",
            url:
            `https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=boolean`
        }).then((response) => {
            vm.results = response.data.results;
            return vm.results;
        });    
    };
    
    //-------------------------------Methods For Questions
    vm.win = () => {
        vm.wins++;
    };
    vm.lose = () => {
        vm.losses++;
    };
    vm.checkStats = () => {
        console.log(`Wins: ${vm.wins}`, `Losses: ${vm.losses}`);
        if (vm.wins === 5) {
            $location.path("/victory");
        } else {
            $location.path("/defeat");
        }
    };

    //---------------------------Array of Drinks
    vm.dranks=[ 
        {   
            
            name:"Whiskey Smash",
            ingredient:[
                "half lemon cut into wedges",
                "4 Mint leaves",
                "3⁄4oz Simple syrup",
                "2 oz Elijah Craig 12-Year-Old Bourbon",
                "Glass: Rocks"
            ]
        },
    
        { 
            name:"Marker's Mark Collins",
            ingredient:["2oz Maker's Mark Bourbon",
                "1oz Lemon juice",
                "1 tsp Sugar",
                "Club soda",
                "Garnish: 1 Orange wheel & maraschino cherry",
                "Glass: Collins"
            ]
        },
    
        {   name:"New York Sour",
            ingredient:["2 oz Rye whiskey or bourbon",
                "1oz Lemon juice",
                "3⁄4 oz",
                "Simple syrup",
                "1⁄2 oz Red wine",
                "Glass: Rocks"
            ]
    
        },
    
        {   name:"Tequila Mockingbird cocktail",
            ingredient:["1 Jalapeño pepper slice",
                "3 Watermelon cubes (about ⅓ cup)",
                "2 oz Silver tequila",
                "Try it with Altos Plata",
                "3⁄4 oz Fresh lime juice",
                "3⁄4 oz Agave syrup",
                "Glass: Rocks"
            ]
    
        },
    
        {
            name:"Lagerita",
            ingredient:["Salt (optional)",
                "2 oz Cabeza Tequila",
                "3⁄4 oz Cointreau",
                "1 oz Lime juice",
                "4 oz Modelo Especial Beer",
                "Garnish: 1 Lime wheel",
                "Glass: Highball"
    
            ]
        },
        {
            name:"The Last Word",
            ingredient:["4 oz Gin",
                "3⁄4 oz Maraschino liqueur",
                "3⁄4 oz Green Chartreuse",
                "3⁄4 oz Fresh lime juice",
                "Glass: Coupe"
        ]
        },
        {   name:"The Aviation",
            ingredient:["2 oz Gin",
                "1⁄2 oz Maraschino liqueur",
                "1⁄4 oz Crème de Violette",
                "3⁄4 oz Fresh lemon juice",
                "Garnish: Brandied cherry",
                "Glass: Cocktail"
        ]
    
        },
        {
            name:"The Hanky Panky",
            ingredient:["1 1⁄2oz Gin",
                "1 1⁄2 oz Sweet vermouth",
                "2 dashes Fernet-Branca",
                "Garnish: Orange twist",
                "Glass: Cocktail"
        ]
        },
        {
            name:"The Cap Codder",
            ingredient:["1 1⁄2 oz Vodka",
                "Cranberry juice",
                "Lime wedge",
                "Glass: Highball"
        ]
    
        },
    
        {
            name:"The Cucumber Fizz",
            ingredient:["2 oz Cucumber, peeled and roughly chopped",
                "1 1⁄2 oz Grey Goose La Poire flavored vodka",
                "1⁄2 oz St-Germain Elderflower liqueur",
                "1⁄2 oz Lemon juice",
                "1⁄2 oz Simple syrup",
                "Lemonade or club soda",
                "Garnish: 1 Mint, cucumber slices and lemon zest",
                "Glass: Highball"
            ]
        },
    
        {   
            name:"The Harvey WallBanger",
            ingredient:["1 1⁄4 oz Vodka",
                "3 oz Orange juice",
                "1⁄2 oz Galliano L'Autentico liqueur",
                "Garnish: Orange slice",
                "Glass: Tall"]
            }
    ]
                    vm.getDranks=() =>{
                    return vm.dranks
            };
    
}

angular
    .module("pregame")
    .service("Quiz", Quiz);