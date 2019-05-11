var app=angular.module('useraccount',[]);
app.controller('useraccount',function($scope,$http){
console.log('Angular :',userinfo)
    $scope.region=userinfo.idFactory.labelentity;
    $scope.country=userinfo.idFactory.idparent.labelentity;
    $scope.priority=userinfo.idPermission.role;
    $scope.status=(userinfo.idUsers.status==1?'active':'desactive');
});