'use strict';

//angular.module('app', ['ngResource', 'ngStorage'])
angular.module('app', [])

/*.factory('Residence', ['$resource',
	function($resource) {
		return $resource('http://leiedal.app/api/residence/:reply', {
			save:	{	method: 'POST'	}
		});
	}
]);*/

.controller('MainCtrl', ['$scope', '$http',
	function($scope, $http) {

		var residence;

		// works get questions
		$http.get("http://leiedal.app/api/questions/").success(function(data){
			$scope.questions = data;
			console.log(data);
		});

		$http.post("http://leiedal.app/api/residences/reply", { 'city': 'Kortrijk', 'postalCode': 8500, 'street': 'Grote Markt', 'number': 54 })
			.success(function(data, status, headers, config){
				$scope.residence(data);
			});


		/*var data = ('Kortrijk', 8500, 'Grote Markt', 54);

		$http.post('http://leiedal.app/api/residences/reply', data).success(successCallback);

		console.log(successCallback);*/

		/*$http.post('http://leiedal.app/api/residences/reply',
			{ city: 'Kortrijk', postalCode: 8500, street: 'Grote Markt', number: 54}).success(function(data){

			}).error(function(data){

			});*/

		/*$http.get("http://leiedal.app/api/questions/")
			.success(functionsuccessQuestions){
				console.log(successQuestions);
			}
		$scope.questions = Questions.query();

		console.log($scope.questions)*/



		/*var residence = $resource("http://leiedal.app/api/residences/reply", null, { save: {method: "POST"}});

		residence.save(
			{
				city: 'Kortrijk',
				postalCode: 8500,
				street: 'Grote Markt',
				number: 54
			}
		);


		var Questions = $resource("http://leiedal.app/api/questions/");
		$scope.questions = Questions.query();

		console.log($scope.questions);*/

		//var residence = new ResidenceService();
		//$scope.residence = new residences();

		/*$scope.residence = {};

		$scope.createResidence = function(){
			residence.$save();
    	}*/
	}
]);


/*
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

			// SCORES
			// ======
			// - size
			score += 100-(a.size||1)*30;

			// - floors
			score += 100-(a.floors||2)*30;

			score += 100-(a.basement||1)*30;

			return score;
		};
	}
]);*/
