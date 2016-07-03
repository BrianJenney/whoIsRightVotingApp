angular.module('myApp.vote', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vote', {
    templateUrl: 'views/vote.html',
    controller: 'VoteCtrl'
  });
}])

.controller('VoteCtrl', ['$scope', '$firebase', '$firebaseArray', function($scope, $firebase, $firebaseArray) {
 
 	var fb = new Firebase("https://questionvote.firebaseio.com/Questions");

 	$scope.question = $firebaseArray(fb);

 	console.log($scope.question);


 }]);