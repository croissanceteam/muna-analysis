/**
 * 
 */
var app=angular.module('dashboard',[]);
var tester={name:'Hornel Lama'}
var tester2='Hornel'

	console.log('Test1:',typeof(tester));
	console.log('test 2:',typeof(tester2));
	app.controller('dashCtrl',function($scope,$http){
		
		var linkCurrent;
		$scope.townCurrent='';
		var tjson=document.querySelector("#datajson");
		$scope.tabkeyentity=['kin','kng','bdd','kat','eqt','kao','kac','nkv','skv','por','man'];
		tjson.value=$scope.tabkeyentity
		console.log('text :',tjson.value)
		$scope.oncheck=function(key){
			var status=document.querySelector('#'+key).checked;
			//console.log('Key value :',key)
			if (status==false) {
				
				$scope.tabkeyentity.forEach(function(obj,index){
					if (key==obj) {
						$scope.tabkeyentity.splice(obj,1);
						console.log(' Factory to remove filter is :',obj)
						
					}else{
						//console.log('Key other :',obj)
					}
				})
			 tjson.value=$scope.tabkeyentity;
			 console.log(tjson.value)
			} else {
				console.log('not found')
			}
			
		}
		
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
			        "keyentity": "kat",
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
		//	alert(rules)
		$scope.visible_config=false;
		$scope.year_datacollected=2018;
		$scope.DataOrgunitsFilter=[];
		document.querySelector('#datafactory').value=orgunitLogName.toString().toUpperCase();
		console.log("datafactory :",orgunitLogName.toString().toUpperCase())
		$scope.DataOrgunits.forEach(function(elt){
			if (orgunitLogName.toString().toUpperCase()=="RDC" && rules.toString().toLowerCase()=="superadmin") {
				$scope.DataOrgunitsFilter=$scope.DataOrgunits;
		
				
			}else if(orgunitLogName.toString().toUpperCase()==elt.keyentity.toString().toUpperCase()){
				$scope.visible_config=true;
				console.log('Orgunit found:',elt)
				$scope.DataOrgunitsFilter.push({
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
			    });
				$scope.DataOrgunitsFilter.push(elt);
				angular.break;
			}else if(orgunitLogName.toString().toUpperCase()=="RDC" && rules.toString().toLowerCase()!="superadmin"){
				$scope.DataOrgunitsFilter=$scope.DataOrgunits;
				$scope.visible_config=true;
				
			}
			
		})
		console.log('Menu datas :',$scope.DataOrgunitsFilter);
		$scope.loadDataDefault=function(){
			$scope.dataface="Tableau de complétude";
			$http.get('/api/export/data/2018')
				 .then(function(response){
					 $scope.dataCountry=response.data;
					 $scope.townCurrent="RD Congo";
					 console.log('Test Country :',$scope.dataCountry);
					 $scope.graphicsDrawIntra('rdc');
					 $("#TdatafileCountry").dataTable().fnDestroy()
					 $('#TdatafileCountry').DataTable({
						 oLanguage:{
							 sSearch:''
						 },
						 aaData:$scope.dataCountry,
						 bAutoWidth:false,
						 responsive:'true',
						 aoColumns:[
							 
							 { "data": "province"},
							 { "data": "agefloc" },
							 { "data": "chaux" },
							 { "data": "chlore" },
							 { "data": "gasoil" },
							 { "data": "kwh" },
							 { "data": "sel" },
							 { "data": "sulfate" }
							 
						 ],
						 "rowCallback": function(row, data, index){
							 
							  	if(data.agefloc>10000){
							    	$(row).find('td:eq(1)').css('background-color', 'rgba(1, 178, 16, 0.68)');
							    	//$(row).find('td:eq(1)').css('color', 'white');
							    }
							  	
							  	if(data.chaux>10000){
							    	$(row).find('td:eq(2)').css('background-color', 'rgba(6, 117, 0, 1)');
							    	//$(row).find('td:eq(2)').css('color', 'white');
							    }
							  	if(data.chlore>10000){
							    	$(row).find('td:eq(3)').css('background-color', 'rgba(9, 179, 0, 0.55)');
							    	//$(row).find('td:eq(3)').css('color', 'white');
							    }
							  	if(data.gasoil>10000){
							    	$(row).find('td:eq(4)').css('background-color', 'rgba(1, 152, 13, 0.46)');
							    	//$(row).find('td:eq(4)').css('color', 'white');
							    }
							  	if(data.kwh>10000){
							    	$(row).find('td:eq(5)').css('background-color', 'rgba(1, 152, 13, 0.30)');
							    	//$(row).find('td:eq(5)').css('color', 'white');
							    }
							  	if(data.sel>10000){
							    	$(row).find('td:eq(6)').css('background-color', 'rgba(6, 117, 0, 1)');
							    	//$(row).find('td:eq(6)').css('color', 'black');
							    }
							  	if(data.sulfate>10000){
							    	$(row).find('td:eq(7)').css('background-color', 'rgba(1, 152, 13, 0.10)');
							    //	$(row).find('td:eq(7)').css('color', 'black');
							    }
							  
							  },
						 "footerCallback": function ( row, data, start, end, display ) {
							 var api = this.api(), data;
							 var result=0.0;
							 // Remove the formatting to get integer data for summation
							 var intVal = function ( i ) {
								 return typeof i === 'string' ?
									 i.replace(/[\$,]/g, '')*1 :
									 typeof i === 'number' ?
									 i : 0;
							 };
  
							 // Total over all pages
							
							 // Total over this page
							 pageTotalagflc = api
								 .column( 1, { page: 'current'} )
								 .data()
								 .reduce( function (a, b) {
									 return parseFloat(a) + parseFloat(b);
								 }, 0 );
							 
							 pageTotalchaux = api
							 .column( 2, { page: 'current'} )
							 .data()
							 .reduce( function (a, b) {
								 return parseFloat(a) + parseFloat(b);
							 }, 0 );
							 
							 pageTotalchlore = api
							 .column( 3, { page: 'current'} )
							 .data()
							 .reduce( function (a, b) {
								 return parseFloat(a) + parseFloat(b);
							 }, 0 );
							 
							 pageTotalgasoil = api
							 .column( 4, { page: 'current'} )
							 .data()
							 .reduce( function (a, b) {
								 return parseFloat(a) + parseFloat(b);
							 }, 0 );
							 
							 pageTotalkwh = api
							 .column( 5, { page: 'current'} )
							 .data()
							 .reduce( function (a, b) {
								 return parseFloat(a) + parseFloat(b);
							 }, 0 );
							 
							 pageTotalsel = api
							 .column( 6, { page: 'current'} )
							 .data()
							 .reduce( function (a, b) {
								 return parseFloat(a) + parseFloat(b);
							 }, 0 );
							 
							 pageTotalsulfate = api
							 .column( 7, { page: 'current'} )
							 .data()
							 .reduce( function (a, b) {
								 return parseFloat(a) + parseFloat(b);
							 }, 0 );
  
							 // Update footer
						  
							 $( api.column(1).footer() ).html(
								 //'$'+pageTotal +' ( $'+ total +' total)'
									 pageTotalagflc
							 );
							 
							 $( api.column(2).footer() ).html(
									 //'$'+pageTotal +' ( $'+ total +' total)'
										 pageTotalchaux
								 );
							 $( api.column(3).footer() ).html(
									 //'$'+pageTotal +' ( $'+ total +' total)'
										 pageTotalchlore
								 );
								 $( api.column(4).footer() ).html(
									//'$'+pageTotal +' ( $'+ total +' total)'
									pageTotalgasoil
								);
								
								$( api.column(5).footer() ).html(
										//'$'+pageTotal +' ( $'+ total +' total)'
										pageTotalkwh
									);
								$( api.column(6).footer() ).html(
										//'$'+pageTotal +' ( $'+ total +' total)'
										pageTotalsel
									);
									$( api.column(7).footer() ).html(
										//'$'+pageTotal +' ( $'+ total +' total)'
										pageTotalsulfate
									);
							
							 
							 
						 }
					 });
					 console.log("dashboard country :",$scope.tabDefaultDataTableCountry);
				 },function(error){

				 });
			if (typeof localStorage!='undefined') {
				console.log('Local storrage!!!')
				if (localStorage.getItem('defaultData')==null) {
					$http.get("/api/dashboard")
				 .then(function(response) {
					 $scope.dataResponse=response.data[0];
					 
					 response.data.forEach(function(e){
						e.content=JSON.parse(e.content.replace('"\"',""));
						$scope.tabDefault.push(e)
						$scope.tabDefaultDataTable=$scope.tabDefaultDataTable.concat(e.content)
					 });
	
					console.log($scope.tabDefaultDataTable)
					$scope.graphicsDrawIntra('rdc');
						$(document).ready(function() {
					try{
						localStorage.setItem('defaultData',JSON.stringify($scope.tabDefaultDataTable))
						$("#Tdatafile").dataTable().fnDestroy()
						var table=$('#Tdatafile').DataTable({
							oLanguage:{
								sSearch:''
							},
							aaData:$scope.tabDefaultDataTable,
							bAutoWidth:false,
							responsive:'true',
							aoColumns:[
								
								{ "data": "week" },
								{ "data": "month" },
								{ "data": "year"},
								{ "data": "aflc" },
								{ "data": "chaux" },
								{ "data": "Chlore" },
								{ "data": "Gasoil" },
								{ "data": "Kwh" },
								{ "data": "Sel" },
								{ "data": "Sulfate" },
								{ "data": "FactoryName" }
								
							],
							
							"footerCallback": function ( row, data, start, end, display ) {
								var api = this.api(), data;
								var result=0.0;
								// Remove the formatting to get integer data for summation
								var intVal = function ( i ) {
									return typeof i === 'string' ?
										i.replace(/[\$,]/g, '')*1 :
										typeof i === 'number' ?
										i : 0;
								};
	 
								// Total over all pages
							   
								// Total over this page
								pageTotalagflc = api
									.column( 3, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
								
								pageTotalchaux = api
								.column( 4, { page: 'current'} )
								.data()
								.reduce( function (a, b) {
									return parseFloat(a) + parseFloat(b);
								}, 0 );
								
								pageTotalchlore = api
								.column( 5, { page: 'current'} )
								.data()
								.reduce( function (a, b) {
									return parseFloat(a) + parseFloat(b);
								}, 0 );
								
								pageTotalgasoil = api
								.column( 6, { page: 'current'} )
								.data()
								.reduce( function (a, b) {
									return parseFloat(a) + parseFloat(b);
								}, 0 );
								
								pageTotalkwh = api
								.column( 7, { page: 'current'} )
								.data()
								.reduce( function (a, b) {
									return parseFloat(a) + parseFloat(b);
								}, 0 );
								
								pageTotalsel = api
								.column( 8, { page: 'current'} )
								.data()
								.reduce( function (a, b) {
									return parseFloat(a) + parseFloat(b);
								}, 0 );
								
								pageTotalsulfate = api
								.column( 9, { page: 'current'} )
								.data()
								.reduce( function (a, b) {
									return parseFloat(a) + parseFloat(b);
								}, 0 );
	 
								// Update footer
							 
								$( api.column(3).footer() ).html(
									//'$'+pageTotal +' ( $'+ total +' total)'
										pageTotalagflc
								);
								
								$( api.column(4).footer() ).html(
										//'$'+pageTotal +' ( $'+ total +' total)'
											pageTotalchaux
									);
								$( api.column(5).footer() ).html(
										//'$'+pageTotal +' ( $'+ total +' total)'
											pageTotalchlore
									);
								$( api.column(6).footer() ).html(
										//'$'+pageTotal +' ( $'+ total +' total)'
											pageTotalgasoil
									);
								$( api.column(7).footer() ).html(
										//'$'+pageTotal +' ( $'+ total +' total)'
											pageTotalkwh
									);
								
								$( api.column(8).footer() ).html(
										//'$'+pageTotal +' ( $'+ total +' total)'
											pageTotalsel
									);
								$( api.column(9).footer() ).html(
										//'$'+pageTotal +' ( $'+ total +' total)'
											pageTotalsulfate
									);
								
								
							}
						});
						/*$('#datatables-orgunit tbody').on('click', 'tr', function (e) {
							var data = table.data();
							var index=e.target._DT_CellIndex.row;
							//console.log(data);
						//    alert( 'You clicked on '+data[index].id+'\'s row' );
							console.log(data);
							
					} );
					*/
							
						//	tjson.value=JSON.stringify($scope.tabDefaultDataTable);
							//console.log(tjson.value)
							
					}catch(e){
						console.log(e)
					}
	
				} );
					$scope.isVisible=true;
					$scope.controlVisible=true;	
				},function(error){
					console.error(error)
				});

				// Get data for DRC Cartography data intra

				$http.get("/api/geo/2018")
					 .then(function(data){
						console.log('Data carto :',data.data);
						$scope.cartoCountry=data.data;
						localStorage.setItem('cartoCountry',JSON.stringify(data.data));
						document.querySelector('#drawer').style="normal";
						document.querySelector('#view-source').style="normal";
						document.querySelector('#contentView').style="normal";
						document.querySelector('#pb').style="display:none";
					 },function(error){
						console.error(error)
					 });
					 
				} else {
					$(document).ready(function() {
						try{
							
							$scope.dataLocalStorage=JSON.parse(localStorage.getItem('defaultData').toString());
							$scope.cartoCountry=JSON.parse(localStorage.getItem('cartoCountry').toString());
							console.log('data LocalStorage :',$scope.dataLocalStorage)
							$scope.graphicsDrawIntra('rdc');
							$("#Tdatafile").dataTable().fnDestroy()
							var table=$('#Tdatafile').DataTable({
								oLanguage:{
									sSearch:''
								},
								aaData:$scope.dataLocalStorage,
								bAutoWidth:false,
								responsive:'true',
								aoColumns:[
									
									{ "data": "week" },
									{ "data": "month" },
									{ "data": "year"},
									{ "data": "aflc" },
									{ "data": "chaux" },
									{ "data": "Chlore" },
									{ "data": "Gasoil" },
									{ "data": "Kwh" },
									{ "data": "Sel" },
									{ "data": "Sulfate" },
									{ "data": "FactoryName" }
									
								],
								
								"footerCallback": function ( row, data, start, end, display ) {
									var api = this.api(), data;
									var result=0.0;
									// Remove the formatting to get integer data for summation
									var intVal = function ( i ) {
										return typeof i === 'string' ?
											i.replace(/[\$,]/g, '')*1 :
											typeof i === 'number' ?
											i : 0;
									};
		 
									// Total over all pages
								   
									// Total over this page
									pageTotalagflc = api
										.column( 3, { page: 'current'} )
										.data()
										.reduce( function (a, b) {
											return parseFloat(a) + parseFloat(b);
										}, 0 );
									
									pageTotalchaux = api
									.column( 4, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
									
									pageTotalchlore = api
									.column( 5, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
									
									pageTotalgasoil = api
									.column( 6, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
									
									pageTotalkwh = api
									.column( 7, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
									
									pageTotalsel = api
									.column( 8, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
									
									pageTotalsulfate = api
									.column( 9, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
		 
									// Update footer
								 
									$( api.column(3).footer() ).html(
										//'$'+pageTotal +' ( $'+ total +' total)'
											pageTotalagflc
									);
									
									$( api.column(4).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalchaux
										);
									$( api.column(5).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalchlore
										);
									$( api.column(6).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalgasoil
										);
									$( api.column(7).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalkwh
										);
									
									$( api.column(8).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalsel
										);
									$( api.column(9).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalsulfate
										);
									
									
								}
							});
								console.log('')
							/*$('#datatables-orgunit tbody').on('click', 'tr', function (e) {
								var data = table.data();
								var index=e.target._DT_CellIndex.row;
								//console.log(data);
							//    alert( 'You clicked on '+data[index].id+'\'s row' );
								console.log(data);
								
						} );
						*/
								
							//	tjson.value=JSON.stringify($scope.tabDefaultDataTable);
								//console.log(tjson.value)
					
						}catch(e){
							console.log(e)
						}
		
					} );
				}
				document.querySelector('#drawer').style="normal";
				document.querySelector('#view-source').style="normal";
				document.querySelector('#contentView').style="normal";
				document.querySelector('#pb').style="display:none";
				$scope.isVisible=true;
				$scope.controlVisible=true;	
				console.log('can view drawer....')
			} else {
				$http.get("/api/dashboard")
				.then(function(response) {
					$scope.dataResponse=response.data[0];
					
					response.data.forEach(function(e){
					   e.content=JSON.parse(e.content.replace('"\"',""));
					   $scope.tabDefault.push(e)
					   $scope.tabDefaultDataTable=$scope.tabDefaultDataTable.concat(e.content)
					});
   
				   console.log($scope.tabDefaultDataTable)
				   $scope.graphicsDrawIntra('rdc');
					   $(document).ready(function() {
				   try{
					   localStorage.setItem('defaultData',JSON.stringify($scope.tabDefaultDataTable))
					   $("#Tdatafile").dataTable().fnDestroy()
					   var table=$('#Tdatafile').DataTable({
						   oLanguage:{
							   sSearch:''
						   },
						   aaData:$scope.tabDefaultDataTable,
						   bAutoWidth:false,
						   responsive:'true',
						   aoColumns:[
							   
							   { "data": "week" },
							   { "data": "month" },
							   { "data": "year"},
							   { "data": "aflc" },
							   { "data": "chaux" },
							   { "data": "Chlore" },
							   { "data": "Gasoil" },
							   { "data": "Kwh" },
							   { "data": "Sel" },
							   { "data": "Sulfate" },
							   { "data": "FactoryName" }
							   
						   ],
						   
						   "footerCallback": function ( row, data, start, end, display ) {
							   var api = this.api(), data;
							   var result=0.0;
							   // Remove the formatting to get integer data for summation
							   var intVal = function ( i ) {
								   return typeof i === 'string' ?
									   i.replace(/[\$,]/g, '')*1 :
									   typeof i === 'number' ?
									   i : 0;
							   };
	
							   // Total over all pages
							  
							   // Total over this page
							   pageTotalagflc = api
								   .column( 3, { page: 'current'} )
								   .data()
								   .reduce( function (a, b) {
									   return parseFloat(a) + parseFloat(b);
								   }, 0 );
							   
							   pageTotalchaux = api
							   .column( 4, { page: 'current'} )
							   .data()
							   .reduce( function (a, b) {
								   return parseFloat(a) + parseFloat(b);
							   }, 0 );
							   
							   pageTotalchlore = api
							   .column( 5, { page: 'current'} )
							   .data()
							   .reduce( function (a, b) {
								   return parseFloat(a) + parseFloat(b);
							   }, 0 );
							   
							   pageTotalgasoil = api
							   .column( 6, { page: 'current'} )
							   .data()
							   .reduce( function (a, b) {
								   return parseFloat(a) + parseFloat(b);
							   }, 0 );
							   
							   pageTotalkwh = api
							   .column( 7, { page: 'current'} )
							   .data()
							   .reduce( function (a, b) {
								   return parseFloat(a) + parseFloat(b);
							   }, 0 );
							   
							   pageTotalsel = api
							   .column( 8, { page: 'current'} )
							   .data()
							   .reduce( function (a, b) {
								   return parseFloat(a) + parseFloat(b);
							   }, 0 );
							   
							   pageTotalsulfate = api
							   .column( 9, { page: 'current'} )
							   .data()
							   .reduce( function (a, b) {
								   return parseFloat(a) + parseFloat(b);
							   }, 0 );
	
							   // Update footer
							
							   $( api.column(3).footer() ).html(
								   //'$'+pageTotal +' ( $'+ total +' total)'
									   pageTotalagflc
							   );
							   
							   $( api.column(4).footer() ).html(
									   //'$'+pageTotal +' ( $'+ total +' total)'
										   pageTotalchaux
								   );
							   $( api.column(5).footer() ).html(
									   //'$'+pageTotal +' ( $'+ total +' total)'
										   pageTotalchlore
								   );
							   $( api.column(6).footer() ).html(
									   //'$'+pageTotal +' ( $'+ total +' total)'
										   pageTotalgasoil
								   );
							   $( api.column(7).footer() ).html(
									   //'$'+pageTotal +' ( $'+ total +' total)'
										   pageTotalkwh
								   );
							   
							   $( api.column(8).footer() ).html(
									   //'$'+pageTotal +' ( $'+ total +' total)'
										   pageTotalsel
								   );
							   $( api.column(9).footer() ).html(
									   //'$'+pageTotal +' ( $'+ total +' total)'
										   pageTotalsulfate
								   );
							   
							   
						   }
					   });

					   //document.querySelector('#drawer').getElementsByClassName.display="normal";
					   /*$('#datatables-orgunit tbody').on('click', 'tr', function (e) {
						   var data = table.data();
						   var index=e.target._DT_CellIndex.row;
						   //console.log(data);
					   //    alert( 'You clicked on '+data[index].id+'\'s row' );
						   console.log(data);
						   
				   } );
				   */
						   
					   //	tjson.value=JSON.stringify($scope.tabDefaultDataTable);
						   //console.log(tjson.value)
						   
				   }catch(e){
					   console.log(e)
				   }
   
			   } );
				   $scope.isVisible=true;
				   $scope.controlVisible=true;	
			   },function(error){
				   console.error(error)
			   });

			   $http.get("/api/geo/2018")
					 .then(function(data){
						console.log('Data carto :',data.data);
						$scope.cartoCountry=data.data;
						document.querySelector('#drawer').style="normal";
						document.querySelector('#view-source').style="normal";
						document.querySelector('#contentView').style="normal";
						document.querySelector('#pb').style="display:none";
						//localStorage.setItem('cartoCountry',JSON.stringify(data.data));						document.querySelector('#drawer').getElementsByClassName.display="normal";
					 },function(error){
						console.error(error)
					 });
			}
			
			
		}
		$scope.tabDefault=[];
		$scope.tabDefaultDataTable=[];
		$scope.isVisible=false;
		$scope.controlVisible=false;
		$scope.controlGraphVisible=false;
		$scope.controlGeoVisible=false;
		$scope.loadDataDefault();
	$scope.drawRegionsMap=function() {
		//console.log('Header to String:',JSON.parse({role: 'tooltip', p:{html:true}}));
		
		var tabGeoChart=[];
		var headerTabLegend=['State', 'Value',{role: 'tooltip', p:{html:true}}];
		tabGeoChart.push(headerTabLegend);
		$scope.cartoCountry.forEach(function(e){
				tabGeoChart.push(e);
		});
		console.log('data Region :',tabGeoChart);
		tabGeoChart.forEach(function(elt){
			console.log('Element TabGeo :',elt[0])
		})
		var data = google.visualization.arrayToDataTable(tabGeoChart);

        var options = {
		  region: 'CD',
		  resolution:'provinces',
           width: 800, 
		   height: 600,
		   tooltip: {
            isHtml: true
        },
        colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
        backgroundColor: '#81d4fa',
        datalessRegionColor: '#f8bbd0',
        defaultColor: '#f5f5f5'
		   
        };
        
        var chart = new google.visualization.GeoChart(document.getElementById('visualization'));
        function myClickHandler(){
            var selection = chart.getSelection();
            var message = '';
            for (var i = 0; i < selection.length; i++) {
                var item = selection[i];
                if (item.row != null && item.column != null) {
                    message += '{row:' + item.row + ',column:' + item.column + '}';
                } else if (item.row != null) {
                    message += '{row:' + item.row + '}';
                } else if (item.column != null) {
                    message += '{column:' + item.column + '}';
                }
            }
            if (message == '') {
                message = 'nothing';
            }
            alert('You selected ' + message);
        }
        google.visualization.events.addListener(chart, 'select', myClickHandler);
		chart.draw(data, options);
		if ($scope.townCurrent=="Rd Congo") {
			
		} else {
			
		}
	  }
	
	  $scope.drawRegionsMapByTown=function(town) {
		//console.log('Header to String:',JSON.parse({role: 'tooltip', p:{html:true}}));
		
		var tabGeoChart=[];
		var headerTabLegend=['State', 'Value',{role: 'tooltip', p:{html:true}}];
		tabGeoChart.push(headerTabLegend);
		$scope.cartoCountry.forEach(function(e){
				tabGeoChart.push(e);
		});
		console.log('data Region :',tabGeoChart);
		tabGeoChart.forEach(function(elt){
			var street=($scope.townCurrent=="Kongo Central"?"Bas-Congo":$scope.townCurrent);
			if (street==elt[0]) {
				console.log('Town found for geo :',town.labelentity);
				tabGeoChart=[];
				tabGeoChart.push(headerTabLegend);
				tabGeoChart.push(elt);

			}else{

			  console.log("Town Current is :",$scope.townCurrent)
			//  console.log("Not found geo :",elt[0])
			}
			
		})
		var data = google.visualization.arrayToDataTable(tabGeoChart);

        var options = {
		  region: 'CD',
		  resolution:'provinces',
           width: 800, 
		   height: 600,
		   tooltip: {
            isHtml: true
        }
		   
        };

        var chart = new google.visualization.GeoChart(document.getElementById('visualization'));

		chart.draw(data, options);
		if ($scope.townCurrent=="Rd Congo") {
			
		} else {
			
		}
      }
	  
	  $scope.controlVisibleCountry=true;
		$scope.controlView=function(view){
			switch (view) {
				case 'graph':
					$scope.dataface="Histogramme des données";
				if ($scope.townCurrent=='RD Congo') {

					document.querySelector('#countryContainer').style="display:normal";
					document.querySelector('#townContainer').style="display:none";
				} else {
					document.querySelector('#townContainer').style="display:normal";
					document.querySelector('#countryContainer').style="display:none";					
				}
				$scope.controlVisible=false;
				$scope.controlVisibleCountry=false
				$scope.controlGeoVisible=false;
				$scope.controlGraphVisible=true;
					break;
				case 'geo':
					$scope.dataface="Données SIG";
				if ($scope.townCurrent=='RD Congo') {
					document.querySelector('#countryContainer').style="display:norne";
					document.querySelector('#townContainer').style="display:none";
					$scope.controlVisibleCountry=false;
					console.log('GEOOOOO')
					google.charts.setOnLoadCallback($scope.drawRegionsMap);
				} else {
					document.querySelector('#townContainer').style="display:normal";
					document.querySelector('#countryContainer').style="display:none";	
					$scope.drawRegionsMapByTown($scope.townCurrent)				
				}
				$scope.controlVisible=false;
				$scope.controlGraphVisible=false;
				$scope.controlGeoVisible=true;
				
					break;
				default:
					$scope.dataface="Tableau de complétude";
				if ($scope.townCurrent=='RD Congo') {
					document.querySelector('#countryContainer').style="display:normal";
					document.querySelector('#townContainer').style="display:none";
					$scope.controlVisibleCountry=true;
				} else {
					document.querySelector('#townContainer').style="display:normal";
					document.querySelector('#countryContainer').style="display:none";					
				}
				$scope.controlVisible=true;
				$scope.controlGraphVisible=false;
				$scope.controlGeoVisible=false;
					break;
			}
			
		}
		$scope.selectTownCountry=function() {
			document.querySelector('#countryContainer').style="display:normal";
			document.querySelector('#townContainer').style="display:none";
			$scope.townCurrent="République Démocratique du Congo";
			//$scope.graphicsDrawIntra('rdc');
			//document.querySelector('#TdatafileCountry').style="cursor:pointer;width:100%;float:left;font-weight:lighter|bold;font-size:12px;display:normal;"
			//document.querySelector('#Tdatafile').style="cursor:pointer;width:100%;float:left;font-weight:lighter|bold;font-size:12px;display:none;"
		}
		$scope.selectTown=function(town){
			//document.querySelector('#Tdatafile').style="cursor:pointer;width:100%;float:left;font-weight:lighter|bold;font-size:12px;display:normal";
			//document.querySelector('#TdatafileCountry').style="cursor:pointer;width:100%;float:left;font-weight:lighter|bold;font-size:12px;display:none;"
			
			if (typeof(town)=="object") {
			$scope.townCurrent=town.labelentity;
			//document.querySelector('#containerLoader').style="background-color: rgba(255, 0, 0, 0.5);dispaly:inline-block;border:1px solid red;";
			document.querySelector('#countryContainer').style="display:none";
			document.querySelector('#townContainer').style="display:none";
			document.querySelector('#pb').style="display:normal"
				if (linkCurrent==undefined) {
					linkCurrent=document.querySelector('#'+town.keyentity);
					linkCurrent.className="mdl-tabs__tab is-active";
				} else {
					linkCurrent.className="mdl-tabs__tab textSize";
					
					linkCurrent=document.querySelector('#'+town.keyentity);
					linkCurrent.className="mdl-tabs__tab is-active";
				}
			/*
				if ($scope.townCurrent=='RD Congo') {
				//	alert($scope.townCurrent)
					document.querySelector('#countryContainer').style="display:normal";
					document.querySelector('#townContainer').style="display:none";
				} else {
					document.querySelector('#townContainer').style="display:normal";
					document.querySelector('#countryContainer').style="display:none";					
				}
				*/
			
				$scope.dataTableView=[];
				console.log('Town 1:',town.keyentity)
				if (town.keyentity=='Rdc') {
					document.location.href="/dashboard/index.do";
				} else {
					
					if ($scope.yearFilter!=undefined) {
						url='/api/dashboard/'+town.keyentity+'/'+$scope.yearFilter
					}else{
						url='/api/dashboard/'+town.keyentity
					}
					console.log('URL IS :',url)
					$http.get(url)
					.then(function(response){
						response.data.forEach(function(e){
							   e.content=JSON.parse(e.content.replace('"\"',""));
							   //$scope.tabDefault.push(e)
							   $scope.dataTableView=$scope.dataTableView.concat(e.content)
							});
					   console.log('RESPONSE :',$scope.dataTableView);
						   $scope.graphicsDrawIntra(town.keyentity);
					   $(document).ready(function() {
						   try{
							   $("#Tdatafile").dataTable().fnDestroy()
							   var table=$('#Tdatafile').DataTable({
								   oLanguage:{
									   sSearch:''
								   },
								   aaData:$scope.dataTableView,
								   bAutoWidth:false,
								   responsive:'true',
								   aoColumns:[
									   
									   { "data": "week" },
									   { "data": "month" },
									   { "data": "year"},
									   { "data": "aflc" },
									   { "data": "chaux" },
									   { "data": "Chlore" },
									   { "data": "Gasoil" },
									   { "data": "Kwh" },
									   { "data": "Sel" },
									   { "data": "Sulfate" },
									   { "data": "FactoryName" }
									   
								   ],
								   "rowCallback": function(row, data, index){
										 console.log('Data HeatMap :',data)
									  	if(data.aflc>100){
									    	$(row).find('td:eq(3)').css('background-color', 'rgba(1, 178, 16, 0.68)');
									    	//$(row).find('td:eq(1)').css('color', 'white');
									    }
									  	
									  	if(data.chaux>1000){
									    	$(row).find('td:eq(4)').css('background-color', 'rgba(6, 117, 0, 1)');
									    	//$(row).find('td:eq(2)').css('color', 'white');
									    }
									  	if(data.Chlore>1000){
									    	$(row).find('td:eq(5)').css('background-color', 'rgba(9, 179, 0, 0.55)');
									    	//$(row).find('td:eq(3)').css('color', 'white');
									    }
									  	if(data.Gasoil>1000){
									    	$(row).find('td:eq(6)').css('background-color', 'rgba(1, 152, 13, 0.46)');
									    	//$(row).find('td:eq(4)').css('color', 'white');
									    }
									  	if(data.Kwh>1000){
									    	$(row).find('td:eq(7)').css('background-color', 'rgba(1, 152, 13, 0.30)');
									    	//$(row).find('td:eq(5)').css('color', 'white');
									    }
									  	if(data.Sel>1000){
									    	$(row).find('td:eq(8)').css('background-color', 'rgba(6, 117, 0, 1)');
									    	//$(row).find('td:eq(6)').css('color', 'black');
									    }
									  	if(data.Sulfate>1000){
									    	$(row).find('td:eq(9)').css('background-color', 'rgba(1, 152, 13, 0.10)');
									    //	$(row).find('td:eq(7)').css('color', 'black');
									    }
									  
									  },
								   "footerCallback": function ( row, data, start, end, display ) {
									   var api = this.api(), data;
									   var result=0.0;
									   // Remove the formatting to get integer data for summation
									   var intVal = function ( i ) {
										   return typeof i === 'string' ?
											   i.replace(/[\$,]/g, '')*1 :
											   typeof i === 'number' ?
											   i : 0;
									   };
			
									   // Total over all pages
									  
									   // Total over this page
									   pageTotalagflc = api
										   .column( 3, { page: 'current'} )
										   .data()
										   .reduce( function (a, b) {
											   return parseFloat(a) + parseFloat(b);
										   }, 0 );
									   
									   pageTotalchaux = api
									   .column( 4, { page: 'current'} )
									   .data()
									   .reduce( function (a, b) {
										   return parseFloat(a) + parseFloat(b);
									   }, 0 );
									   
									   pageTotalchlore = api
									   .column( 5, { page: 'current'} )
									   .data()
									   .reduce( function (a, b) {
										   return parseFloat(a) + parseFloat(b);
									   }, 0 );
									   
									   pageTotalgasoil = api
									   .column( 6, { page: 'current'} )
									   .data()
									   .reduce( function (a, b) {
										   return parseFloat(a) + parseFloat(b);
									   }, 0 );
									   
									   pageTotalkwh = api
									   .column( 7, { page: 'current'} )
									   .data()
									   .reduce( function (a, b) {
										   return parseFloat(a) + parseFloat(b);
									   }, 0 );
									   
									   pageTotalsel = api
									   .column( 8, { page: 'current'} )
									   .data()
									   .reduce( function (a, b) {
										   return parseFloat(a) + parseFloat(b);
									   }, 0 );
									   
									   pageTotalsulfate = api
									   .column( 9, { page: 'current'} )
									   .data()
									   .reduce( function (a, b) {
										   return parseFloat(a) + parseFloat(b);
									   }, 0 );
			
									   // Update footer
									
									   $( api.column(3).footer() ).html(
										   //'$'+pageTotal +' ( $'+ total +' total)'
											   pageTotalagflc
									   );
									   
									   $( api.column(4).footer() ).html(
											   //'$'+pageTotal +' ( $'+ total +' total)'
												   pageTotalchaux
										   );
									   $( api.column(5).footer() ).html(
											   //'$'+pageTotal +' ( $'+ total +' total)'
												   pageTotalchlore
										   );
									   $( api.column(6).footer() ).html(
											   //'$'+pageTotal +' ( $'+ total +' total)'
												   pageTotalgasoil
										   );
									   $( api.column(7).footer() ).html(
											   //'$'+pageTotal +' ( $'+ total +' total)'
												   pageTotalkwh
										   );
									   
									   $( api.column(8).footer() ).html(
											   //'$'+pageTotal +' ( $'+ total +' total)'
												   pageTotalsel
										   );
									   $( api.column(9).footer() ).html(
											   //'$'+pageTotal +' ( $'+ total +' total)'
												   pageTotalsulfate
										   );
									   
									   
								   }
							   });
							   /*$('#datatables-orgunit tbody').on('click', 'tr', function (e) {
								   var data = table.data();
								   var index=e.target._DT_CellIndex.row;
								   //console.log(data);
							   //    alert( 'You clicked on '+data[index].id+'\'s row' );
								   console.log(data);
								   
						   } );
						   */
								   var tjson=document.querySelector("#datajson");
								   tjson.value=JSON.stringify($scope.tabDefaultDataTable);
								   //console.log(tjson.value)
								    document.querySelector('#countryContainer').style="display:none";
									document.querySelector('#townContainer').style="display:normal";
									document.querySelector('#pb').style="display:none";
								   
						   }catch(e){
							   console.log(e)
						   }

					   } ); 
					},function(error){
						
					});
					$scope.drawRegionsMapByTown($scope.townCurrent);
				}
			} else {
				
			}
			
		}
		$scope.graphicsDrawIntra=function(town){
			var tabLabels=[];
			var datasetLists=[];
			var colors=[
				'rgba(0, 128, 128, 0.60)',
				'rgba(128, 0, 128, 0.60)',
				'rgba(128, 0, 0, 0.60)',
				'rgba(0, 0, 128, 0.60)',
				'rgba(128, 128, 0, 0.60)',
				'rgba(0, 128, 0, 0.60)',
				'rgba(205, 92, 92, 0.60)'
			];
			var borders=[
				'#008080',
				'#800080',
				'#800000',
				'#000080',
				'#808000',
				'#008000',
				'#CD5C5C'
			];
			
			var intras=
			[	
				{
					label:'Agefloc',
					backgroundColor:colors[0],
					borderColor:borders[0],
					hoverBackgroundColor:colors[0],
					data:[],
					borderWidth: 1
				},
				{
					label:'Chaux',
					backgroundColor:colors[1],
					borderColor:borders[1],
					hoverBackgroundColor:colors[1],
					data:[],
					borderWidth: 1
				}
				,
				{
					label:'Chlore',
					backgroundColor:colors[2],
					borderColor:borders[2],
					hoverBackgroundColor:colors[2],
					data:[],
					borderWidth: 1
				}
				,
				{
					label:'Gasoil',
					backgroundColor:colors[3],
					borderColor:borders[3],
					hoverBackgroundColor:colors[3],
					data:[],
					borderWidth: 1
				}
				,
				{
					label:'KWH',
					backgroundColor:colors[4],
					borderColor:borders[4],
					hoverBackgroundColor:colors[4],
					data:[],
					borderWidth: 1
				}
				,
				{
					label:'Sel',
					backgroundColor:colors[5],
					borderColor:borders[5],
					hoverBackgroundColor:colors[5],
					data:[],
					borderWidth: 1
				}
				,
				{
					label:'Sulfate',
					backgroundColor:colors[6],
					borderColor:borders[6],
					hoverBackgroundColor:colors[6],
					data:[],
					borderWidth: 1
				}
			];
			if (town=='rdc') {
		
					for (var index = 0; index <$scope.dataCountry.length; index++) {
						var Agefloc=0;
						var Chaux=0;
						var Chlore=0;
						var Gasoil=0;
						var KWH=0;
						var Sel=0;
						var Sulfate=0;
		
						var factory=$scope.dataCountry[index].province;
						tabLabels.push($scope.dataCountry[index].province);
						
						intras[0].data.push($scope.dataCountry[index].agefloc);
						intras[1].data.push($scope.dataCountry[index].chaux);
						intras[2].data.push($scope.dataCountry[index].chlore);
						intras[3].data.push($scope.dataCountry[index].gasoil);
						intras[4].data.push($scope.dataCountry[index].kwh);
						intras[5].data.push($scope.dataCountry[index].sel);
						intras[6].data.push($scope.dataCountry[index].sulfate);
						
					}
				
				
			} else {
				for (var index = 0; index <$scope.dataTableView.length; index+=5) {
					var Agefloc=0;
					var Chaux=0;
					var Chlore=0;
					var Gasoil=0;
					var KWH=0;
					var Sel=0;
					var Sulfate=0;
	
					var factory=$scope.dataTableView[index].FactoryName;
					tabLabels.push($scope.dataTableView[index].FactoryName);
					$scope.dataTableView.forEach(function(elt){
						if (elt.FactoryName==factory) {
							Agefloc+=parseInt(elt.aflc);
							Chaux+=parseInt(elt.chaux);
							Chlore+=parseInt(elt.Chlore);
							Gasoil+=parseInt(elt.Gasoil);
							KWH+=parseInt(elt.Kwh);
							Sel+=parseInt(elt.Sel);
							Sulfate+=parseInt(elt.Sulfate);
						}
					});
					intras[0].data.push(Agefloc);
					intras[1].data.push(Chaux);
					intras[2].data.push(Chlore);
					intras[3].data.push(Gasoil);
					intras[4].data.push(KWH);
					intras[5].data.push(Sel);
					intras[6].data.push(Sulfate);
					
				}
			}
			
			console.log('Intras List :',intras)
			console.log('TabLabels :',tabLabels)
			
			var ctx = document.getElementById("myChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: tabLabels,
					datasets: intras
				},
				options: {
					maintainAspectRatio: true,
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero:true
							}
						}]
					},
					tooltips: {
						enabled:true,
						position:'average',
						mode: 'point',
						callbacks: {
							label: function(tooltipItem, data) {
								var label = data.datasets[tooltipItem.datasetIndex].label || '';
			
								if (label) {
									label += ': ';
								}
								label += Math.round(tooltipItem.yLabel * 100) / 100;
								return label;
							}
						}

					},
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: $scope.townCurrent
					},
					hover: {
						mode: 'nearest',
						intersect: true
					}
				}
			});
		}

		var searchText=document.querySelector('#search');
			searchText.onkeypress=function (e) {
				if (e.keyCode==13) {
					console.log('value is :',searchText.value.toString().trim())
					if (isNaN(searchText.value.toString().trim())) {
						console.log('Is Not a Numeric')
						alert('Cette valeur est erronée');
					} else {
						$scope.year_datacollected=searchText.value.toString().trim();
						$scope.loadDataFilterYear(searchText.value.toString().trim());
						$scope.yearFilter=searchText.value.toString().trim();
						console.log('Is a Numeric')
					}
				}
			}

			$scope.loadDataFilterYear=function(year){
				$http.get('/api/export/data/'+year)
					 .then(function(response){
						 $scope.dataCountry=response.data;
						 $scope.townCurrent="RD Congo";
						 console.log('Test Country :',$scope.dataCountry);
						 $scope.graphicsDrawIntra('rdc');
						 $("#TdatafileCountry").dataTable().fnDestroy()
						 $('#TdatafileCountry').DataTable({
							 oLanguage:{
								 sSearch:''
							 },
							 aaData:$scope.dataCountry,
							 bAutoWidth:false,
							 responsive:'true',
							 aoColumns:[
								 
								 { "data": "province"},
								 { "data": "agefloc" },
								 { "data": "chaux" },
								 { "data": "chlore" },
								 { "data": "gasoil" },
								 { "data": "kwh" },
								 { "data": "sel" },
								 { "data": "sulfate" }
								 
							 ],
							 
							 "footerCallback": function ( row, data, start, end, display ) {
								 var api = this.api(), data;
								 var result=0.0;
								 // Remove the formatting to get integer data for summation
								 var intVal = function ( i ) {
									 return typeof i === 'string' ?
										 i.replace(/[\$,]/g, '')*1 :
										 typeof i === 'number' ?
										 i : 0;
								 };
	  
								 // Total over all pages
								
								 // Total over this page
								 pageTotalagflc = api
									 .column( 1, { page: 'current'} )
									 .data()
									 .reduce( function (a, b) {
										 return parseFloat(a) + parseFloat(b);
									 }, 0 );
								 
								 pageTotalchaux = api
								 .column( 2, { page: 'current'} )
								 .data()
								 .reduce( function (a, b) {
									 return parseFloat(a) + parseFloat(b);
								 }, 0 );
								 
								 pageTotalchlore = api
								 .column( 3, { page: 'current'} )
								 .data()
								 .reduce( function (a, b) {
									 return parseFloat(a) + parseFloat(b);
								 }, 0 );
								 
								 pageTotalgasoil = api
								 .column( 4, { page: 'current'} )
								 .data()
								 .reduce( function (a, b) {
									 return parseFloat(a) + parseFloat(b);
								 }, 0 );
								 
								 pageTotalkwh = api
								 .column( 5, { page: 'current'} )
								 .data()
								 .reduce( function (a, b) {
									 return parseFloat(a) + parseFloat(b);
								 }, 0 );
								 
								 pageTotalsel = api
								 .column( 6, { page: 'current'} )
								 .data()
								 .reduce( function (a, b) {
									 return parseFloat(a) + parseFloat(b);
								 }, 0 );
								 
								 pageTotalsulfate = api
								 .column( 7, { page: 'current'} )
								 .data()
								 .reduce( function (a, b) {
									 return parseFloat(a) + parseFloat(b);
								 }, 0 );
	  
								 // Update footer
							  
								 $( api.column(1).footer() ).html(
									 //'$'+pageTotal +' ( $'+ total +' total)'
										 pageTotalagflc
								 );
								 
								 $( api.column(2).footer() ).html(
										 //'$'+pageTotal +' ( $'+ total +' total)'
											 pageTotalchaux
									 );
								 $( api.column(3).footer() ).html(
										 //'$'+pageTotal +' ( $'+ total +' total)'
											 pageTotalchlore
									 );
									 $( api.column(4).footer() ).html(
										//'$'+pageTotal +' ( $'+ total +' total)'
										pageTotalgasoil
									);
									
									$( api.column(5).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
											pageTotalkwh
										);
									$( api.column(6).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
											pageTotalsel
										);
										$( api.column(7).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
											pageTotalsulfate
										);
								
								 
								 
							 }
						 });
						 console.log("dashboard country :",$scope.tabDefaultDataTableCountry);
					 },function(error){
	
					 });
				if (typeof localStorage!='undefined') {
					console.log('Local storrage!!!')
					if (localStorage.getItem('defaultData')==null) {
						$http.get("/api/dashboard/"+year)
					 .then(function(response) {
						 $scope.dataResponse=response.data[0];
						 
						 response.data.forEach(function(e){
							e.content=JSON.parse(e.content.replace('"\"',""));
							$scope.tabDefault.push(e)
							$scope.tabDefaultDataTable=$scope.tabDefaultDataTable.concat(e.content)
						 });
		
						console.log($scope.tabDefaultDataTable)
						$scope.graphicsDrawIntra('rdc');
							$(document).ready(function() {
						try{
							localStorage.setItem('defaultData',JSON.stringify($scope.tabDefaultDataTable))
							$("#Tdatafile").dataTable().fnDestroy()
							var table=$('#Tdatafile').DataTable({
								oLanguage:{
									sSearch:''
								},
								aaData:$scope.tabDefaultDataTable,
								bAutoWidth:false,
								responsive:'true',
								aoColumns:[
									
									{ "data": "week" },
									{ "data": "month" },
									{ "data": "year"},
									{ "data": "aflc" },
									{ "data": "chaux" },
									{ "data": "Chlore" },
									{ "data": "Gasoil" },
									{ "data": "Kwh" },
									{ "data": "Sel" },
									{ "data": "Sulfate" },
									{ "data": "FactoryName" }
									
								],
								
								"footerCallback": function ( row, data, start, end, display ) {
									var api = this.api(), data;
									var result=0.0;
									// Remove the formatting to get integer data for summation
									var intVal = function ( i ) {
										return typeof i === 'string' ?
											i.replace(/[\$,]/g, '')*1 :
											typeof i === 'number' ?
											i : 0;
									};
		 
									// Total over all pages
								   
									// Total over this page
									pageTotalagflc = api
										.column( 3, { page: 'current'} )
										.data()
										.reduce( function (a, b) {
											return parseFloat(a) + parseFloat(b);
										}, 0 );
									
									pageTotalchaux = api
									.column( 4, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
									
									pageTotalchlore = api
									.column( 5, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
									
									pageTotalgasoil = api
									.column( 6, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
									
									pageTotalkwh = api
									.column( 7, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
									
									pageTotalsel = api
									.column( 8, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
									
									pageTotalsulfate = api
									.column( 9, { page: 'current'} )
									.data()
									.reduce( function (a, b) {
										return parseFloat(a) + parseFloat(b);
									}, 0 );
		 
									// Update footer
								 
									$( api.column(3).footer() ).html(
										//'$'+pageTotal +' ( $'+ total +' total)'
											pageTotalagflc
									);
									
									$( api.column(4).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalchaux
										);
									$( api.column(5).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalchlore
										);
									$( api.column(6).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalgasoil
										);
									$( api.column(7).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalkwh
										);
									
									$( api.column(8).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalsel
										);
									$( api.column(9).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalsulfate
										);
									
									
								}
							});
							/*$('#datatables-orgunit tbody').on('click', 'tr', function (e) {
								var data = table.data();
								var index=e.target._DT_CellIndex.row;
								//console.log(data);
							//    alert( 'You clicked on '+data[index].id+'\'s row' );
								console.log(data);
								
						} );
						*/
								
							//	tjson.value=JSON.stringify($scope.tabDefaultDataTable);
								//console.log(tjson.value)
								
						}catch(e){
							console.log(e)
						}
		
					} );
						$scope.isVisible=true;
						$scope.controlVisible=true;	
					},function(error){
						console.error(error)
					});
	
					// Get data for DRC Cartography data intra
	
					$http.get("/api/geo/"+year)
						 .then(function(data){
							console.log('Data carto :',data.data);
							$scope.cartoCountry=data.data;
							localStorage.setItem('cartoCountry',JSON.stringify(data.data));
							document.querySelector('#drawer').style="normal";
							document.querySelector('#view-source').style="normal";
							document.querySelector('#contentView').style="normal";
							document.querySelector('#pb').style="display:none";
						 },function(error){
							console.error(error)
						 });
						 
					} else {
						$(document).ready(function() {
							try{
								
								$scope.dataLocalStorage=JSON.parse(localStorage.getItem('defaultData').toString());
								$scope.cartoCountry=JSON.parse(localStorage.getItem('cartoCountry').toString());
								console.log('data LocalStorage :',$scope.dataLocalStorage)
								$scope.graphicsDrawIntra('rdc');
								$("#Tdatafile").dataTable().fnDestroy()
								var table=$('#Tdatafile').DataTable({
									oLanguage:{
										sSearch:''
									},
									aaData:$scope.dataLocalStorage,
									bAutoWidth:false,
									responsive:'true',
									aoColumns:[
										
										{ "data": "week" },
										{ "data": "month" },
										{ "data": "year"},
										{ "data": "aflc" },
										{ "data": "chaux" },
										{ "data": "Chlore" },
										{ "data": "Gasoil" },
										{ "data": "Kwh" },
										{ "data": "Sel" },
										{ "data": "Sulfate" },
										{ "data": "FactoryName" }
										
									],
									
									"footerCallback": function ( row, data, start, end, display ) {
										var api = this.api(), data;
										var result=0.0;
										// Remove the formatting to get integer data for summation
										var intVal = function ( i ) {
											return typeof i === 'string' ?
												i.replace(/[\$,]/g, '')*1 :
												typeof i === 'number' ?
												i : 0;
										};
			 
										// Total over all pages
									   
										// Total over this page
										pageTotalagflc = api
											.column( 3, { page: 'current'} )
											.data()
											.reduce( function (a, b) {
												return parseFloat(a) + parseFloat(b);
											}, 0 );
										
										pageTotalchaux = api
										.column( 4, { page: 'current'} )
										.data()
										.reduce( function (a, b) {
											return parseFloat(a) + parseFloat(b);
										}, 0 );
										
										pageTotalchlore = api
										.column( 5, { page: 'current'} )
										.data()
										.reduce( function (a, b) {
											return parseFloat(a) + parseFloat(b);
										}, 0 );
										
										pageTotalgasoil = api
										.column( 6, { page: 'current'} )
										.data()
										.reduce( function (a, b) {
											return parseFloat(a) + parseFloat(b);
										}, 0 );
										
										pageTotalkwh = api
										.column( 7, { page: 'current'} )
										.data()
										.reduce( function (a, b) {
											return parseFloat(a) + parseFloat(b);
										}, 0 );
										
										pageTotalsel = api
										.column( 8, { page: 'current'} )
										.data()
										.reduce( function (a, b) {
											return parseFloat(a) + parseFloat(b);
										}, 0 );
										
										pageTotalsulfate = api
										.column( 9, { page: 'current'} )
										.data()
										.reduce( function (a, b) {
											return parseFloat(a) + parseFloat(b);
										}, 0 );
			 
										// Update footer
									 
										$( api.column(3).footer() ).html(
											//'$'+pageTotal +' ( $'+ total +' total)'
												pageTotalagflc
										);
										
										$( api.column(4).footer() ).html(
												//'$'+pageTotal +' ( $'+ total +' total)'
													pageTotalchaux
											);
										$( api.column(5).footer() ).html(
												//'$'+pageTotal +' ( $'+ total +' total)'
													pageTotalchlore
											);
										$( api.column(6).footer() ).html(
												//'$'+pageTotal +' ( $'+ total +' total)'
													pageTotalgasoil
											);
										$( api.column(7).footer() ).html(
												//'$'+pageTotal +' ( $'+ total +' total)'
													pageTotalkwh
											);
										
										$( api.column(8).footer() ).html(
												//'$'+pageTotal +' ( $'+ total +' total)'
													pageTotalsel
											);
										$( api.column(9).footer() ).html(
												//'$'+pageTotal +' ( $'+ total +' total)'
													pageTotalsulfate
											);
										
										
									}
								});
									console.log('')
								/*$('#datatables-orgunit tbody').on('click', 'tr', function (e) {
									var data = table.data();
									var index=e.target._DT_CellIndex.row;
									//console.log(data);
								//    alert( 'You clicked on '+data[index].id+'\'s row' );
									console.log(data);
									
							} );
							*/
									
								//	tjson.value=JSON.stringify($scope.tabDefaultDataTable);
									//console.log(tjson.value)
						
							}catch(e){
								console.log(e)
							}
			
						} );
					}
					document.querySelector('#drawer').style="normal";
					document.querySelector('#view-source').style="normal";
					document.querySelector('#contentView').style="normal";
					document.querySelector('#pb').style="display:none";
					$scope.isVisible=true;
					$scope.controlVisible=true;	
					console.log('can view drawer....')
				} else {
					$http.get("/api/dashboard/"+year)
					.then(function(response) {
						$scope.dataResponse=response.data[0];
						
						response.data.forEach(function(e){
						   e.content=JSON.parse(e.content.replace('"\"',""));
						   $scope.tabDefault.push(e)
						   $scope.tabDefaultDataTable=$scope.tabDefaultDataTable.concat(e.content)
						});
	   
					   console.log($scope.tabDefaultDataTable)
					   $scope.graphicsDrawIntra('rdc');
						   $(document).ready(function() {
					   try{
						   localStorage.setItem('defaultData',JSON.stringify($scope.tabDefaultDataTable))
						   $("#Tdatafile").dataTable().fnDestroy()
						   var table=$('#Tdatafile').DataTable({
							   oLanguage:{
								   sSearch:''
							   },
							   aaData:$scope.tabDefaultDataTable,
							   bAutoWidth:false,
							   responsive:'true',
							   aoColumns:[
								   
								   { "data": "week" },
								   { "data": "month" },
								   { "data": "year"},
								   { "data": "aflc" },
								   { "data": "chaux" },
								   { "data": "Chlore" },
								   { "data": "Gasoil" },
								   { "data": "Kwh" },
								   { "data": "Sel" },
								   { "data": "Sulfate" },
								   { "data": "FactoryName" }
								   
							   ],
							   
							   "footerCallback": function ( row, data, start, end, display ) {
								   var api = this.api(), data;
								   var result=0.0;
								   // Remove the formatting to get integer data for summation
								   var intVal = function ( i ) {
									   return typeof i === 'string' ?
										   i.replace(/[\$,]/g, '')*1 :
										   typeof i === 'number' ?
										   i : 0;
								   };
		
								   // Total over all pages
								  
								   // Total over this page
								   pageTotalagflc = api
									   .column( 3, { page: 'current'} )
									   .data()
									   .reduce( function (a, b) {
										   return parseFloat(a) + parseFloat(b);
									   }, 0 );
								   
								   pageTotalchaux = api
								   .column( 4, { page: 'current'} )
								   .data()
								   .reduce( function (a, b) {
									   return parseFloat(a) + parseFloat(b);
								   }, 0 );
								   
								   pageTotalchlore = api
								   .column( 5, { page: 'current'} )
								   .data()
								   .reduce( function (a, b) {
									   return parseFloat(a) + parseFloat(b);
								   }, 0 );
								   
								   pageTotalgasoil = api
								   .column( 6, { page: 'current'} )
								   .data()
								   .reduce( function (a, b) {
									   return parseFloat(a) + parseFloat(b);
								   }, 0 );
								   
								   pageTotalkwh = api
								   .column( 7, { page: 'current'} )
								   .data()
								   .reduce( function (a, b) {
									   return parseFloat(a) + parseFloat(b);
								   }, 0 );
								   
								   pageTotalsel = api
								   .column( 8, { page: 'current'} )
								   .data()
								   .reduce( function (a, b) {
									   return parseFloat(a) + parseFloat(b);
								   }, 0 );
								   
								   pageTotalsulfate = api
								   .column( 9, { page: 'current'} )
								   .data()
								   .reduce( function (a, b) {
									   return parseFloat(a) + parseFloat(b);
								   }, 0 );
		
								   // Update footer
								
								   $( api.column(3).footer() ).html(
									   //'$'+pageTotal +' ( $'+ total +' total)'
										   pageTotalagflc
								   );
								   
								   $( api.column(4).footer() ).html(
										   //'$'+pageTotal +' ( $'+ total +' total)'
											   pageTotalchaux
									   );
								   $( api.column(5).footer() ).html(
										   //'$'+pageTotal +' ( $'+ total +' total)'
											   pageTotalchlore
									   );
								   $( api.column(6).footer() ).html(
										   //'$'+pageTotal +' ( $'+ total +' total)'
											   pageTotalgasoil
									   );
								   $( api.column(7).footer() ).html(
										   //'$'+pageTotal +' ( $'+ total +' total)'
											   pageTotalkwh
									   );
								   
								   $( api.column(8).footer() ).html(
										   //'$'+pageTotal +' ( $'+ total +' total)'
											   pageTotalsel
									   );
								   $( api.column(9).footer() ).html(
										   //'$'+pageTotal +' ( $'+ total +' total)'
											   pageTotalsulfate
									   );
								   
								   
							   }
						   });
	
						   //document.querySelector('#drawer').getElementsByClassName.display="normal";
						   /*$('#datatables-orgunit tbody').on('click', 'tr', function (e) {
							   var data = table.data();
							   var index=e.target._DT_CellIndex.row;
							   //console.log(data);
						   //    alert( 'You clicked on '+data[index].id+'\'s row' );
							   console.log(data);
							   
					   } );
					   */
							   
						   //	tjson.value=JSON.stringify($scope.tabDefaultDataTable);
							   //console.log(tjson.value)
							   
					   }catch(e){
						   console.log(e)
					   }
	   
				   } );
					   $scope.isVisible=true;
					   $scope.controlVisible=true;	
				   },function(error){
					   console.error(error)
				   });
	
				   $http.get("/api/geo/"+year)
						 .then(function(data){
							console.log('Data carto :',data.data);
							$scope.cartoCountry=data.data;
							document.querySelector('#drawer').style="normal";
							document.querySelector('#view-source').style="normal";
							document.querySelector('#contentView').style="normal";
							document.querySelector('#pb').style="display:none";
							//localStorage.setItem('cartoCountry',JSON.stringify(data.data));						document.querySelector('#drawer').getElementsByClassName.display="normal";
						 },function(error){
							console.error(error)
						 });
				}
			}
	});