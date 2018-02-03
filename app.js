var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
const MongoClient = require('mongodb').MongoClient; 

var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});


 
 
app.get('/form', function (req, res) {
  var html='';
  html +="<body>";
  html += "<form action='/thank'  method='post' name='form1'>";
  html += "Name:</p><input type= 'text' name='name'>";
  html += "Email:</p><input type='text' name='email'>";
  html += "address:</p><input type='text' name='address'>";
  html += "Mobile number:</p><input type='text' name='mobilno'>";
  html += "<input type='submit' value='submit'>";
  html += "<INPUT type='reset'  value='reset'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});
 
app.post('/thank', urlencodedParser, function (req, res){
	MongoClient.connect("mongodb://localhost:27017/nodeproject", function (err, db) {
		db.collection('signup', function (err, collection) {
			//Insert Record
			collection.insert({ id: 1, name: req.body.name, email: req.body.email, address:req.body.address, mobile:req.body.mobilno });
		
			db.collection('signup').count(function (err, count) {
				if (err) throw err;
				console.log('Total Rows: ' + count);
			});
			
			db.collection("signup").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result)
			});
		});

	});
	
  res.send("Item has been Saved in Database !");
 });