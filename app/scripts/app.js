'use strict';

/**
 * @ngdoc overview
 * @name carShowRoomApp
 * @description
 * # carShowRoomApp
 *
 * Main module of the application.
 */
angular
  .module('carShowRoomApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });