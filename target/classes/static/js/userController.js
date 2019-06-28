var app=angular.module('userCtrl',[]);
app.controller('userCtrl',function($scope,$http){
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
			            "labelentity": "RD Congo",
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
			        "labelentity": "Equateur",
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
			        "labelentity": "Nord Kivu",
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
			        "labelentity": "Sud Kivu",
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
    $http.get('/userapi/permissions')
         .then(function(response){
            console.log('Response :',response.data);
            $scope.dataPermissions=response.data;
            $scope.tabPermissions=[];

            $scope.dataPermissions.forEach(element => {
                $scope.userPermission={
                    id:element.idUsers.id,
                    username:element.idUsers.username,
                    fullname:element.idUsers.fullname,
                    role:element.idPermission.role,
                    read:(element.idPermission.read==1?'Oui':'Non'),
                    write:(element.idPermission.write==1?'Oui':'Non'),
                    delete:(element.idPermission.delete==1?'Oui':'Non'),
                    geolevel:element.idFactory.labelentity,
                    status:element.idUsers.status
                };

                $scope.tabPermissions.push($scope.userPermission);
            });
            console.log($scope.tabPermissions)
            $("#Tusers").dataTable().fnDestroy()
            $scope.tableUsers=$('#Tusers').DataTable({
                oLanguage:{
                    sSearch:''
                },
                aaData:$scope.tabPermissions,
                bAutoWidth:false,
                responsive:'true',
                aoColumns:[

                    { "data": "id"},
                    { "data": "username" },
                    { "data": "fullname" },
                    { "data": "role" },
                    { "data": "geolevel" },
                    { "data": "read" },
                    { "data": "write" },
                    { "data": "delete" },
                    {
	                    "mData": null,
	                    "bSortable": false,
	                    "sWidth":"5%",
	                   "mRender": function (data, type, row) {


	                	 	//console.log('data :',data);
	                	   if (data.status==1) {
                            return ('<i class="material-icons" style="color:#008080">done</i>');
                           }else{
                            return ('<i class="material-icons" style="color:darkred">clear</i>');
                           }

	                	   				//return dataHTML;
	                	   }
	                }

                ]
            });
            document.querySelector('#pb').style="display:none;";
            document.querySelector('#view-source').style="display:normal;";
            document.querySelector('#userContainer').style="display:normal;padding:2em;margin-top:4em;";
            document.querySelector('#drawer').style="display:normal;";
         },function(error) {
             console.error(error)
		 })
		 
         $scope.title_change_form=function(){
			$scope.title_form="Créer un utilisateur";
			document.querySelector('#btnSubmitter').style="display:normal;color:white;";
			document.querySelector('#btnModify').style="display:none;color:white;";
			document.querySelector('#btnSubmitter').value="CREER"
		 }
		 $scope.poster=function(){
			 console.log('Submitter.....')
		 }
		 $('#Tusers tbody').on('click', 'tr', function (e){
			var containerCheckBox=document.querySelector("#containerCheckBox");
			
			document.querySelector('#btnSubmitter').style="display:none;color:white;";
			document.querySelector('#btnModify').style="display:normal;color:white;";
			var data = $scope.tableUsers.data();
			var index=e.target._DT_CellIndex.row;
			var obj=$scope.dataPermissions[index];
			document.querySelector("#title_form").innerHTML="Mise à jour Utilisateur";
			document.querySelector('#switchstatus').style="display:normal;"
			var dialog = document.querySelector('#dialogexport');
			if (! dialog.showModal) {
				dialogPolyfill.registerDialog(dialog);
				
			  }
			  document.querySelector('#fullname').value=obj.idUsers.fullname;
			  document.querySelector('#user').value=obj.idUsers.username;
			  document.querySelector('#pwd').value="";
			  document.querySelector('#statusNumber').value=obj.idUsers.status;
			  document.querySelector('#iduser').value=obj.idUsers.id;
			  if (obj.idUsers.status==1) {
				document.querySelector('#containerCheckBoxOff').style="display:none;"
				document.querySelector('#containerCheckBoxOn').style="display:normal;"
				  console.log('TRUE');
			  } else {
				document.querySelector('#containerCheckBoxOff').style="display:normal;"
				document.querySelector('#containerCheckBoxOn').style="display:none;"
				console.log('FALSE')
			  }
			  //document.querySelector('#sample2').value=obj.idFactory.labelentity;
			  dialog.showModal();
		 });
		 $scope.changeStatus=function(control){
			if (control=='checked') {
				var status=document.querySelector('#checkstatusOn').checked;
				console.log('Response 1:',status);
				document.querySelector('#statusNumber').value=(status==true?1:0);
			} else {
				var status=document.querySelector('#checkstatusOff').checked;
				console.log('Response 2:',status);
				document.querySelector('#statusNumber').value=(status==true?1:0);
			}
		 }
	
});
