angular.module('myApp.vote', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vote', {
    templateUrl: 'views/vote.html',
    controller: 'VoteCtrl'
  });
}])

.controller('VoteCtrl', ['$scope', '$firebase', '$firebaseArray', '$firebaseObject', function($scope, $firebase, $firebaseArray, $firebaseObject) {
 
 	var fb = new Firebase("https://questionvote.firebaseio.com/Questions/");


 	$scope.question = $firebaseArray(fb);

 	//vote for side one function
 	$scope.voteSideOne = function(id){
 		
 		//create array from fb
 		var fb = $firebaseArray(new Firebase("https://questionvote.firebaseio.com/Questions/"+id));
 		 var vote = new Firebase("https://questionvote.firebaseio.com/Questions/"+id);
        
 		//store the user array as an object to add one 
 		//to the votes
 		//needs functionality to make sure same user can't vote more than once for the same question 
 		fb.$loaded().then(function(){
 			//get value of votes for param 1
 			var newVoteTotal = fb[3].$value + 1;
 			//update db with new vote total
 			console.log(newVoteTotal)

 			vote.update({
 				vote1: newVoteTotal
 			})
 			
 		});
 		
 		
 	}

 	$scope.voteSideTwo = function(id){
 		//create array from fb
 		var fb = $firebaseArray(new Firebase("https://questionvote.firebaseio.com/Questions/"+id));
 		 var vote = new Firebase("https://questionvote.firebaseio.com/Questions/"+id);
        
 		//store the user array as an object to add one 
 		//to the votes
 		//needs functionality to make sure same user can't vote more than once for the same question 
 		fb.$loaded().then(function(){
 			//get value of votes for param 1
 			var newVoteTotal = fb[4].$value + 1;
 			//update db with new vote total
 			console.log(newVoteTotal)

 			vote.update({
 				vote2: newVoteTotal
 			})
 			
 		});

 	}


 }]);