'use strict';

/**
 * @ngdoc overview
 * @name backendApp
 * @description
 * # backendApp
 *
 * Main module of the application.
 */
angular
  .module('backendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',

    'articles',
    'access',
    'campaign',
    'seo',
    'auth'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
     // Load html5 mode  
    $locationProvider.html5Mode(true);

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    
    // Now set up the states
    $stateProvider
      .state('main', {
        abstract: true,
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });
