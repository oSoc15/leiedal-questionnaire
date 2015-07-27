'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function FaqCtrl($scope) {

    $scope.faq = [
        { id: 1, question: 'Wat is Plongg?', awnser: 'Plongg is een energielabel tool dat toelaat om uw energieverbruik te meten. U krijgt persoonlijk advies over hoe u uw energieverbruik kunt optimaliseren.' },
        { id: 2, question: 'Ik vind mijn huis niet?', awnser: 'De kaart is alleen van toepassing voor de inwoners uit de intercommunale Leiedal. Dit samenwerkingsverband bestaat uit dertien gemeentes: Avelgem, Anzegem, Deerlijk, Harelbeke, Kortrijk, Kuurne, Lendelede, Menen, Spiere-Helkijn, Waregem, Wervik, Wevelgem en Zwevegem.'}
    ];
}

controllersModule.controller('FaqCtrl', FaqCtrl);
