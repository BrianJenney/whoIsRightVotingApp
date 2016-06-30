angular.module('myApp.submit', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/submit', {
    templateUrl: 'views/submit.html',
    controller: 'SubmitCtrl'
  });
}])

.controller('SubmitCtrl', ['$scope', '$firebase', function($scope,$firebase) {


	var url = "https://questionvote.firebaseio.com/"

	$scope.submitQuestion = function(){
		var fb = new Firebase(url)
		fb.push({
			question: $scope.question.text, 
			parameter1: $scope.question.parameterOne,
			parameter2: $scope.question.parameterTwo
		})

		$scope.question.text = "";
		$scope.question.parameterOne = "";
		$scope.question.parameterTwo =""

	}
 
 }]);