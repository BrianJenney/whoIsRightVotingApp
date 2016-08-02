var nodemailer = require('nodemailer');
var Firebase = require('firebase');
var winners = require('./winners')


// create reusable transporter object using the default SMTP transport

var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth:{
		user: 'brianjenney83@gmail.com',
		pass: 'freestyl1'
	}
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo" <brianjenney83@gmail.com>', // sender address
    to: 'brianjenney83@gmail.com', // list of receivers
    subject: 'Hello ', // Subject line
    text: 'Hello world', // plaintext body
    html: '<b>Hello world </b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});



