'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ContactCtrl($scope) {

    // E-mail validator
    //$scope.email = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    // Question categories
    $scope.categories = [
        { id: 1, name: "Energielabel berekenen" },
        { id: 2, name: "Adrespunten" },
        { id: 3, name: "Tips" },
        { id: 4, name: "Overig" }
    ];

}

controllersModule.controller('ContactCtrl', ContactCtrl);
