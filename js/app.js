var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config([
  '$routeProvider', function($routeProvider){
  $routeProvider.when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController',
  }).//chained method call
  when('/details/:itemId', {//assigning current item from list.html anchor tag
    templateUrl: 'partials/details.html', // gives it templateUrl
    controller: 'DetailsController', //gives it controller, and controllers.js fires off
  }).
  otherwise({
    redirectTo: 'list'
  })
  //when the route is /list
  }

]);
