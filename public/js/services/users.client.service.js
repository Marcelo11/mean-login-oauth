angular.module('MeanLoginOauth')
.factory('UserSvc',function(){
	this.user = window.user;
	
	return{
		user: this.user
	};
})