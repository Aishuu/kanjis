var mainController = function ($scope, $http) {
    'use strict';

    $scope.kanjisDone = [];
    $scope.kanjisResult = [];
    $scope.end = false;

    $scope.newKanji = function () {
        if ($scope.kanjisDone.length === $scope.kanjisArray.length) {
            $scope.kanjisDone = [];
            $scope.kanjisResult = [];
            $scope.end = false;
        }
        var n = Math.floor(Math.random() * ($scope.kanjisArray.length - $scope.kanjisDone.length));
        var i;
        for (i=0; n >= 0; i++) {
            var found = false;
            for (var j=0; j<$scope.kanjisDone.length; j++)
                if ($scope.kanjisDone[j] == i) {
                    found = true;
                    break;
                }
            if (!found)
                n--;
        }
        console.log($scope.kanjisDone);
        $scope.kanjisDone.push(i-1); 
        $scope.kanjisResult[i-1] = 0; 
        $scope.currentGuess = Math.floor(Math.random() * 2);
    };

    $http.get("./assets/data/kanjis.json")
    .success(function(response) {
        $scope.kanjisArray = response;
        console.log(response);
        $scope.newKanji();
    });

    $scope.check = function(result) {
        $scope.kanjisResult[$scope.kanjisDone[$scope.kanjisDone.length-1]] = result;
        if ($scope.kanjisDone.length == $scope.kanjisArray.length)
            $scope.end = true;
        else
            $scope.newKanji();
    }
};

angular.module ('kanjis').controller ('mainController', ['$scope', '$http', mainController]);
