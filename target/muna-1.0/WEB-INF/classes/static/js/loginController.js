var app=angular.module('loginApp',['ngCookies']);
/*app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.withCredentials = false;
  
}])
app.run(['$http', '$cookies', function($http, $cookies) {
  $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
  $http.defaults.headers.common.Authorization = 'Basic aGxhbWE6MjZtYWkxOTkx';
}]);
*/
app.controller('loginCtrl',function($scope,$http,$httpParamSerializerJQLike){
	
	console.log('AngularJS run')
	$scope.send=function(){
		var form=document.querySelector('#form');
		form.submit();
	}
	
	$scope.ona=function(){
	
		//document.domain='';
		alert('Helo')
		$http.get('https://ona.io/jrvis/52200/325648')
		.then(function(response){
			console.log('Success :',response);
		},function(error){
			console.log('Error :',error);
		});
	}
})