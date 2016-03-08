var passport = require('passport');
var mongoose = require('mongoose');
// Invocar modo JavaScript 'strict'
'use strict';

// Cargar las dependencias de m�dulos
var passport = require('passport'),
    mongoose = require('mongoose');

//Definir el m�todo de configuraci�n de Passport
module.exports = function() {
  //Cargar el modelo 'User'
  var User = mongoose.model('User');
  
  //Usar el m�todo 'serializeUser' para serializar la id del usuario
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  //Usar el m�todo 'deserializeUser' para cargar el documento user
  passport.deserializeUser(function(id, done) {
    User.findOne({
      _id: id
    }, '-password -salt', function(err, user) {
      done(err, user);
    });
  });

  //Cargar los archivos de configuraci�n de estrategias de Passport
  require('./strategies/local.js')();
  require('./strategies/google.js')();
  require('./strategies/facebook.js')();
  require('./strategies/twitter.js')();
  
};