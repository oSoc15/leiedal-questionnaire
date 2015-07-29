'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function questionnaireDirective() {
console.log('test');
  return {
    restrict: 'EA',
    templateUrl: 'page-contact.html',
    scope:{
            'currentQuestion': '=',
    },
    link: function(scope, element) {

        scope.$watch(function(){return scope.currentQuestion}, function(newVal, oldVal){
            if(newVal) {
                console.log("changed");
            }
        }, true);

      element.on('click', function() {
        console.log('ng-questionnaire');
      });
    }
  };

}

directivesModule.directive('questionnaireDirective', questionnaireDirective);
