angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope','$window','$timeout',function($scope, $window, $timeout) {
 $scope.signIn = true;

$scope.loginUser = function(){
	var ref = new Firebase("https://questionvote.firebaseio.com/Questions");
	ref.authWithPassword({
	  email    : $scope.userEmail,
	  password : $scope.userPassword
	}, function(error, authData) {
	  $timeout(function(){
	  	if (error) {
	  	$scope.errorMessage = true;
	    console.log("Login Failed!", error);

	  } else {
	  	$window.location.href = '/#/submit';
	    
	  }
	})
});

}



 }]);
