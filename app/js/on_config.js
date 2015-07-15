'use strict';

/**
* @ngInject
*/
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
      .state('Home', {
        //url index
        url: '/',
        controller: 'ExampleCtrl',
        //url view
        templateUrl: 'home.html'
        //title: 'Home'
        });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
