'use strict';

angular.module('app', ['ngResource', 'ngStorage'])

.controller('MainCtrl', ['$scope', '$resource', '$localStorage',
	function($scope, $resource, $localStorage) {

		// q = question
		// a = awnser
		// r = residence

		// Instanciate local storage
		$scope.stor = $localStorage;

		// Resources
		var Question = $resource('mock-api/questions.json');
		$scope.questions = Question.query();

		// Load residence if not in storage
		if (!$scope.stor.r)
			$scope.stor.r = $resource('mock-api/myresidence.json').get();

		// Currently selected question
		$scope.q = 0;

		// Current progress
		$scope.progress = 10;

		// Stores awnsers and goes to next question
		$scope.answer = function(question, answer) {

			// TODO: check for question type

			// Normal input
			$scope.stor.r.answers[question.key] = answer.value;

			// Sync with API

			// Next question
			if((answer.type||question.type)!=='year')
			$scope.q++;


		};

		// Calculate energielabel
		$scope.label = function() {

			var a = $scope.stor.r.answers;
			var score = 0;

			// floors
			score += 100-(a.floors||2)*30;

			return score;
		};
	}
]);
