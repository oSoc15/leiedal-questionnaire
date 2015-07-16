'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function QuestionCtrl() {

    //view model
    var vm = this;

    vm.question = 0;

    vm.nextQuestion = function(){
        vm.question += 1;
    };

    vm.previousQuestion = function() {
        vm.question -= 1;
    }

}

controllersModule.controller('QuestionCtrl', QuestionCtrl);
