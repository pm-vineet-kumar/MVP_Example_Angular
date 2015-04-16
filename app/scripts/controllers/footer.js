'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:Footer
 * @description
 * # Footer
 * Controller of the angularTrainingMvpApp
 */
angular.module('angularTrainingMvpApp')
  .controller('FooterCtrl', function ($scope, $state) {
    $scope.fn_OpenStats = function(){
    	$location.path( "/status" );
    };
    $scope.fn_OpenDashboard = function(){
      $state.go("dashboard");
    };
  });
