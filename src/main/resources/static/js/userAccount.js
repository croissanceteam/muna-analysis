var app=angular.module('useraccount',[]);
app.controller('useraccount',function($scope,$http){
    $scope.isRequired=true;
console.log('Angular :',userinfo)
    $scope.iduser=userinfo.idUsers.id;
    $scope.region=userinfo.idFactory.labelentity;
    $scope.country=userinfo.idFactory.idparent.labelentity;
    $scope.priority=userinfo.idPermission.role;
    $scope.status=(userinfo.idUsers.status==1?'active':'desactive');
    $scope.username=userinfo.idUsers.username;
    $scope.fullname=userinfo.idUsers.fullname;
});
