'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('MainCtrl', function ($scope) {
        $scope.menu = false;
        $scope.searchbox = false;
        $scope.loginbox = false;

        $scope.show = function($index) {
            $scope[$index] = true;
        };

        $scope.hide = function(index) {
            if($scope[index]) {
                $scope[index] = false;
            }
        };

        $scope.toggle = function(index) {
            $scope[index] = !$scope[index];
        }
    });
