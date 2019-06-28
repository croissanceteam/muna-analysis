var app=angular.module('configApp',[]);
app.controller('configCtrl',function($http,$scope){
	$scope.isVisibility=false;
	$http.get('/api/settings/list').then(function(response){
		$scope.dataConfig=response.data;
		 $("#Tconfig").dataTable().fnDestroy();
	     $scope.tableConfig=$('#Tconfig').DataTable({
	         oLanguage:{
	             sSearch:''
	         },
	         aaData:$scope.dataConfig,
	         bAutoWidth:false,
	         responsive:'true',
	         aoColumns:[
	        	 {
	                 "mData": null,
	                 "bSortable": false,
	                 "sWidth":"5%",
	                "mRender": function (data, type, row) {


	             	 	//console.log('data :',data);
	             	   if (data.icon=='assignment') {
	                     return ('<i class="material-icons" style="color:#008080">assignment</i>');
	                    }
	             	   if (data.icon=='user') {
	                      return ('<i class="material-icons" style="color:#008080">group</i>');
	                     }
	             	   
	             	  if (data.icon=='task') {
	                      return ('<i class="material-icons" style="color:#008080">event</i>');
	                     }
	             	   		
	             	  if (data.icon=='sync') {
	                     return ('<i class="material-icons" style="color:#008080">swap_vert</i>');
	                    }
	             	  if (data.icon=='mobile') {
	                     return ('<i class="material-icons" style="color:#008080">screen_rotation</i>');
	                    }//return dataHTML;
	             	   }
	             },  
	             { "data": "name"},
	             {"data": "description"},
	             {
	                 "mData": null,
	                 "bSortable": false,
	                 "sWidth":"10%",
	                "mRender": function (data, type, row) {


	             	 	//console.log('data :',data);
	             	   if (data.iconstatus=='done') {
	                     return ('<i class="material-icons" style="color:#008080">done</i>');
	                    }else if(data.iconstatus=='process'){
	                    	return ('<i class="material-icons" style="color:#FFAE33">hourglass_empty</i>');
	                    }else{
	             	   
	                     return ('<i class="material-icons" style="color:darkred">clear</i>');
	                    }

	             	   				//return dataHTML;
	             	   }
	             },
	             { "data": "state"},
	             { "data": "datecreated"}

	         ]
	     });
		console.log('Response :',$scope.dataConfig)
		document.querySelector('#configContainer').style="padding:2em;margin-top:4em;display:normal;"
	},function(error){
		console.log(error);
	})
	

     $('#Tconfig tbody').on('click', 'tr', function (e){
    	 	var data = $scope.tableConfig.data();
			var index=e.target._DT_CellIndex.row;
			var linkOpen=document.createElement('a');
			linkOpen.href=data[index].url;
			linkOpen.target='_blank';
			linkOpen.click();
			console.log(" Data :",data[index])
     });
     
})