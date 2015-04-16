'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTrainingMvpApp
 */
angular.module('angularTrainingMvpApp')
	.controller('MainCtrl',['$scope', '$location', '$state','dataService','httpService','$timeout',
    function($scope, $location, $state, dataService, httpService, $timeout){
    $scope.isLoginFailed = false;
    $scope.message = {
      "type": "info",
      "title":"Hey!",
      "content": " Welcome back. This alert is for 5 seconds"
    };
			$scope.fn_login = function () {
					var loginObj = JSON.parse(localStorage.getItem('loginObject'));
					if ($scope.email === loginObj.email && $scope.password === loginObj.password) {
							httpService.getData("../JSON/json.json", "GET", "", success, error);//(url, type, data, successCallback, errorCallback)
					} else {
            $scope.doFade = false;
            $scope.isLoginFailed = true;
            $scope.errorMessage = 'Incorrect username or password!Please enter valid credentials';

            $timeout(function(){
              $scope.doFade = true;
            }, 2500);
          }
			};

      function success (data) {
          dataService.setData(data);
          $state.go("dashboard");
      };

      function error (data) {
          dataService.setData([]);
      };
	}]);

