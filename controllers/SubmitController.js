angular.module('myApp.submit', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/submit', {
    templateUrl: 'views/submit.html',
    controller: 'SubmitCtrl'
  });
}])

.controller('SubmitCtrl', ['$scope', '$firebase', '$location', function($scope,$firebase, $location) {
	var url = "https://questionvote.firebaseio.com/Questions"

	var ref = new Firebase("https://questionvote.firebaseio.com/Questions/");
	var authData = ref.getAuth();
	//get current user from login
	//store in voters array
	if (authData) {
	  console.log("Authenticated user with uid:", authData.uid);
	  var voter = authData.uid;
	}
	//function to submit questions
	$scope.submitQuestion = function(){
		var fb = new Firebase(url)
		fb.push({
			question: $scope.question.text, 
			parameter1: $scope.question.parameterOne,
			parameter2: $scope.question.parameterTwo,
			vote1: 0,
			vote2: 0,
			voters:[voter],
			email: $scope.question.email,
			timestamp: Date.now()

		})

		//set input values back to blank
		$scope.question.text = "";
		$scope.question.parameterOne = "";
		$scope.question.parameterTwo ="";

		//direct user to vote page
		$location.path('/vote');

	}

	

 
 }]);