'use strict';

var servicesModule = require('./_index.js');

/*
 * @ngInject
 */

function QuestionnaireService($resource){
    return $resource('http://osocserver.app/api/questions/:id', {}, {
        get:    {method: 'GET'}
    });
}

servicesModule.service('QuestionnaireService', QuestionnaireService);
