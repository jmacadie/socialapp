angular.module('app')
.config(function($routeProvider) {
  $routeProvider
  .when('/', { controller: 'PostsCtrl', templateUrl: 'posts.html' })
  .when('/register', { controller: 'LoginCtrl', templateUrl: 'login.html' })
})
