angular.module('myApp.vote', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vote', {
    templateUrl: 'views/vote.html',
    controller: 'VoteCtrl'
  });
}])

.controller('VoteCtrl', ['$scope',function($scope) {
 
 }]);