'use strict';

var angular = require('angular');

//slidemenu

document.getElementById('menu').addEventListener('click', function() {
    showMenu();
});


function showMenu() {
    console.log('click');
    var menu = document.getElementById('items');
    var shadow = document.getElementById('slider');
    var button = document.getElementById('menu');

    menu.className = 'menu-in';
    shadow.className = 'shadow-in';
    button.className = 'none';
}

document.getElementById('slider').addEventListener('click', function() {
    var menu = document.getElementById('items');
    var shadow = document.getElementById('slider');
    var button = document.getElementById('menu');

    menu.className = 'menu-out';
    shadow.className = 'shadow-out';
    button.className = 'button';
});


// angular modules
require('angular-ui-router');
require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',
    'app.controllers',
    'app.services',
    'app.directives'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./on_config'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});
