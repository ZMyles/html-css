"use strict";

angular.module("pregame")
        .config(($routeProvider) => {
            $routeProvider
              .when("/home", {
                template:`<home-page></home-page>`
              })
              .when("/trivia", {
                template:`<trivia></trivia>`
              })
              .when("/triviaq2", {
                template: `<triviaq2></triviaq2>`
              })
              .when("/triviaq3", {
                template: `<triviaq3></triviaq3>`
              })
              .when("/triviaq4", {
                template: `<triviaq4></triviaq4>`
              })
              .when("/triviaq5", {
                template: `<triviaq5></triviaq5>`
              })
              .when("/winner", {
                template: `<winner></winner>`
              })
              .when("/loser", {
                template: `<loser></loser>`
              })
              .otherwise({redirectTo:"/home"})
                
          })
