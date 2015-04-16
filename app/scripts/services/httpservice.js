'use strict';

/**
 * @ngdoc service
 * @name angularTrainingMvpApp.httpService
 * @description
 * # httpService
 * Service in the angularTrainingMvpApp.
 */
angular.module('angularTrainingMvpApp')
  .service('httpService', ["$http", function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getData = function (url, type, data, successCallback, errorCallback) {
      var req = {
        method: type,
        url: url,
        data: data
      };

      $http(req).success(successCallback).error(errorCallback);
    };
  }]);
