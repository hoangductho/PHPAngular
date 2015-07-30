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
  .module('seo', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    // module path
    var path = 'modules/seo/'

    // Now set up the states
    $stateProvider
      .state('main.seo', {
        url: '/seo',
        templateUrl: path + 'views/seo.html'
      })
  });
