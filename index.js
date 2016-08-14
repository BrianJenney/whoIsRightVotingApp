var nodemailer = require('nodemailer');
var firebase = require('Firebase')
var ref = {
    apiKey: "AIzaSyCIBEVRpk11XNVlweba8wW_Y9DPO_BmITw",
    authDomain: "questionvote.firebaseapp.com",
    databaseURL: "https://questionvote.firebaseio.com",
    storageBucket: "questionvote.appspot.com",
  };

var winner = [];
firebase.initializeApp(ref);

var rootRef = firebase.database().ref();

var now = Date.now();
var cutoff = now - 24 * 60 * 60 * 1000;

var old = rootRef.orderByChild('timestamp').endAt(cutoff)
//initialize array to hold data from snapshot


var listener = rootRef.on('child_added', function(snapshot) {

snapshot.forEach(function(childSnapshot){
    var child = childSnapshot.val();
    
    if(child.vote1 - child.vote2 > 0){
        winner.push({email:child.email, winner:child.parameter1})
    }else if(child.vote1 - child.vote2 < 0){
        winner.push({email:child.email, winner:child.parameter2})
    }else{
        winner.push({'email':child.email, winner:'It is a tie!'})
    }

})
//create reusable transporter object using the default SMTP transport
//console.log(winner)
for(x=0; x<winner.length; x++){


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
        user: 'brianjenney83@gmail.com',
        pass: 'freestyl1'
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"The Voting App" <brianjenney83@gmail.com>', // sender address
    to: '<'+winner[x].email+'>', // list of receivers
    subject: 'Results from Voting App', // Subject line
    text: 'The Results Are In!', // plaintext body
    html: '<b>The winner is...</b>' + winner[x].winner // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
}


});




