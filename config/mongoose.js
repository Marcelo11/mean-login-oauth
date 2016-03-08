var config = require('./config');
var mongoose = require('mongoose');

module.exports = function(){
	var db = mongoose.connect(config.db);
	//Carga el modelo User
	require('../app/models/user.server.model');
	
	return db;
};