/**
 * 
 */
app.factory('ModelFactory',function($http){
	var factory={
			getOrgunits:function(){
				$http.get('').then(function(response){
					return respone.data;
				},function(error){
					return error;
				});
			}
	}
	return factory;
})