'use strict';

/**
 * @ngdoc overview
 * @name angularTrainingMvpApp
 * @description
 * # angularTrainingMvpApp
 *
 * Main module of the application.
 */
angular
  .module('angularTrainingMvpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chieffancypants.loadingBar',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(["$locationProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider", "cfpLoadingBarProvider", function($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider) {
    $stateProvider
      .state('home', {
        url: "/home",
        data: {title: "Home"},
        views: {
          'header': { templateUrl: 'views/common/header.html', controller: 'HeaderCtrl' },
          'main': { templateUrl: 'views/login.html', controller: 'MainCtrl' },
          'footer': { templateUrl: 'views/common/footer.html', controller: 'FooterCtrl' }
        }
      })
      .state('dashboard', {
        url: "/dashboard",
        data: {title: "Dashboard"},
        views: {
          'header': { templateUrl: 'views/common/header.html', controller: 'HeaderCtrl' },
          'main': { templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl' },
          'footer': { templateUrl: 'views/common/footer.html', controller: 'HeaderCtrl' }
        }
      })
      .state('profile', {
        url: "/profile",
        data: {title: "profile"},
        views: {
          'header': { templateUrl: 'views/common/header.html', controller: 'HeaderCtrl' },
          'main': { templateUrl: 'views/profile.html', controller: 'ProfileCtrl' },
          'footer': { templateUrl: 'views/common/footer.html', controller: 'FooterCtrl' }
        }
      })

      $urlRouterProvider.otherwise('/home');
      cfpLoadingBarProvider.includeSpinner = false;
      var login={'email':'admin@pubmatic.com','password':'admin'}
      localStorage.setItem('loginObject',JSON.stringify(login));

    }]).run(function ($state,$rootScope) {
      $rootScope.$state = $state;
    }).directive('notification', function($timeout){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      ngModel: '='
    },
    template: '<div class="alert fade" bs-alert="ngModel"></div>',
    link: function(scope, element, attrs) {
      $timeout(function(){
        element.empty();
        element.hide();
      }, 5000);
    }
  }
});
