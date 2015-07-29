'use strict';

var servicesModule = require('./_index.js');

/*
 * @ngInject
 */

function SectionService($resource){
    return $resource('http://leiedal.app/api/sections/:id', {id: '@id'}, {
        get:    {method: 'GET', isArray: 'true'}
    });
}

servicesModule.service('SectionService', SectionService);
