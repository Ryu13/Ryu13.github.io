'use strict';
var app = angular.module('main', ['cosplay']);//['ui.router']);

//change me later
var basePath = "C:/Users/RYU/Desktop/Rogerayamada.com/personal-rework/";
app.constant("PATHS", {
    'pathRoot': basePath,
    'background': basePath + "backgrounds/Untitled3.png"
});

/*app.config(function ($stateProvider) {
    //$urlRouterProvider.otherwise("/notFound");
    $stateProvider
        .state('cosplay', {
            url: "/cosplay",
            templateUrl: "cosplay.html"
        })
    
        .state('coding', {
            url: "/coding",
            templateUrl: "partials/state1.html"
        })
    
        .state('state1.list', {
            url: "/list",
            templateUrl: "partials/state1.list.html",
            controller: function ($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('gaming', {
            url: "/gaming",
            templateUrl: "partials/state2.html"
        })
    
        .state('cosplay', {
            url: "/cosplay",
            templateUrl: "partials/state2.list.html",
            controller: function ($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        })
        .state('anime', {
            url: '/anime',
            templateUrl: 'partials/anime-watched.html'
        })
    
        .state('about', {
            url: '/aboutMe',
            templateUrl: 'partials/aboutMe'
        })
    
        .state('test', {
            url: '/test',
            templateUrl: 'test.html'
        })
    
    
    ;
});*/