var app=angular.module('indicator',[]);
app.controller('indicatorCtrl',function($scope,$http) {
    $http.get('/typefiles/typefilesindicators').then(function(response) {
        console.log('Raw Data :',response.data);
        $scope.dataIndicators=[];
        response.data.forEach(function(elt){
            $scope.dataIndicators.push
            (
                {
                    idindicator:elt.idindicator.id,
                    keynameindicator:elt.idindicator.keycode,
                    indicatorname:elt.idindicator.indicatorname,
                    dateindicator:elt.idindicator.datecreated,
                    keynametypefile:elt.idtypefile.keycode,
                    typefilename:elt.idtypefile.typefilename,
                    datetypefile:elt.idtypefile.datecreated

                }
            );
        });
        console.log('Data List Indicator :',$scope.dataIndicators);
        		//	 $("#TdatafileCountry").dataTable().fnDestroy()
					 var table=$('#TDataView').DataTable({
						 oLanguage:{
							 sSearch:''
						 },
						 "aaData":$scope.dataIndicators,
						 bAutoWidth:false,
						 responsive:'true',
						 aoColumns:[
                
                            { "data": "keynameindicator"},
                            { "data": "indicatorname" },
                            { "data": "dateindicator" },
                            { "data": "keynametypefile" },
                            { "data": "typefilename" },
                            { "data": "datetypefile" }
                            
                        ]
                     });
                     document.querySelector('#pb').style="display:none;"
                     document.querySelector('#indicatorContainer').style="margin-top:4em;padding:2em;display:normal;"
                     document.querySelector('#view-source').style="display:normal";
    },function (error) {
        console.error(error)
    })
    $('#TDataView tbody').on('click', 'tr', function (e) {
        var index=e.target._DT_CellIndex.row;
        //var data = table.data();
        console.log('index is :',$scope.dataIndicators[index])
        var linkOpen=document.querySelector('link');
        linkOpen.href="/indicator/typefilesid/"+$scope.dataIndicators[index].idindicator;
        linkOpen.click();
        
    });
    $http.get('/typefiles/statustypefiles/1').then(function(response){
        $scope.datatypefiles=response.data;
        console.log('TypeFiles :',$scope.datatypefiles)

        var container=document.querySelector('.dropdown-menu');
        $scope.datatypefiles.forEach(function (data) {
            var link=document.createElement('a');
            link.setAttribute("class","dropdown-item");
           // link.setAttribute("href","#");
            link.innerHTML=data.typefilename;
            container.appendChild(link);
            var separator=document.createElement('div');
                separator.setAttribute("role","separator");
                separator.setAttribute("class","dropdown-divider")
            container.appendChild(separator);
            link.onclick=function (e) {
                document.querySelector("#typefile").value=data.typefilename;
                document.querySelector('#idtypefile').value=data.id;
            }
        })
    },function(error){
        console.error(error)
    });
})