'use strict';

/**
* @ngInject
*/
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  // set a semicolon at the last .state
  // => you will get compile errors
  $stateProvider
    // Homepage with multiple named views
    .state('home', {
        url: '/',
        views: {
            // HOMEPAGE
            '': {templateUrl: 'page-home.html'},
            'options@home': {templateUrl: 'sub-calcoptions.html'},
            'menu@home': {templateUrl: 'sub-menu.html'},
            'search@home': {templateUrl: 'sub-search.html'}
        }
    })

    // Map page with multiple named views
    .state('map', {
        url: '/map',
        views:{
            '': {templateUrl: 'page-map.html'},
            'menu@map': {templateUrl: 'sub-menu.html'}
        }
    })

    // landing questionnaire page with multiple views
    .state('landingquestionnaire', {
        url: '/infoquestionnaire',
        views: {
            '': {templateUrl: 'page-landing-questionnaire.html'},
            'menu@landingquestionnaire': {templateUrl: 'sub-menu.html'}
        }
    })

    // Questionnaire page with multiple views
    .state('questionnaire', {
        url: '/questionnaire',
        views: {
            '': {templateUrl: 'page-questionnaire.html', controller: 'QuestionCtrl'},
            'menu@questionnaire': {templateUrl: 'sub-menu.html'}
        }
    })

    // Contact page with multiple views
    .state('contact', {
        url: '/contact',
        views: {
            '': {templateUrl: 'page-contact.html', controller: 'ContactCtrl'},
            'menu@contact': {templateUrl: 'sub-menu.html'}
        }
    })

    // FAQ page with multiple views
    .state('faq', {
        url: '/veel-gestelde-vragen',
        views:{
            '': {templateUrl: 'page-faq.html', controller: 'FaqCtrl'},
            'menu@faq': {templateUrl: 'sub-menu.html'}
        }

    })

    // Energytips page with multiple views
    .state('energytips', {
        url: '/energie-tips',
        views:{
            '': {templateUrl: 'page-energytips.html', controller: 'ExampleCtrl'},
            'menu@faq': {templateUrl: 'sub-menu.html'}
        }
    })



  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
