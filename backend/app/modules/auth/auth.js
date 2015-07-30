'use strict';

/**
 * @ngdoc overview
 * @name auth
 * @description
 * # authentication feature of website
 *
 * Main module of the application.
 */
angular
  .module('auth', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    // path to module
    var path = 'modules/auth/';
    // Now set up the states
    $stateProvider
      .state('auth', {
        url: '/auth',
        // abstract: true,
        templateUrl: path + 'views/auth.html',
        // controller: 'authCtrl'
      });
  });
