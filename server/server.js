const express = require('express');
const bodyParser = require('body-parser');
const parseurl = require('parseurl');
const path = require('path');
const expressVal = require('express-validator');    
const mongoose = require('mongoose');
const Signs = require('./models/signs');

const url = process.env.MONGOLAB_URI;
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
//====ROOT DIRECTORY===//

app.get('/', function(req, res) {
    res.json('you did it');
  });
  
  //==========================//
  
  //====GET ALL SIGNATURES===//
  
  app.get('/api/signatures', function(req, res) {
    Signs.find({}).then(eachOne => {
      res.json(eachOne);
      })
    })
  
  //==========================//
  
  //====POST NEW SIGNATURE===//
  
  app.post('/api/signatures', function(req, res) {
    Signs.create({
      guestSign: req.body.SignatureOfGuest,
      message: req.body.MessageofGuest,
    }).then(signature => {
      res.json(signature)
    });
  });
  
  //==========================//


  //====MONGOOSE CONNECT===//

mongoose.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
    }
   });
   
   //==========================//

app.listen(process.env.PORT || 3012);
console.log('Listening to port 3012')