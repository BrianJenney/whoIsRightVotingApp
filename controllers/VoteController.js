angular.module('myApp.vote', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vote', {
    templateUrl: 'views/vote.html',
    controller: 'VoteCtrl'
  });
}])

.controller('VoteCtrl', ['$scope', '$firebase', '$firebaseArray', '$firebaseObject', function($scope, $firebase, $firebaseArray, $firebaseObject) {


	var ref = new Firebase("https://questionvote.firebaseio.com/Questions/");
	var authData = ref.getAuth();
	//get current user from login
	if (authData) {
	  console.log("Authenticated user with uid:", authData.uid);
	  var currentUser = authData.uid;
	}
	 	
 	var fb = new Firebase("https://questionvote.firebaseio.com/Questions/");
 	//initialize variable
 	//if user has voted match will be set to true
 	var match = false;
 	var voterArray = []
 	$scope.question = $firebaseArray(fb);

 	//vote for side one function
 	$scope.voteSideOne = function(id){
 		//clear voter array
 		voterArray = []
 		//create array from fb to use to get value of votes
 		//this isn't possible with the Firebase that happens
 		//in vote
 		var fb = $firebaseArray(new Firebase("https://questionvote.firebaseio.com/Questions/"+id));
 		//array to push data to update votes
 		var vote = new Firebase("https://questionvote.firebaseio.com/Questions/"+id);
        //location for voters associated with question
        var voters = new Firebase("https://questionvote.firebaseio.com/Questions/"+id+"/voters");

        //get value from voters fb and store in
        //temporary array
        voters.once('value', function(snap){
        	snap.forEach(function(childSnap){
        		var key = childSnap.key();
        		var childData = childSnap.val()
        		voterArray.push(childData)
        	})
        })
 		

 		//iterate through temporary array 
 		//if a match then bool match is true
 		if(voterArray.indexOf(currentUser) > -1){
 			match = true;
 		}

     	if(match == false){

     	voters.push(currentUser)

 		fb.$loaded().then(function(){
 			//get value of votes for param 1
 			var newVoteTotal = fb[4].$value + 1;
 			//update db with new vote total
 			vote.update({
 				vote1: newVoteTotal
 			})
 			
 		});

 	}else{
 		console.log("you voted already")
 	}
 		
 		
 	}

 	$scope.voteSideTwo = function(id){
 		//clear voter array
 		voterArray = []
 		//create array from fb
 		var fb = $firebaseArray(new Firebase("https://questionvote.firebaseio.com/Questions/"+id));
 		 var vote = new Firebase("https://questionvote.firebaseio.com/Questions/"+id);
 		  //location for voters associated with question
        var voters = new Firebase("https://questionvote.firebaseio.com/Questions/"+id+"/voters");

        //get value from voters fb and store in
        //temporary array
        voters.once('value', function(snap){
        	snap.forEach(function(childSnap){
        		var key = childSnap.key();
        		var childData = childSnap.val()
        		voterArray.push(childData)
        	})
        })
 		

 		//iterate through temporary array 
 		//if a match then bool match is true
 		if(voterArray.indexOf(currentUser) > -1){
 			match = true;
 		}

        
        if(match == false){
 		fb.$loaded().then(function(){
 			//get value of votes for param 1
 			var newVoteTotal = fb[5].$value + 1;
 			//update db with new vote total

 			vote.update({
 				vote2: newVoteTotal
 			})
 			
 		});
 	}

 	}


 }]);

