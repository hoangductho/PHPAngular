'use strict';

/**
 * @ngdoc function
 * @name backendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the backendApp
 */
angular.module('backendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
