var express = require('express');
var bodyParser = require('body-parser');
var urlencode = require('urlencode'); 
var request = require("request");
var http = require("http");
var app = express();
var request = require('request');


var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});


app.get('/', function(req, res) {       
      res.setHeader('Content-type', 'application/json');
      request.post({ url: "https://www.apnikheti.com/apnikheti-version9/getCategory.php?lang=en",body : "lang=en"},    function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  //res.render("index",body);
				res.json(body); 
                 } 
             }); 
     }); 



var msg = 'Dear Apni Kheti user, the verfication code for registering with mobile number is 123456';
var toNumber = '7696283828';
var username = 'taran.sidhu@cogneesol.com';
var hash = 'f218887ba4be38c3ca8fa2bf943bbd8824bbbd63';
var sender = 'AKHETI';
var data = 'username=' + username + '&hash=' + hash + '&sender=' + sender + '&numbers=' + toNumber + '&message=' + msg;

app.get('/textapi', function(req, res) {       
      request.get({ url: "https://api.textlocal.in/send/?"+ data},      function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  res.end(body); 
                 } 
             }); 
     }); 

