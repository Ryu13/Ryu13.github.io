'use strict';
var app = angular.module('main');

app.controller('mainController', MainController);

MainController.$inject = ['$scope', '$rootScope', '$log', 'PATHS'];

function MainController($scope, $rootScope, $log, PATHS) {
    $scope.paths = PATHS;
}