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
              .when("/trivia2", {
                template: `<trivia2></trivia2>`
              })
              .when("/trivia3", {
                template: `<trivia3></trivia3>`
              })
              .when("/trivia4", {
                template: `<trivia4></trivia4>`
              })
              .when("/trivia5", {
                template: `<trivia5></trivia5>`
              })
              .when("/victory", {
                template: `<victory></victory>`
              })
              .when("/defeat", {
                template: `<defeat></defeat>`
              })
              .otherwise({redirectTo:"/home"})
                
          })
