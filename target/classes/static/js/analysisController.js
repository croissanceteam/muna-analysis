var app=angular.module('analysis',[]);
app.controller('analysisCtrl',function($scope,$http){
    console.log('AngularJS analysis')
    $scope.typefilelist;
    var udatafile=document.querySelector('#uldatafile');
    $http.get('/api/statustypefiles/1').then(function (response) {
        $scope.typefilelist=response.data;
        console.log("Result :",$scope.typefilelist);

    },function(error){

    });
    $scope.selectTypeFile=function(){
        $scope.typefilelist.forEach(function(elt){
            if (elt.typefilename==$scope.tfilemodel.toString().trim()){
                console.log('Id :',elt.id)
                $http.get('/api/typefilesid/'+elt.id).then(function(response){
                   console.log('response :',response.data);
                   $scope.indicators=response.data;
                },function(error){

                });
            }
        });
    }
});