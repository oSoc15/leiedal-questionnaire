'use strict';

var servicesModule = require('./_index.js');

/*
 * @ngInject
 */

function QuestionnaireService($resource){
    return $resource('http://leiedal.app/api/questions/:id', {
        get:    {method: 'GET', isArray: 'true'}
    });
}

servicesModule.service('QuestionnaireService', QuestionnaireService);
