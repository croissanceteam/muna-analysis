var app=angular.module("app-orgunit",[]);
app.controller("orgunitCtrl",function($scope,$http){
	$scope.addFactory=function(){
		alert('Post')
	}
	var dialogAddView = document.querySelector('#addOrgunit');
	
	$scope.productList=[
		{
			id:325073,
			name:'FICHE DE LIVRAISON'
		},
		{
			id:325698,
			name:'PRODUIT CHIMIQUES'
		},
		{
			id:325699,
			name:'AGEFLOC'
		},
		{
			id:3256910,
			name:'CHAUX'
		},
		{
			id:3256911,
			name:'CHLORE'
		},
		{
			id:3256912,
			name:'GASOIL'
		},
		{
			id:3256913,
			name:'KILOWATT'
		},
		{
			id:3256914,
			name:'SEL'
		}
	];
	console.log($scope.listProvincial)
$scope.addFactory=function(){

	if (!dialogAddView.showModal) {
	      dialogPolyfill.registerDialog(dialogAddView);
	 }
	 dialogAddView.showModal();
}
	var ctr=0;
	$(document).ready(function() {
		try{
			var table=$('#datatables-orgunit').DataTable({
	            ajax: {
	                url: "/api/typefiles/",
	                dataSrc:'',
	                cache:false
	                
	            },
	            bAutoWidth:false,
	            responsive:'true',
	            aoColumns:[
	                
	                { "data": "id" },
	                { "data": "keycode" },
	                { "data": "typefilename" },
	                { "data": "datecreated" },
	                { "data": "datevalidity" },
	                { "data": "status" },
	                {
	                    "mData": null,
	                    "bSortable": true,
	                    "sWidth":"25%",
	                   "mRender": function (data, type, row) { 
	                	   				
	                	   var idbtn="demo-menu-lower-right"+data.id;
	                	
	                	  //
	                	   if(ctr<8){
	                		   //$scope.listProvincial.push({id:data.id,name:data.typefilename});
	         
	                	   }
	                	   ctr++;
	                	   				var dataHTML=(data.parent==null?'Root':data.parent.keycode)+"<i onclick='editClick("+JSON.stringify(data)+")' style='float:right;font-size:15px;' class=material-icons>edit</i>"+
	                	   				"<i onclick='viewClick("+JSON.stringify(data)+")' id='icovisibility' style='float:right;margin-right:1em;font-size:15px;' class=material-icons>visibility</i>"+
	                	   				"<div class=mdl-tooltip data-mdl-for='icovisibility'>View <strong> Datas </strong></div>";
	                	   				return dataHTML;
	                	   }
	                },
	                
	            ]
	           
	        });
			//console.log($scope.listProvincial)
			/*$('#datatables-orgunit tbody').on('click', 'tr', function (e) {
	            var data = table.data();
	            var index=e.target._DT_CellIndex.row;
	            //console.log(data);
	        //    alert( 'You clicked on '+data[index].id+'\'s row' );
	            console.log(data);
	            
	    } );
	    */
		}catch(e){
			console.log(e)
		}

	} );

	
});
var dialogView = document.querySelector('#viewOrgunit');
function viewClick(e){
	var dialogView = document.querySelector('#viewOrgunit');
	if (!dialogView.showModal) {
	      dialogPolyfill.registerDialog(dialogView);
	 }
	var headerOrgunit=document.querySelector('#headerModal');
	headerOrgunit.innerHTML=e.typefilename+'<br/><span style=font-size:20px;><i>'+'4566 datas'+'</i></span>';
	var divMap=document.querySelector('#map');
		divMap.innerHTML=e.embedcard;
	
	 dialogView.showModal();
	// console.log(e);
}
function editClick(e){
	
	
	console.log(e.id)
}
function closeView(){
	dialogView.close();
}

