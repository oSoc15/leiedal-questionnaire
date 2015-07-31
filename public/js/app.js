'use strict';

angular.module('app', ['ngResource', 'ngStorage'])
.controller('MainCtrl', ['$scope', '$http', '$resource', '$localStorage',
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
				}
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
				}
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
			};
		}

		$scope.select = function(question, answer){
			$scope.selectedIndex = answer['id'] - question['answers'][0]['id'];
			$scope.selectedAnswer = answer;
		}
   	}
]);