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

        // HOMEPAGE WITH MULTIPLE NAMED VIEWS
        .state('home', {
            url: '/',
            views: {
                // HOMEPAGE
                '': {templateUrl: 'page-home.html'},
                // DUMMY PAGE -> SAMPLE
                //'helloworld@home': {templateUrl: 'helloworld.html'}
            }
        })

        // FAQPAGE
        .state('faq', {
            url: '/veel-gestelde-vragen',
            templateUrl: 'page-faq.html'
        })

        // CONTACTPAGE
        .state('contact', {
            url: '/contact',
            templateUrl: 'page-contact.html'
        })


  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
