
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.bootstrap',
  'firebase',
  'ngRoute',
  'myApp.home',
  'myApp.submit',
  'myApp.vote'

]).
config(['$routeProvider', function($routeProvider,$locationProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);






