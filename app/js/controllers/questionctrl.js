'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

// Question controller
// Shows all question
function QuestionCtrl($scope, QuestionnaireService){

    // Returns a single question
    var question = QuestionnaireService.get({id: curQuestion}, function(){
        $scope.question = question;
        console.log($scope.question);
    });

    // Returns all questions
    var listQuestions = QuestionnaireService.query();
    $scope.listQuestions = listQuestions;
    console.log($scope.listQuestions);

    $scope.question_index = 1;


    $scope.testest = function()
    {
        console.log("werkt het");
            $scope.currentQuestion = "D";
    };
    console.log($scope.questions);

}

controllersModule.controller('QuestionCtrl', QuestionCtrl);
