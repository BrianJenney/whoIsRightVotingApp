
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'firebase',
  'ngRoute',
  'myApp.home',
  'myApp.submit',
  'myApp.vote'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);






