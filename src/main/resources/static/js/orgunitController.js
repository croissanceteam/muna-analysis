var app=angular.module("app-orgunit",[]);
app.controller("orgunitCtrl",function($scope,$http){
	$scope.DataOrgunits=
	[
		{
			"id": 1,
			"keyentity": "Rdc",
			"labelentity": "RD Congo",
			"category": "Parent",
			"idparent": {
				"id": 1,
				"keyentity": "rdc",
				"labelentity": "Republique Democratique du Congo",
				"category": "parent",
				"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
		},
		{
			"id": 2,
			"keyentity": "Kin",
			"labelentity": "Kinshasa",
			"category": "Child",
			"idparent": {
				"id": 1,
				"keyentity": "rdc",
				"labelentity": "Republique Democratique du Congo",
				"category": "parent",
				"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
		},
		{
			"id": 3,
			"keyentity": "Kng",
			"labelentity": "Kongo Central",
			"category": "Child",
			"idparent": {
				"id": 1,
				"keyentity": "rdc",
				"labelentity": "Republique Democratique du Congo",
				"category": "parent",
				"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
		},
		{
			"id": 4,
			"keyentity": "Bdd",
			"labelentity": "Bandundu",
			"category": "Child",
			"idparent": {
				"id": 1,
				"keyentity": "rdc",
				"labelentity": "Republique Democratique du Congo",
				"category": "parent",
				"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4073404.674001085!2d16.215985546019116!3d-4.423351984234209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a166a9098839519%3A0x765e65e2f5ffdd19!2sBandundu!5e0!3m2!1sfr!2scd!4v1532890680329\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
		},
		{
			"id": 5,
			"keyentity": "Kat",
			"labelentity": "Katanga",
			"category": "Child",
			"idparent": {
				"id": 1,
				"keyentity": "rdc",
				"labelentity": "Republique Democratique du Congo",
				"category": "parent",
				"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
		},
		{
			"id": 6,
			"keyentity": "Eqt",
			"labelentity": "Équateur",
			"category": "Child",
			"idparent": {
				"id": 1,
				"keyentity": "rdc",
				"labelentity": "Republique Democratique du Congo",
				"category": "parent",
				"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8169031.029096327!2d15.983350066814177!3d1.3042315904845283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10a759c6a20610a5%3A0xf9db486da6873f09!2zw4lxdWF0ZXVy!5e0!3m2!1sfr!2scd!4v1532890964329\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
		},
		{
			"id": 7,
			"keyentity": "Kao",
			"labelentity": "Kasai-Oriental",
			"category": "Child",
			"idparent": {
				"id": 1,
				"keyentity": "rdc",
				"labelentity": "Republique Democratique du Congo",
				"category": "parent",
				"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4071036.0849340246!2d21.843211290766835!3d-4.834932588920528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19890cd2cfe4f413%3A0x71ae688f7d40d60b!2sKasa%C3%AF+oriental!5e0!3m2!1sfr!2scd!4v1532891053147\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
		},
		{
			"id": 8,
			"keyentity": "Kac",
			"labelentity": "Kasai Occidental",
			"category": "Child",
			"idparent": {
				"id": 1,
				"keyentity": "rdc",
				"labelentity": "Republique Democratique du Congo",
				"category": "parent",
				"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4069295.4408845794!2d19.466747541970076!3d-5.116380611326285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a21a66863c8de11%3A0xb02129df12aad744!2sKasa%C3%AF+occidental!5e0!3m2!1sfr!2scd!4v1532891076392\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
		},
		{
			"id": 9,
			"keyentity": "Nkv",
			"labelentity": "Nord-Kivu",
			"category": "Child",
			"idparent": {
				"id": 1,
				"keyentity": "rdc",
				"labelentity": "Republique Democratique du Congo",
				"category": "parent",
				"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042692.2459968044!2d27.47157956296882!3d-0.5517987964596072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19e0865560e56fc3%3A0x341e4dce5d8e1b94!2sNord-Kivu!5e0!3m2!1sfr!2scd!4v1532891111665\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
		},
		{
			"id": 10,
			"keyentity": "Skv",
			"labelentity": "Sud-Kivu",
			"category": "Child",
			"idparent": {
				"id": 1,
				"keyentity": "rdc",
				"labelentity": "Republique Democratique du Congo",
				"category": "parent",
				"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039433.4744397798!2d26.97492694601387!3d-3.283484999799054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ea2ec21f044c99%3A0x95fd4a4a6e234625!2sSud-Kivu!5e0!3m2!1sfr!2scd!4v1532891130713\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
		},
		{
			"id": 11,
			"keyentity": "Por",
			"labelentity": "Province Orientale",
			"category": "Child",
			"idparent": {
				"id": 1,
				"keyentity": "rdc",
				"labelentity": "Republique Democratique du Congo",
				"category": "parent",
				"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8167843.657372684!2d22.299097954880025!3d1.629476169473721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x175ad0ec9ef615e5%3A0x9bad1b99a73f8ddf!2sProvince+orientale!5e0!3m2!1sfr!2scd!4v1532891157597\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
		},
		{
			"id": 12,
			"keyentity": "Man",
			"labelentity": "Maniema",
			"category": "Child",
			"idparent": {
				"id": 1,
				"keyentity": "rdc",
				"labelentity": "Republique Democratique du Congo",
				"category": "parent",
				"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
			},
			"embedcard": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4081561.111916044!2d24.4046916415256!3d-2.5396449565059562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ef0ba259cff31f%3A0x88b7f9d0c20b2fd!2sManiema!5e0!3m2!1sfr!2scd!4v1532891268852\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
		}

	];
	$scope.addFactory=function(){
		alert('Post')
	}
	$scope.visible_config=false;
	if (orgunitLogName.toString().toLowerCase()!="rdc" && rule.toString().toLowerCase()!="superadmin") 
		$scope.visible_config=true;

	var dialogAddView = document.querySelector('#addOrgunit');
	$http.get("/factory/list").then(function(response){

		$scope.listProvincial=response.data;
		console.log($scope.listProvincial)
	},function(error){
		console.log(error)
	})

	$scope.selectedSearch=function(obj){
		console.log('Object :',obj)
		console.log('DataList :',$scope.datalist)
	}

$scope.addFactory=function(){

	if (!dialogAddView.showModal) {
	      dialogPolyfill.registerDialog(dialogAddView);
	 }
	 dialogAddView.showModal();
}
	$(document).ready(function() {
		try{
			var table=$('#datatables-orgunit').DataTable({
	            ajax: {
	                url: "/factory/orgunits",
	                dataSrc:'',
	                cache:false
	                
	            },
	            bAutoWidth:false,
	            responsive:'true',
	            aoColumns:[
	                
	                { "data": "id" },
	                { "data": "labelentity" },
	                {
	                    "mData": null,
	                    "bSortable": false,
	                    "sWidth":"25%",
	                   "mRender": function (data, type, row) { 
	                	   				
	                	   var idbtn="demo-menu-lower-right"+data.id;
	                	 	//console.log('data :',data);
	                	   var parentName=data.idparent==null?"Root":data.idparent.labelentity
	                	   				var dataHTML=parentName+"<i onclick='editClick("+JSON.stringify(data)+")' style='float:right;font-size:15px;' class=material-icons>edit</i>"+
	                	   				"<i onclick='viewClick("+JSON.stringify(data)+")' id='icovisibility' style='float:right;margin-right:1em;font-size:15px;' class=material-icons>visibility</i>"+
	                	   				"<div class=mdl-tooltip data-mdl-for='icovisibility'>View<strong>Orgunit</strong></div>";
	                	   				return dataHTML;
	                	   }
	                },
	                
	            ]
	           
	        });
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

	headerOrgunit.innerHTML=e.labelentity+"<br/><span style='font-size:16px;'>"+e.idparent.labelentity+"</span>";
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

