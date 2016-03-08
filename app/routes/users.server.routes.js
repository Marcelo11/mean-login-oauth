// Invocar el modo 'strict' de JavaScript
'use strict';

// Cargar las dependencias del módulo
var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

//Definir el método del módulo routes
module.exports = function(app) {
	//Configurar las rutas 'signup'
  app.route('/signup')
     .get(users.renderSignup)
     .post(users.signup);

  //Configurar las routes 'signin'
  app.route('/signin')
     .get(users.renderSignin)
     .post(passport.authenticate('local', {
       successRedirect: '/#/home',
       failureRedirect: '/#/',
       failureFlash: true
     }));
     
 // Configurar las rutas Google OAuth 
  app.get('/oauth/google', passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ],
    failureRedirect: '/signin'
  }));
  app.get('/oauth/google/callback', passport.authenticate('google', {
    failureRedirect: '/#/',
    successRedirect: '/#/home'
  }));
  
   // Configurar las rutas Faceebook OAuth 
  app.get('/oauth/facebook', passport.authenticate('facebook', {
    failureRedirect: '/#/'
  }));
  app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/#/',
    successRedirect: '/#/home'
  }));
  
     // Configurar las rutas Twitter OAuth 
  app.get('/oauth/twitter', passport.authenticate('twitter', {
    failureRedirect: '/#/'
  }));
  app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
    failureRedirect: '/#/',
    successRedirect: '/#/home'
  }));

  //Configurar la route 'signout'
  app.get('/signout', users.signout);
  
  
  // API REST
  app.route('/users')
		.post(users.create)
		.get(users.list);
	
	app.route('/users/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete);
	
	app.param('userId', users.userByID);
  
  
};




// API REST
/* 

'use strict';

var users = require('../../app/controllers/users.server.controller');

module.exports = function(app){
	
	
	app.route('/users')
		.post(users.create)
		.get(users.list);
	
	app.route('/users/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete);
	
	app.param('userId', users.userByID);
}; */