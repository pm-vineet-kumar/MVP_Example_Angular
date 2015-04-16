'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the angularTrainingMvpApp
 */
angular.module('angularTrainingMvpApp')
  .controller('ProfileCtrl',["$scope","dataService","$state", function ($scope, dataService,$state) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $scope.selectedEmployee = dataService.getSelectedEmployee();
    if (Object.keys($scope.selectedEmployee).length === 0) {
      $state.go("home");
    }
  }]);
