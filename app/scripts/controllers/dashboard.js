'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:DashboardCtrl
 * @description
 * # DashboardctrlCtrl
 * Controller of the angularTrainingMvpApp
 */
angular.module('angularTrainingMvpApp')
  .controller('DashboardCtrl',["$scope", "dataService", "$state", "$timeout" , function ($scope, dataService, $state, $timeout) {
      if (dataService.getData().length === 0) {
        $state.go("home");
      }
    $scope.error = false;
      $scope.usersInformation = dataService.getData().pubmaticUITeam;
      $scope.fn_profileSearch = function () {
          dataService.setSelectedEmployee($scope.searchContent);
          if (typeof $scope.searchContent === "object") {
            $state.go("profile");
          } else {
            $scope.doFade = false;
            $scope.showError = true;
            $scope.errorMessage = 'please select any employee..!!';

            $timeout(function(){
              $scope.doFade = true;
            }, 2500);
          }
      };
  }]);
