angular.module('MeanLoginOauth', [ 'ngRoute','ngResource', 'ngCookies','ngAnimate', 'ui.bootstrap', 'pascalprecht.translate'])
.config(function($translateProvider){
	$translateProvider.translations('en',{
		LOG_IN: 'Log in',
		USING: 'using',
		LOST_YOUR: 'Lost your',
		SING_UP: 'Sign up',
		HERE :'Here',
		DONT_ACCOUNT :'Don´t have an account?',
		LANGUAGE : 'Language',
		SEARCH: 'Search',
		WELCOME: 'Welcome',
		PROFILE : 'Profile',
		LOGOUT : 'Logout'
	})
	.translations('es',{
		LOG_IN: 'Entrar',
		USING: 'usando',
		LOST_YOUR: '¿Perdiste tu',
		SING_UP: 'Registrase',
		HERE :'Aqui',
		DONT_ACCOUNT :'¿No tenes cuenta?',
		LANGUAGE : 'Idioma',
		SEARCH :'Buscar',
		WELCOME: 'Bienvenido',
		PROFILE: 'Perfil',
		LOGOUT : 'Salir'
	});
	 $translateProvider.preferredLanguage('en');
	 $translateProvider.useSanitizeValueStrategy(null);
})
.run(function($rootScope, $location,UserSvc, $translate, $cookies){
	
	$translate.use($cookies.get('Language')); 
	if(UserSvc.user!=null){
	
	$rootScope.username = UserSvc.user.username;
	}
	
	$rootScope.changeLanguage = function(language){
	 //si usuario existe, crea las cookies para saber el idioma	
	$cookies.put('Language',language);		
     	
	 $translate.use($cookies.get('Language')); 
}
})

