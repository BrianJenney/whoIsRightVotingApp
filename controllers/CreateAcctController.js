angular.module('myApp.createacct', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/createacct', {
    templateUrl: 'views/createacct.html',
    controller: 'CreateAcctCtrl'
  });
}])

.controller('CreateAcctCtrl', ['$scope', '$location', function($scope, $location) {
 $scope.signIn = true;

$scope.createUser = function(){
	var ref = new Firebase("https://questionvote.firebaseio.com/Questions");
	ref.createUser({
	  email    : $scope.userEmail,
	  password : $scope.userPassword
	}, function(error, userData) {
	  if (error) {
	    console.log("Error creating user:", error);
	  } else {
	    console.log("Successfully created user account with uid:", userData.uid);
	    console.log("hey");
	    //direct user to vote page
		$location.path('/login');

	  }
	});

}
 }]);
