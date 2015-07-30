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
			if((answer.type||question.type)!=='year')
				$scope.q++;


		};

		// Energylabels with their properties.
		var labels = [
						{ 'title': 'A', 'minRange': 600, 'maxRange': 699, 'color': '#05A157' },
						{ 'title': 'B', 'minRange': 500, 'maxRange': 599, 'color': '#47B846' },
						{ 'title': 'C', 'minRange': 400, 'maxRange': 499, 'color': '#B9D800' },
						{ 'title': 'D', 'minRange': 300, 'maxRange': 399, 'color': '#FEDC00' },
						{ 'title': 'E', 'minRange': 200, 'maxRange': 299, 'color': '#FFB700' },
						{ 'title': 'F', 'minRange': 100, 'maxRange': 199, 'color': '#FF6E03' },
						{ 'title': 'G', 'minRange': 0, 	 'maxRange': 99,  'color': '#F00001' }
					];

		// Calculate energylabel
		$scope.label = function() {

			// Anwser of the residence
			var a = $scope.stor.r.answers;

			// Initialize the score
			var score = 0;
			if(!a)return '';

			// floors
			score += 100 - (a.floors || 2) * 30;

			score += 100-(a.basement||1)*30;

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
