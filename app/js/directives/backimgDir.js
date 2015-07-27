'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function BackImgDir() {
    return function(scope, element, attrs){
        var url = attrs.BackImgDirective;
        element.css([
            'background-image': 'url(' + url + ')'
        ]);
    };
}

directivesModule.directive('BackImgDir', BackImgDir);
