'use strict';

var kanjis = angular.module ('kanjis', ['ngRoute']);

kanjis.config (['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'mainController'
        }).otherwise ({
            redirectTo: '/'
        });
    }]);
