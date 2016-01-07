'use strict';

/**
 * @ngdoc overview
 * @name teemOpsApp
 * @description
 * # teemOpsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('ikieranApp', [
    "ngRoute"
  ])
  .config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html"
      })
      .when("/about", {
        templateUrl: "views/about.html"
      })
      .otherwise({
        redirectTo: "/"
      });
  });


'use strict';

/**
 * @ngdoc function
 * @name teemOpsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teemOpsApp
 */

var source_url = 'http://localhost/ikieran/drupal/api';

app.controller('PortfolioController', function($scope, $http) {
    $http.get(source_url + '/portfolio.json').success(function(data) {
        $scope.portfolioItems = data;
        console.dir(data);
    });
});
