'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
    .module('frontendApp', [
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.bootstrap',

        'offClick',
        'markdown'
    ])
    .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
        // enable mode rewrite module
        $locationProvider.html5Mode(true);

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/state1");

        // set up the states
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "views/main.html",
                // controller: 'MainCtrl'
            })
            .state('articles', {
                url: "/articles",
                templateUrl: "views/articles.html",
                // controller: 'MainCtrl'
            })
            .state('auth', {
                url: "/auth",
                templateUrl: "views/auth.html",
                // controller: 'MainCtrl'
            })
            .state('user', {
                url: "/user",
                templateUrl: "views/user.html",
                // controller: 'MainCtrl'
            });
    });
