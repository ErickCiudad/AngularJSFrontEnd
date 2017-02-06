var artistControllers = angular.module('artistControllers', ['ngAnimate']);
//array for dependencies, just like a json package, dependent upon ngAnimate
artistControllers.controller('ListController', ['$scope', '$http', function ($scope, $http){
//controller method of myApp object, name it MyController, and create a function called MyController,
//scope set to only for myApp by this controller. '$scope' and $http are security measures

$http.get('js/data.json').then(function(response){
    $scope.artists = response.data;
    $scope.artistOrder = 'name';
  },
  function(result){
  console.log('HTTP request failed with result: ' + result)
});
  //chain to make sure it has fully loaded json before
  //$scope has a property called author which is an object that holds it's own JSON data with properties
  //also being pulled to index.html c:
  //$http asking for Angulars http service
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){
$http.get('js/data.json').then(function(response){
    $scope.artists = response.data;
    $scope.whichItem = $routeParams.itemId; //this is the array carried all the way from list html
    // set a $scope var for next and prev itemId
    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId) -1;
      //Number converts string into number
    }
    else {
      $scope.prevItem = $scope.artists.length - 1
      //length is length of that array
    }

    //FORWARD AND BACKWARD SORTING

    if ($routeParams.itemId < $scope.artists.length - 1) {
      //array is 8, index is 7, array goes 0 1 2 3 so on
      $scope.nextItem = Number($routeParams.itemId) +1;
      //Number converts string into number
    }
    else {
      $scope.nextItem = 0;
      //length is length of that array
    }

$scope.whichItem = $routeParams.itemId;
$scope.whichItem = $routeParams.itemId;
  },
  function(result){
  console.log('HTTP request failed with result: ' + result)
});
}]);
