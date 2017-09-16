var app = angular.module('app', [])
 app.component('xuxu', {
   templateUrl: 'templates/testComponent.html',
   controller: testController
 })

 function testController($scope){
   $scope.fullName = "Este é um componente do AngularJs"
 }
