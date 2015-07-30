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
  .module('campaign', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    // module path
    var path = 'modules/campaign/'

    // Now set up the states
    $stateProvider
      .state('main.campaign', {
        url: '/campaign',
        templateUrl: path + 'views/campaign.html'
      })
  });
