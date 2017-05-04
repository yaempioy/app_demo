var express = require('express');
var app = express();

/** Test Jenkine Webhook */
app.get('/',function(req,res) {
  res.send("Hello World");
});

app.listen(4000);
