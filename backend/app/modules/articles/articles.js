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
  .module('articles', [
    'ui.router',
    'markdown',
    'cropImage'
  ])
  .config(function ($stateProvider) {
    // module path
    var path = 'modules/articles/'

    // Now set up the states
    $stateProvider
      .state('main.articles', {
        abstract: true,
        templateUrl: path + 'views/articles.html'
      })
      .state('main.articles.list', {
        url: '/articles',
        templateUrl: path + 'views/list.html'
      })
      .state('main.articles.create', {
        url: '/articles/create',
        templateUrl: path + 'views/create.html',
        controller: 'createCtrl'
      })
  });
