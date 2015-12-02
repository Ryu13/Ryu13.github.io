var app = angular.module('cosplay');

app.directive('gallery', Gallery);

Gallery.$inject = [];

function Gallery() {
    return {
        restrict: 'E',
        scope: {},
        transclude: false,
        templateUrl: 'cosplay/cosplay.template.html',
        controller: GalleryController(),
        link: function (scope, elem, attrs) {
            var path = "images/kirito/";
            scope.pics = [];
            for (var i = 0; i < 3; i++) {
                scope.pics.push({src: path + "kirito" + (i+1) + '.JPG'});  
            }
        }
    }
};



function GalleryController() {
    
};
