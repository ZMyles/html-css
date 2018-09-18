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
vm.dranks=[ 
            {
                cocktailOne:"Whiskey Smash",
                ingredientOne:[
                    "half lemon cut into wedges",
                    "4 Mint leaves",
                    "3⁄4oz Simple syrup",
                    "2 oz Elijah Craig 12-Year-Old Bourbon",
                    "Glass: Rocks"
                ]
            },

            { 
                cocktailTwo:"Marker's Mark Collins",
                ingredientTwo:["2oz Maker's Mark Bourbon",
                    "1oz Lemon juice",
                    "1 tsp Sugar",
                    "Club soda",
                    "Garnish: 1 Orange wheel & maraschino cherry",
                    "Glass: Collins"
                ]
            },

            {   cocktailThree:"New York Sour",
                ingredientThree:["2 oz Rye whiskey or bourbon",
                    "1oz Lemon juice",
                    "3⁄4 oz",
                    "Simple syrup",
                    "1⁄2 oz Red wine",
                    "Glass: Rocks"
                ]

            },

            {   cocktailFour:"Tequila Mockingbird cocktail",
                ingredientFour:["1 Jalapeño pepper slice",
                    "3 Watermelon cubes (about ⅓ cup)",
                    "2 oz Silver tequila",
                    "Try it with Altos Plata",
                    "3⁄4 oz Fresh lime juice",
                    "3⁄4 oz Agave syrup",
                    "Glass: Rocks"
                ]

            },

            {
                cocktailFive:"Lagerita",
                ingredientFive:["Salt (optional)",
                    "2 oz Cabeza Tequila",
                    "3⁄4 oz Cointreau",
                    "1 oz Lime juice",
                    "4 oz Modelo Especial Beer",
                    "Garnish: 1 Lime wheel",
                    "Glass: Highball"

                ]
            },
            {
                cocktailSix:"The Last Word",
                ingredientSix:["4 oz Gin",
                    "3⁄4 oz Maraschino liqueur",
                    "3⁄4 oz Green Chartreuse",
                    "3⁄4 oz Fresh lime juice",
                    "Glass: Coupe"
            ]
            },
            {   cocktailSeven:"The Aviation",
                ingredientSeven:["2 oz Gin",
                    "1⁄2 oz Maraschino liqueur",
                    "1⁄4 oz Crème de Violette",
                    "3⁄4 oz Fresh lemon juice",
                    "Garnish: Brandied cherry",
                    "Glass: Cocktail"
            ]

            },
            {
                cocktailEight:"The Hanky Panky",
                ingredientEight:["1 1⁄2oz Gin",
                    "1 1⁄2 oz Sweet vermouth",
                    "2 dashes Fernet-Branca",
                    "Garnish: Orange twist",
                    "Glass: Cocktail"
            ]
            },
            {
                cocktailNine:"The Cap Codder",
                ingredientNine:["1 1⁄2 oz Vodka",
                    "Cranberry juice",
                    "Lime wedge",
                    "Glass: Highball"
            ]

            },

            {
                cocktailTen:"The Cucumber Fizz",
                ingredientTen:["2 oz Cucumber, peeled and roughly chopped",
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
                cocktailEleven:"The Harvey WallBanger",
                ingredientEleven:["1 1⁄4 oz Vodka",
                    "3 oz Orange juice",
                    "1⁄2 oz Galliano L'Autentico liqueur",
                    "Garnish: Orange slice",
                    "Glass: Tall"]
        }
        ]

    }
    angular
    .module("pregame")
    .service("Quiz", Quiz);