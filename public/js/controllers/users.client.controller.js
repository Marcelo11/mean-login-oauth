angular.module('MeanLoginOauth')
.controller('loginCtrl',function($scope, UserSvc ,$location, $translate, $cookies ){
$scope.changeLanguage = function(language){
	
	$cookies.put('Language',language);		
     	
	 $translate.use($cookies.get('Language')); 
}

})
.controller('homeCtrl',function($scope, UserSvc ,$location , $translate, $cookies){
	
	
	
$scope.username = UserSvc.user.username
})
.controller('signonCtrl',function($scope){

})
.controller('editProfileCtrl',function($scope, UserSvc){
	
   $scope.user = UserSvc.user;
  
})