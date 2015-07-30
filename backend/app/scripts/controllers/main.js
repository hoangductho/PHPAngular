'use strict';

/**
 * @ngdoc function
 * @name backendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the backendApp
 */
angular.module('backendApp')
  .controller('MainCtrl', function ($scope, $rootScope, $state) {
    $rootScope.state = $state;
  });
