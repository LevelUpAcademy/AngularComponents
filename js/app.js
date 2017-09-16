var app = angular.module('app', [])

 app.component('testComponent', {
   templateUrl: 'templates/testComponent.html',
   controller: testController
 })

 function testController($scope){
   $scope.fullName = "Este é um componente do AngularJs"
 }


 app.component('clockComponent', {
   templateUrl: 'templates/clockTemplate.html',
   controller: clockController
 })

 function clockController($scope){
   $scope.time = new Date()
 }

 app.component('usersListComponent', {
   templateUrl: 'templates/usersListComponent.html',
   controller: usersListControllerComponent
 })

 function usersListControllerComponent($scope){
   $scope.users = [
     {
       name: "Jonatan",
       description: "bla bla bla bla bla bla bla"
     },
     {
       name: "Caio",
       description: "paijsd fliajsdfl ijaslfjasdf "
     },
     {
       name: "Lauro",
       description: "laisjdfliasdjf lisadjf "
     },
     {
       name: "Bryan",
       description: "laisjd fliasj falis"
     }
   ]
 }


 app.component('cardUser', {
   templateUrl: 'templates/cardUserTemplate.html',
   controller: cardUserController,
   transclude: true,
   bindings: {
     name: '@',
     description: '@'
   }
 })

 function cardUserController($scope){
   console.log($scope)
 }
