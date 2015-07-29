'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

module.exports = angular.module('app.directives', [require('angular-resource')]);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
