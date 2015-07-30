'use strict';

/**
 * @ngdoc overview
 * @name articles
 * @description
 * # module process all features of articles
 *
 * Main module of the application.
 */
angular
  .module('access', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    // module path
    var path = 'modules/access/'

    // Now set up the states
    $stateProvider
      .state('main.access', {
        abstract: true,
        templateUrl: path + 'views/access.html'
      })
      .state('main.access.group', {
        url: '/access/group',
        templateUrl: path + 'views/group.html'
      })
  });
