'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function backgroundImages() {

    // background image directive for div's questionnaire
    return function(scope, element, attrs){
        var url = attrs.BackImgDirective;
        element.css([
            'background-image': 'url(' + url + ')'
        ]);
    };
}

directivesModule.directive('backgroundImages', backgroundImages);
