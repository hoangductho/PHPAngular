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
    'ui.router',
    'LocalStorageModule',
    'ngResource'
  ])
  .config(function ($stateProvider, localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
    // path to module
    var path = 'modules/auth/';
    // Now set up the states
    $stateProvider
      .state('auth', {
        abstract: true,
        template: '<ui-view></ui-view>',
        controller: 'authCtrl'
      })
      .state('auth.registry', {
        url: '/auth/registry',
        templateUrl: path + 'views/registry.html',
        controller: 'registryCtrl'
      })
      .state('auth.login', {
        url: '/auth/login',
        templateUrl: path + 'views/login.html',
        controller: 'loginCtrl'
      });
  });
