const express = require("express")  //import express
const path = require("path")        //import path module
const fs = require("fs")            //import fs module
const app = express()               //create express app
const port = 80                     //set port as 80

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))       //serve static files
app.use(express.urlencoded())                    //middleware-helps bring form data to express

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')                     //set the template engine as pug
app.set('views', path.join(__dirname, 'views'))   //set the view directory