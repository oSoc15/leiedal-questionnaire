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

		// Load residence always from api
		$scope.stor.r = $resource('mock-api/myresidence.json').get(function() {});

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
			if ((answer.type || question.type) !== 'year')
				$scope.q++;


		};

		// Calculate energielabel
		$scope.label = function() {

			var a = $scope.stor.r.answers;
			var score = 0;
			if(!a)return '';

			// floors
			score += 100 - (a.floors || 2) * 30;

			return score;
		};

		// Size dependent
		$scope.s = function(key) {
			return 'assets/s' + ($scope.stor.r.answers.size || 2) + '-' + key + '.svg';
		};

		// Size and floor dependent
		$scope.sf = function(key) {
			if(!$scope.stor.r||!$scope.stor.r.answers)return '';
			return 'assets/s' + ($scope.stor.r.answers.size || 2) + 'f' + ($scope.stor.r.answers.floors || 2) + '-' + key + '.svg';
		};
	}
]);

