var dotenv = require('dotenv')
var express = require('express');
var app = express();
dotenv.config({silent: true})
dotenv.load()

const PORT = process.env.PORT || 5000
/**
 * Test Jenkine Webhook
 * Replace Jenkine the build command npm install to moche
 * */

app.get('/', (req,res) => { res.send("Hello Jenkins World Nivin Automate Test ######") })

app.listen(PORT, () => {  console.log(`Server started on ${PORT}`)})
