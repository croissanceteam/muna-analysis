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
    $scope.selectYear=function(){

    }
});