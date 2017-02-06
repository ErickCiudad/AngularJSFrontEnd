var myApp = angular.module('myApp', []);
//array for dependencies, just like a json package
myApp.controller('MyController', function MyController($scope){
//controller method of myApp object, name it MyController, and create a function called MyController, scope set to only for myApp by this controller
  $scope.author = {
    'name'    : 'Erick Ciudad',
    'title'   : 'Student',
    'company' : 'West-MEC debug team'
  }
  //$scope has a property called author which is an object that holds it's own JSON data with properties
  //also being pulled to index.html c:
})
