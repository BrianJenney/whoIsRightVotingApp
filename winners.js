
var firebase = require('Firebase')
var ref = {
    apiKey: "AIzaSyCIBEVRpk11XNVlweba8wW_Y9DPO_BmITw",
    authDomain: "questionvote.firebaseapp.com",
    databaseURL: "https://questionvote.firebaseio.com",
    storageBucket: "questionvote.appspot.com",
  };


firebase.initializeApp(ref);

var rootRef = firebase.database().ref();


var now = Date.now();
var cutoff = now - 60 * 60 * 1000;

var old = rootRef.orderByChild('timestamp').endAt(cutoff)
//initialize array to hold data from snapshot
var voteArray = [];
var winners = [];

var listener = rootRef.on('child_added', function(snapshot) {

var vote = rootRef.root;

if(vote.vote1 - vote.vote2 > 0 ){
	voteArray.push({winner: vote.parameter1,email: vote.email});
}else if(vote.vote2 - vote.vote1 > 0){
	voteArray.push({winner: vote.parameter2,email: vote.email});
}else{
	voteArray.push({winner: 'It is a tie!',email: vote.email});
}



//console.log(winners)

});

console.log(voteArray)
