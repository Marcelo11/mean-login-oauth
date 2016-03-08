// Invocar modo JavaScript 'strict'
'use strict';

// Crear un nuevo método controller 'render'
exports.render = function(req, res) {
	// Usar el objeto 'response' para renderizar la view 'index' con un 'title' el usuario'
	res.render('index', {
		title: 'Welcome',
		user: JSON.stringify(req.user)
	});
};