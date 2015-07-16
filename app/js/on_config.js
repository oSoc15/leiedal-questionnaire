'use strict';

/**
* @ngInject
*/
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  // set a semicolon at the last .state
  // otherwise you will get compile errors
  $stateProvider
      /*.state('home', {
        //url index
        url: '/',
        controller: 'ExampleCtrl',
        //url view
        templateUrl: 'home.html',
        //title: 'Home'
    })*/

     /*.state('home.helloworld', {
        url: '/',
        controller: 'HelloWorldCtrl',
        templateUrl: 'helloworld.html'
    });*/

        // homepage with multiple named views
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

        // map page with multiple named views
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

        // questionnaire page with multiple views
        .state('questionnaire', {
            url: '/questionnaire',
            views: {
                '': {templateUrl: 'page-questionnaire.html'},
                'menu@questionnaire': {templateUrl: 'sub-menu.html', controller: 'QuestionCtrl'}
            }
        })

        // faq page with multiple views
        .state('faq', {
            url: '/veel-gestelde-vragen',
            views:{
                '': {templateUrl: 'page-faq.html'},
                'menu@faq': {templateUrl: 'sub-menu.html'}
            }

        })

        // contact page with multiple views
        .state('contact', {
            url: '/contact',
            views: {
                '': {templateUrl: 'page-contact.html'},
                'menu@contact': {templateUrl: 'sub-menu.html'}
            }

        });


  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
