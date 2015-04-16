'use strict';

/**
 * @ngdoc service
 * @name angularTrainingMvpApp.dataService
 * @description
 * # dataService
 * Service in the angularTrainingMvpApp.
 */
angular.module('angularTrainingMvpApp')
  .service('dataService',["httpService", function (httpService) {
      var userData = [],
        selectedEmployee = {

        };
      // AngularJS will instantiate a singleton by calling "new" on this function
      this.setData = function (data) {
          userData = data;
      };
      this.getData = function () {
        return userData;
      };

      this.getSelectedEmployee = function () {
        return selectedEmployee;
      };

      this.setSelectedEmployee = function (employee) {
          selectedEmployee = employee;
      };
  }]);
