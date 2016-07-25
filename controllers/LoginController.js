angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope','$window',function($scope, $window) {
 $scope.signIn = true;

$scope.loginUser = function(){
	var ref = new Firebase("https://questionvote.firebaseio.com/Questions");
	ref.authWithPassword({
	  email    : $scope.userEmail,
	  password : $scope.userPassword
	}, function(error, authData) {
	  if (error) {
	  	$scope.sigIn= false;
	    console.log($scope.sigIn);
	    console.log("Login Failed!", error);

	  } else {
	  	$window.location.href = '/#/submit';
	    
	  }
});

}

$scope.test = function(){
		console.log("test");
		$location.path('/submit');
	}

 }]);
