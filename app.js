var express = require('express');
var app = express();

/**
 * Test Jenkine Webhook
 * Replace Jenkine the build command npm install to moche
 * */

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.listen(4000);
