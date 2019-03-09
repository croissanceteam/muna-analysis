var app=angular.module('datatask',[]);
app.controller('datataskCtrl',function($scope,$http) {
    $scope.Init=function(){
        var table=$('#TDataView').DataTable({
            oLanguage:{
                sSearch:''
            },
            "aaData":$scope.dataExport,
            destroy:true,
            bAutoWidth:false,
            responsive:'true',
            aoColumns:[
    
               { "mData": "id"},
               { "mData": "monthcollect" },
               { "mData": "year" },
               { "mData": "dateexportation" },
               { "mData": "orgunitid.labelentity" },
               { "mData": "datasize" },
               { "mData": null,
               "bSortable": false,
                "mRender": function (o) { 
                    return (o.cronjob==false?'<i style="color:darkred;font-size:30px;" class="material-icons">clear</i>':'<i style="color:darkgreen;font-size:30px;" class="material-icons">done</i>');
                  } 
                 },
               { "mData": null,
               "bSortable": false,
               "mRender": function (o) { return (o.cronjob==false?'<a href=#/' + o.cronjob + '>' + 'Sync' + '</a>':'<a href=#/' + o.cronjob + '>' + 'Re-Sync' + '</a>') ;} 
               }
               
           ]
        });
    }
    $scope.dataExport=dataExport;
   $scope.Init();
    document.querySelector('#pb').style="width:100%;display:none;margin-top:20%;"
    document.querySelector('#dataTaskContainer').style="display:normal;margin-top:2em;padding:2em;padding-top:0;"
    document.querySelector('#view-source').style="display:normal";
    document.querySelector('#demo-menu-lower-right').style="display:normal;padding:1.2em";
    $http.get('/api/statustypefiles/1').then(function(response){
        $scope.datatypefiles=response.data;
        console.log('TypeFiles :',$scope.datatypefiles)
    },function(error){
        console.error(error)
    });

    $scope.getStatusData=function(status){

        $scope.dataFilter=[];
        $scope.dataExport.forEach(function(elt){
            if (elt.cronjob==status) {
                $scope.dataFilter.push(elt);
            }
        });
        console.log('Data filter:',$scope.dataFilter)
       // table.fnDestroy();
        table=$('#TDataView').DataTable({
            oLanguage:{
                sSearch:''
            },
            destroy:true,
            "aaData":$scope.dataFilter,
            bAutoWidth:false,
            responsive:'true',
            aoColumns:[
    
               { "mData": "id"},
               { "mData": "monthcollect" },
               { "mData": "year" },
               { "mData": "dateexportation" },
               { "mData": "orgunitid.labelentity" },
               { "mData": "datasize" },
               { "mData": null,
               "bSortable": false,
                "mRender": function (o) { 
                    return (o.cronjob==false?'<i style="color:darkred;font-size:30px;" class="material-icons">clear</i>':'<i style="color:darkgreen;font-size:30px;" class="material-icons">done</i>');
                  } 
                 },
               { "mData": null,
               "bSortable": false,
               "mRender": function (o) { return (o.cronjob==false?'<a href=#/' + o.cronjob + '>' + 'Sync' + '</a>':'<a href=#/' + o.cronjob + '>' + 'Re-Sync' + '</a>') ;} 
               }
               
           ]
        });
    }
});