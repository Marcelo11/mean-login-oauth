angular.module('MeanSeekPet')
.controller('ejemploController',function($scope, Authentication ){
	/* $scope.name = Authentication.user ? Authentication.user.fullName : 'MEAN Application'; */
	console.log(Authentication.user);
	$scope.name= "feo ql";
});