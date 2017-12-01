var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl: 'templates/home.html'
    })
    .when('/contact',{
        templateUrl: 'templates/contact.html'
    })
    .otherwise({
        redirectTo: '/home'
    });

}]);
