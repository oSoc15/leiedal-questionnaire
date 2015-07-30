'use strict';

angular.module('app', ['ngResource', 'ngStorage'])

.controller('MainCtrl', ['$scope', '$resource', '$localStorage',
	function($scope, $resource, $localStorage) {

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

		$scope.answer = function(question, answer) {

			// TODO: check for question type

			// Normal input
			$scope.stor.r.answers[question.key] = ans.value;
		};
	}
]);

