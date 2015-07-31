'use strict';

var app = angular.module('app', ['ngResource', 'ngStorage']);
app.controller('MainCtrl', ['$scope', '$http', '$resource', '$localStorage',
 	function($scope, $http, $resource, $localStorage) {

		// api url: http://leiedal.app/api/
		var api = 'http://leiedal.app/api/';
		

		// Instanciate local storage
		// $scope.store = $localStorage;

		// Get questions from api
		var Question = $resource(api + 'questions');
		$scope.questions = Question.query();

		// Get residence from api
		// Development hashid is filled in
		var Residence = $resource(api + 'residences/4g3j5b80j8ed061');
		$scope.residence = Residence.query();
		console.log($scope.residence);

		var hashId = '4g3j5b80j8ed061';
		// current selected question
		$scope.q = 0;

		$scope.selectedIndex = null;
		$scope.selectedAnswer = null;
        $scope.prefixes = ["s1"];

		$scope.answer = function () {
			$scope.reply = null;
			if ($scope.selectedAnswer) {
				$scope.reply = {
					"residence": hashId,
					"question": $scope.questions[$scope.q].id,
					"answers": [
						{
							"answer": $scope.selectedAnswer['id'],
							"input": null
						}
					],
					"unknown": false
				};
                $scope.selectedIndex = -1;
			} else {
				$scope.reply = {
					"residence": hashId,
					"question": $scope.questions[$scope.q].id,
					"answers": [
						{
							"answer": null,
							"input": null
						}
					],
					"unknown": true
				};
                // default
                $scope.select($scope.questions[$scope.q], $scope.questions[$scope.q].answers[0]);
			}
			$http.post(api + 'residences/reply', $scope.reply)
				.success(function(data, status, headers, config) {
					console.log(data);
				})
				.error(function(data, status, headers, config) {
					console.error(data);
				});
			if ($scope.q < $scope.questions.length-1) {
				$scope.q++;
			}
		};

        $scope.toPreviousQuestion = function()
        {
            if($scope.q > 0)
            {
                $scope.q--;
            }
        };

        $scope.getImageUrl = function(index) {
            var str = "assets/";
            if($scope.questions[$scope.q].title.length < 2) {
                angular.forEach($scope.prefixes, function (val, key) {
                    if(key <= $scope.q) {
                        str += val;
                    }
                });
                return str + $scope.questions[$scope.q].title + (index + 1) + ".svg";
            }
            else {
                return str + "s1-" + $scope.questions[$scope.q].title + ".svg";
            }
        };

		$scope.select = function(question, answer){
			$scope.selectedIndex = (answer['id'] - question['answers'][0]['id']);
			$scope.selectedAnswer = answer;
            console.log($scope.selectedAnswer);
            console.log($scope.questions[$scope.q]);
            var newPrefix = "";
            if($scope.questions[$scope.q].title.length > 2) {
                newPrefix += "-";
            }
            newPrefix += $scope.questions[$scope.q].title + ($scope.selectedIndex + 1);
            if($scope.prefixes.length > $scope.q) {
                $scope.prefixes[$scope.q + 1] = newPrefix;
            }
            else {
                $scope.prefixes.push(newPrefix);
            }
		}
   	}
]);

app.directive('building', function()
{
    return {
        restrict: "A",
        scope: {
            'prefixes': '='
        },
        link: function(scope, element, attr)
        {
            scope.$watch(function() {
                return scope.prefixes;
            },
                function(newVal, oldVal) {
                    if(newVal) {
                        var str = "";
                        element.html("");
                        angular.forEach(newVal, function (val, key) {
                            if(val.length < 3 || val == 'solar') {
                                str += val;
                                element.append('<img src="assets/' + str + '.svg" />');
                            }
                            else {
                                element.append('<img src="assets/s1' + val + '.svg" />');
                            }
                        });
                    }
                }, true);

        }
    };
});