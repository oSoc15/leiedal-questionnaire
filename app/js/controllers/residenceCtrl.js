'use strict'

var controllersModule = require('./_index');

/**
 * @ngInject
 */

// Question Details
// Shows a specific question by id
function ResidenceCtrl($scope, ResidenceService, $stateParams, $state){

    // create new instance
    $scope.residence = new ResidenceService();

    // create object


    // add new residence
    $scope.addResidence = function (){
        $scope.residence.$save(function(){
            $state.go('questionnaire')
        });
    };
}

controllersModule.controller('ResidenceCtrl', ResidenceCtrl);
