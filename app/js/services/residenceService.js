'use strict';

var servicesModule = require('./_index.js');

/*
 * @ngInject
 */

function ResidenceService($resource){
    return $resource('http://leiedal.app/api/residence/:reply', {
        post:    {method: 'POST'},
        update:  {method: 'PUT'}
    });
}

servicesModule.service('ResidenceService', ResidenceService);
