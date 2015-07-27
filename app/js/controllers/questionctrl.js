'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

// Question controller
// Shows all question
function QuestionCtrl($scope, QuestionnaireService){
    // Returns a single question
    // GET-request to http://osocserver.app/api/questions/:id
    /*var question = QuestionnaireService.get({id: 1}, function(){
        console.log(question);
    });*/

    // Returns all questions
    // GET-request to http://osocserver.app/api/questions
    $scope.questions = QuestionnaireService.query();
    console.log($scope.questions);
}

controllersModule.controller('QuestionCtrl', QuestionCtrl);
