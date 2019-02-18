var app=angular.module('indicator',[]);
app.controller('indicatorCtrl',function($scope,$http) {
    $http.get('/api/typefilesindicators').then(function(response) {
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
                     document.querySelector('#pb').style="width:100%;display:none;margin-top:20%;"
                     document.querySelector('#indicatorContainer').style="width:auto;margin-top:4em;padding-left:1em;text-align:center;display:inline-block;"
                     console.log('Indicator found :',indicator);
                     var keycode=document.querySelector('#keyname');
                    // keycode.focus();
                     keycode.value=indicator.idindicator.keycode;

                     var indicatorname=document.querySelector('#indicatorname');
                    // indicatorname.focus();
                     indicatorname.value=indicator.idindicator.indicatorname;
                     var dateindicator=document.querySelector('#datefilter1');
                     dateindicator.focus();
                     dateindicator.value=indicator.idindicator.datebegin;

                     var dateindicator2=document.querySelector('#datefilter2');
                     dateindicator2.focus();
                     dateindicator2.value=indicator.idindicator.dateend;

                     var typefilename=document.querySelector('#typefilename');
                     typefilename.focus();
                     typefilename.value=indicator.idtypefile.typefilename;
                     document.querySelector('#linktypefile').href="/typefile/"+indicator.idtypefile.id;
    },function (error) {
        console.error(error)
    })
  
})